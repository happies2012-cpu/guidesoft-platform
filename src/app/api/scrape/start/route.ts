import { NextRequest, NextResponse } from 'next/server'

const PYTHON_SERVICE_URL = process.env.PYTHON_SERVICE_URL || 'http://localhost:8000'

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()

        const response = await fetch(`${PYTHON_SERVICE_URL}/scrape/start`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })

        if (!response.ok) {
            throw new Error(`Scraping service error: ${response.statusText}`)
        }

        const data = await response.json()
        return NextResponse.json(data)
    } catch (error) {
        console.error('Scrape start error:', error)
        return NextResponse.json(
            { error: 'Failed to start scraping job' },
            { status: 500 }
        )
    }
}
