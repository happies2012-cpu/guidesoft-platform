"""
GUIDESOFT Web Scraping Service
AI-powered data extraction using ScrapeGraph
"""

from fastapi import FastAPI, HTTPException, BackgroundTasks
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field, HttpUrl
from typing import List, Optional, Dict, Any
from datetime import datetime
import uuid
import asyncio
from scrapegraph_py import Client
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="GUIDESOFT Scraping API",
    description="AI-powered web scraping and data extraction",
    version="1.0.0"
)

# CORS configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "https://gsgroups.net"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize ScrapeGraph client
scrape_client = Client(api_key=os.getenv("SCRAPEGRAPH_API_KEY"))

# In-memory storage (replace with database in production)
jobs_db: Dict[str, Dict[str, Any]] = {}


# Pydantic Models
class ScrapeSchema(BaseModel):
    """Dynamic schema for scraped data"""
    fields: Dict[str, str] = Field(
        description="Field names and their types (str, int, float, list, etc.)"
    )


class ScrapeRequest(BaseModel):
    """Request model for scraping job"""
    urls: List[HttpUrl] = Field(..., description="List of URLs to scrape")
    user_prompt: str = Field(..., description="Instructions for AI scraper")
    schema: Optional[ScrapeSchema] = None
    max_concurrent: int = Field(default=5, ge=1, le=20)


class ScrapeJob(BaseModel):
    """Scraping job status"""
    job_id: str
    status: str  # pending, processing, completed, failed
    urls: List[str]
    total_urls: int
    processed_urls: int
    results: Optional[List[Dict[str, Any]]] = None
    error: Optional[str] = None
    created_at: datetime
    completed_at: Optional[datetime] = None


class ThemeData(BaseModel):
    """Schema for theme/template data"""
    name: List[str] = Field(default_factory=list)
    price: List[str] = Field(default_factory=list)
    rating: List[float] = Field(default_factory=list)
    sales: List[int] = Field(default_factory=list)
    category: List[str] = Field(default_factory=list)
    author: List[str] = Field(default_factory=list)
    preview_url: List[str] = Field(default_factory=list)
    features: List[str] = Field(default_factory=list)


async def scrape_single_url(url: str, prompt: str, schema: Optional[Any] = None) -> Dict[str, Any]:
    """Scrape a single URL with AI extraction"""
    try:
        response = scrape_client.smartscraper(
            website_url=str(url),
            user_prompt=prompt,
            output_schema=schema if schema else None
        )
        return {
            "url": str(url),
            "success": True,
            "data": response,
            "scraped_at": datetime.utcnow().isoformat()
        }
    except Exception as e:
        return {
            "url": str(url),
            "success": False,
            "error": str(e),
            "scraped_at": datetime.utcnow().isoformat()
        }


async def process_scraping_job(job_id: str, urls: List[str], prompt: str, schema: Optional[Any], max_concurrent: int):
    """Process scraping job in background"""
    jobs_db[job_id]["status"] = "processing"
    
    results = []
    semaphore = asyncio.Semaphore(max_concurrent)
    
    async def scrape_with_semaphore(url: str):
        async with semaphore:
            result = await scrape_single_url(url, prompt, schema)
            results.append(result)
            jobs_db[job_id]["processed_urls"] += 1
            return result
    
    # Process all URLs concurrently with limit
    await asyncio.gather(*[scrape_with_semaphore(url) for url in urls])
    
    # Update job status
    jobs_db[job_id]["status"] = "completed"
    jobs_db[job_id]["results"] = results
    jobs_db[job_id]["completed_at"] = datetime.utcnow()


@app.get("/")
async def root():
    """Health check endpoint"""
    return {
        "service": "GUIDESOFT Scraping API",
        "status": "operational",
        "version": "1.0.0"
    }


@app.post("/scrape/start", response_model=ScrapeJob)
async def start_scraping(request: ScrapeRequest, background_tasks: BackgroundTasks):
    """
    Start a new scraping job
    
    - **urls**: List of URLs to scrape
    - **user_prompt**: AI instructions for data extraction
    - **schema**: Optional Pydantic schema for structured output
    - **max_concurrent**: Maximum concurrent requests (1-20)
    """
    job_id = str(uuid.uuid4())
    
    # Create job record
    job = {
        "job_id": job_id,
        "status": "pending",
        "urls": [str(url) for url in request.urls],
        "total_urls": len(request.urls),
        "processed_urls": 0,
        "results": None,
        "error": None,
        "created_at": datetime.utcnow(),
        "completed_at": None
    }
    
    jobs_db[job_id] = job
    
    # Start background processing
    background_tasks.add_task(
        process_scraping_job,
        job_id,
        [str(url) for url in request.urls],
        request.user_prompt,
        request.schema,
        request.max_concurrent
    )
    
    return ScrapeJob(**job)


@app.get("/scrape/status/{job_id}", response_model=ScrapeJob)
async def get_job_status(job_id: str):
    """Get the status of a scraping job"""
    if job_id not in jobs_db:
        raise HTTPException(status_code=404, detail="Job not found")
    
    return ScrapeJob(**jobs_db[job_id])


@app.get("/scrape/results/{job_id}")
async def get_job_results(job_id: str):
    """Get the results of a completed scraping job"""
    if job_id not in jobs_db:
        raise HTTPException(status_code=404, detail="Job not found")
    
    job = jobs_db[job_id]
    
    if job["status"] != "completed":
        raise HTTPException(
            status_code=400,
            detail=f"Job is not completed yet. Current status: {job['status']}"
        )
    
    return {
        "job_id": job_id,
        "total_urls": job["total_urls"],
        "successful": len([r for r in job["results"] if r.get("success")]),
        "failed": len([r for r in job["results"] if not r.get("success")]),
        "results": job["results"],
        "completed_at": job["completed_at"]
    }


@app.delete("/scrape/job/{job_id}")
async def delete_job(job_id: str):
    """Delete a scraping job and its results"""
    if job_id not in jobs_db:
        raise HTTPException(status_code=404, detail="Job not found")
    
    del jobs_db[job_id]
    return {"message": "Job deleted successfully"}


@app.get("/scrape/jobs")
async def list_jobs(limit: int = 50, status: Optional[str] = None):
    """List all scraping jobs with optional status filter"""
    jobs = list(jobs_db.values())
    
    if status:
        jobs = [j for j in jobs if j["status"] == status]
    
    jobs.sort(key=lambda x: x["created_at"], reverse=True)
    
    return {
        "total": len(jobs),
        "jobs": jobs[:limit]
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
