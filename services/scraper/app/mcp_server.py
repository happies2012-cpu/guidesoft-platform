"""
MCP Server for GUIDESOFT Scraping Service
Provides tools and resources via Model Context Protocol
"""

from typing import Any, Sequence
import asyncio
import httpx


class ScraperMCPServer:
    """MCP Server for web scraping operations"""
    
    def __init__(self, scraper_url: str = "http://localhost:8000"):
        self.scraper_url = scraper_url
        self.client = httpx.AsyncClient(timeout=30.0)
    
    async def list_tools(self) -> list[dict[str, Any]]:
        """List available tools"""
        return [
            {
                "name": "scrape_urls",
                "description": "Scrape multiple URLs and extract structured data using AI",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "urls": {
                            "type": "array",
                            "items": {"type": "string"},
                            "description": "List of URLs to scrape"
                        },
                        "prompt": {
                            "type": "string",
                            "description": "Instructions for AI data extraction"
                        },
                        "max_concurrent": {
                            "type": "number",
                            "description": "Maximum concurrent requests",
                            "default": 5
                        }
                    },
                    "required": ["urls", "prompt"]
                }
            },
            {
                "name": "get_scrape_status",
                "description": "Check the status of a scraping job",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "job_id": {
                            "type": "string",
                            "description": "The scraping job ID"
                        }
                    },
                    "required": ["job_id"]
                }
            },
            {
                "name": "get_scrape_results",
                "description": "Get results from a completed scraping job",
                "inputSchema": {
                    "type": "object",
                    "properties": {
                        "job_id": {
                            "type": "string",
                            "description": "The scraping job ID"
                        }
                    },
                    "required": ["job_id"]
                }
            }
        ]
    
    async def call_tool(self, name: str, arguments: dict[str, Any]) -> Sequence[Any]:
        """Execute a tool"""
        if name == "scrape_urls":
            return await self._scrape_urls(arguments)
        elif name == "get_scrape_status":
            return await self._get_status(arguments)
        elif name == "get_scrape_results":
            return await self._get_results(arguments)
        else:
            raise ValueError(f"Unknown tool: {name}")
    
    async def _scrape_urls(self, args: dict[str, Any]) -> Sequence[dict[str, Any]]:
        """Start a scraping job"""
        response = await self.client.post(
            f"{self.scraper_url}/scrape/start",
            json={
                "urls": args["urls"],
                "user_prompt": args["prompt"],
                "max_concurrent": args.get("max_concurrent", 5)
            }
        )
        response.raise_for_status()
        data = response.json()
        
        return [{
            "type": "text",
            "text": f"Scraping job started successfully!\n\nJob ID: {data['job_id']}\nStatus: {data['status']}\nTotal URLs: {data['total_urls']}\n\nUse 'get_scrape_status' to check progress."
        }]
    
    async def _get_status(self, args: dict[str, Any]) -> Sequence[dict[str, Any]]:
        """Get job status"""
        response = await self.client.get(
            f"{self.scraper_url}/scrape/status/{args['job_id']}"
        )
        response.raise_for_status()
        data = response.json()
        
        return [{
            "type": "text",
            "text": f"Job Status: {data['status']}\nProcessed: {data['processed_urls']}/{data['total_urls']} URLs"
        }]
    
    async def _get_results(self, args: dict[str, Any]) -> Sequence[dict[str, Any]]:
        """Get job results"""
        response = await self.client.get(
            f"{self.scraper_url}/scrape/results/{args['job_id']}"
        )
        response.raise_for_status()
        data = response.json()
        
        return [{
            "type": "text",
            "text": f"Scraping Results:\n\nTotal URLs: {data['total_urls']}\nSuccessful: {data['successful']}\nFailed: {data['failed']}\n\nResults available in response data."
        }, {
            "type": "resource",
            "resource": {
                "uri": f"scrape://results/{args['job_id']}",
                "mimeType": "application/json",
                "text": str(data['results'])
            }
        }]
    
    async def list_resources(self) -> list[dict[str, Any]]:
        """List available resources"""
        response = await self.client.get(f"{self.scraper_url}/scrape/jobs")
        response.raise_for_status()
        jobs = response.json()["jobs"]
        
        return [
            {
                "uri": f"scrape://job/{job['job_id']}",
                "name": f"Scraping Job {job['job_id'][:8]}",
                "description": f"Status: {job['status']}, URLs: {job['total_urls']}",
                "mimeType": "application/json"
            }
            for job in jobs
        ]
    
    async def read_resource(self, uri: str) -> str:
        """Read a resource"""
        if uri.startswith("scrape://job/"):
            job_id = uri.replace("scrape://job/", "")
            response = await self.client.get(f"{self.scraper_url}/scrape/status/{job_id}")
            response.raise_for_status()
            return response.text
        elif uri.startswith("scrape://results/"):
            job_id = uri.replace("scrape://results/", "")
            response = await self.client.get(f"{self.scraper_url}/scrape/results/{job_id}")
            response.raise_for_status()
            return response.text
        else:
            raise ValueError(f"Unknown resource URI: {uri}")


# Example usage
async def main():
    server = ScraperMCPServer()
    
    # List tools
    tools = await server.list_tools()
    print("Available tools:", [t["name"] for t in tools])
    
    # Example: Scrape URLs
    result = await server.call_tool("scrape_urls", {
        "urls": ["https://themeforest.net/"],
        "prompt": "Extract theme names, prices, and ratings"
    })
    print("Scrape result:", result)


if __name__ == "__main__":
    asyncio.run(main())
