"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Globe,
    Play,
    Loader2,
    CheckCircle2,
    XCircle,
    Download,
    Trash2,
    RefreshCw
} from "lucide-react"

interface ScrapeJob {
    job_id: string
    status: string
    urls: string[]
    total_urls: number
    processed_urls: number
    created_at: string
    completed_at?: string
}

export default function ScraperDashboard() {
    const [urls, setUrls] = useState("")
    const [prompt, setPrompt] = useState("Extract all relevant data from the page")
    const [isLoading, setIsLoading] = useState(false)
    const [currentJob, setCurrentJob] = useState<ScrapeJob | null>(null)
    const [results, setResults] = useState<any>(null)

    const startScraping = async () => {
        setIsLoading(true)
        setResults(null)

        try {
            const urlList = urls.split('\n').filter(u => u.trim())

            const response = await fetch('/api/scrape/start', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    urls: urlList,
                    user_prompt: prompt,
                    max_concurrent: 5
                })
            })

            if (!response.ok) throw new Error('Failed to start scraping')

            const job = await response.json()
            setCurrentJob(job)

            // Poll for status
            pollJobStatus(job.job_id)
        } catch (error) {
            console.error('Scraping error:', error)
            alert('Failed to start scraping job')
        } finally {
            setIsLoading(false)
        }
    }

    const pollJobStatus = async (jobId: string) => {
        const interval = setInterval(async () => {
            try {
                const response = await fetch(`/api/scrape/status/${jobId}`)
                if (!response.ok) throw new Error('Failed to get status')

                const job = await response.json()
                setCurrentJob(job)

                if (job.status === 'completed' || job.status === 'failed') {
                    clearInterval(interval)
                    if (job.status === 'completed') {
                        fetchResults(jobId)
                    }
                }
            } catch (error) {
                console.error('Status check error:', error)
                clearInterval(interval)
            }
        }, 2000)
    }

    const fetchResults = async (jobId: string) => {
        try {
            const response = await fetch(`/api/scrape/results/${jobId}`)
            if (!response.ok) throw new Error('Failed to get results')

            const data = await response.json()
            setResults(data)
        } catch (error) {
            console.error('Results fetch error:', error)
        }
    }

    const exportResults = () => {
        if (!results) return

        const dataStr = JSON.stringify(results, null, 2)
        const dataBlob = new Blob([dataStr], { type: 'application/json' })
        const url = URL.createObjectURL(dataBlob)
        const link = document.createElement('a')
        link.href = url
        link.download = `scrape-results-${currentJob?.job_id}.json`
        link.click()
    }

    return (
        <div className="min-h-screen bg-[#050505] text-white p-8">
            <div className="max-w-7xl mx-auto space-y-8">
                <div>
                    <h1 className="text-4xl font-bold mb-2">Web Scraping Studio</h1>
                    <p className="text-white/60">AI-powered data extraction from any website</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Input Section */}
                    <Card className="lg:col-span-2 glass-dark border-white/5">
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <Globe className="h-5 w-5 text-primary" />
                                Configure Scraping Job
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/80">URLs to Scrape</label>
                                <Textarea
                                    placeholder="https://example.com&#10;https://another-site.com&#10;(one URL per line)"
                                    value={urls}
                                    onChange={(e) => setUrls(e.target.value)}
                                    className="bg-white/5 border-white/10 text-white min-h-[120px]"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-medium text-white/80">AI Extraction Prompt</label>
                                <Textarea
                                    placeholder="e.g., Extract product names, prices, and descriptions"
                                    value={prompt}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    className="bg-white/5 border-white/10 text-white"
                                />
                            </div>

                            <Button
                                onClick={startScraping}
                                disabled={isLoading || !urls.trim()}
                                className="w-full bg-primary hover:bg-primary/90 text-white h-12"
                            >
                                {isLoading ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Starting...
                                    </>
                                ) : (
                                    <>
                                        <Play className="mr-2 h-4 w-4" />
                                        Start Scraping
                                    </>
                                )}
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Status Section */}
                    <Card className="glass-dark border-white/5">
                        <CardHeader>
                            <CardTitle className="text-lg">Job Status</CardTitle>
                        </CardHeader>
                        <CardContent>
                            {currentJob ? (
                                <div className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-white/60">Status</span>
                                        <Badge className={
                                            currentJob.status === 'completed' ? 'bg-emerald-500/20 text-emerald-400' :
                                                currentJob.status === 'failed' ? 'bg-rose-500/20 text-rose-400' :
                                                    'bg-primary/20 text-primary'
                                        }>
                                            {currentJob.status}
                                        </Badge>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex justify-between text-sm">
                                            <span className="text-white/60">Progress</span>
                                            <span className="text-white">{currentJob.processed_urls}/{currentJob.total_urls}</span>
                                        </div>
                                        <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary transition-all duration-500"
                                                style={{ width: `${(currentJob.processed_urls / currentJob.total_urls) * 100}%` }}
                                            />
                                        </div>
                                    </div>

                                    <div className="text-xs text-white/40 font-mono">
                                        Job ID: {currentJob.job_id.slice(0, 8)}...
                                    </div>

                                    {currentJob.status === 'completed' && results && (
                                        <Button
                                            onClick={exportResults}
                                            variant="outline"
                                            className="w-full border-white/10"
                                        >
                                            <Download className="mr-2 h-4 w-4" />
                                            Export Results
                                        </Button>
                                    )}
                                </div>
                            ) : (
                                <div className="text-center text-white/40 py-8">
                                    <Globe className="h-12 w-12 mx-auto mb-4 opacity-20" />
                                    <p className="text-sm">No active job</p>
                                </div>
                            )}
                        </CardContent>
                    </Card>
                </div>

                {/* Results Section */}
                {results && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <Card className="glass-dark border-white/5">
                            <CardHeader>
                                <CardTitle className="flex items-center justify-between">
                                    <span>Scraping Results</span>
                                    <div className="flex gap-2 text-sm">
                                        <Badge variant="outline" className="border-emerald-500/30 text-emerald-400">
                                            {results.successful} successful
                                        </Badge>
                                        {results.failed > 0 && (
                                            <Badge variant="outline" className="border-rose-500/30 text-rose-400">
                                                {results.failed} failed
                                            </Badge>
                                        )}
                                    </div>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4 max-h-[600px] overflow-y-auto">
                                    {results.results?.map((result: any, index: number) => (
                                        <div
                                            key={index}
                                            className="p-4 rounded-xl bg-white/[0.02] border border-white/5"
                                        >
                                            <div className="flex items-start justify-between mb-3">
                                                <div className="flex items-center gap-2">
                                                    {result.success ? (
                                                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                                                    ) : (
                                                        <XCircle className="h-4 w-4 text-rose-400" />
                                                    )}
                                                    <span className="text-sm font-mono text-white/60 truncate max-w-md">
                                                        {result.url}
                                                    </span>
                                                </div>
                                                <span className="text-xs text-white/40">
                                                    {new Date(result.scraped_at).toLocaleTimeString()}
                                                </span>
                                            </div>

                                            {result.success && result.data && (
                                                <pre className="text-xs bg-black/20 p-3 rounded-lg overflow-x-auto">
                                                    {JSON.stringify(result.data, null, 2)}
                                                </pre>
                                            )}

                                            {result.error && (
                                                <div className="text-xs text-rose-400 bg-rose-500/10 p-3 rounded-lg">
                                                    Error: {result.error}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                )}
            </div>
        </div>
    )
}
