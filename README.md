# GUIDESOFT Web Scraping & AI Platform

## Quick Start

### 1. Install Dependencies

**Frontend (Next.js):**
```bash
cd /Users/mac/.gemini/antigravity/scratch/gsgroups.net
npm install
```

**Backend (Python):**
```bash
cd services/scraper
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

### 2. Configure Environment

Create `.env.local` in the root:
```env
PYTHON_SERVICE_URL=http://localhost:8000
OPENAI_API_KEY=your_openai_key
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_key
```

Create `.env` in `services/scraper/`:
```env
SCRAPEGRAPH_API_KEY=sgai-40a1d4f5-3cd6-49e4-b650-9bb9dccc648c
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/guidesoft
REDIS_URL=redis://localhost:6379/0
```

### 3. Run Services

**Terminal 1 - Python Scraping Service:**
```bash
cd services/scraper
source venv/bin/activate
python app/main.py
```

**Terminal 2 - Next.js Frontend:**
```bash
npm run dev
```

### 4. Access the Platform

- **Main Site**: http://localhost:3000
- **AI Chat**: http://localhost:3000/ai-chat
- **Scraping Dashboard**: http://localhost:3000/dashboard/scraper
- **Python API Docs**: http://localhost:8000/docs

## Features Implemented

✅ **Web Scraping Service**
- AI-powered data extraction with ScrapeGraph
- Concurrent URL processing
- Background job management
- Real-time status updates

✅ **MCP Server**
- Tool-based scraping operations
- Resource management
- Protocol-compliant implementation

✅ **AI SDK Integration**
- Streaming chat with Gemini 2.0
- Tool calling for scraping
- Multi-step reasoning

✅ **Dashboards**
- Scraping job monitor
- Real-time progress tracking
- Results visualization
- Export functionality

## Example Usage

### Via AI Chat
```
User: "Scrape https://themeforest.net and extract the top 5 themes with their prices"

AI: [Uses scrape_websites tool]
    [Monitors progress with check_scrape_status]
    [Retrieves results with get_scrape_results]
    [Presents formatted data]
```

### Via API
```bash
curl -X POST http://localhost:8000/scrape/start \
  -H "Content-Type: application/json" \
  -d '{
    "urls": ["https://example.com"],
    "user_prompt": "Extract product names and prices",
    "max_concurrent": 5
  }'
```

## Next Steps

1. Add database persistence (PostgreSQL)
2. Implement user authentication
3. Add export to CSV/Excel
4. Build analytics dashboard
5. Deploy to production
