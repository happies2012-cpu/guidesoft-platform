import { NextRequest, NextResponse } from 'next/server'

const PYTHON_SERVICE_URL = process.env.PYTHON_SERVICE_URL || 'http://localhost:8000'

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ jobId: string }> }
) {
    const { jobId } = await params

    try {
        const response = await fetch(
            `${PYTHON_SERVICE_URL}/scrape/results/${jobId}`
        )

        if (!response.ok) {
            if (response.status === 404) {
                return NextResponse.json(
                    { error: 'Job not found' },
                    { status: 404 }
                )
            }
            if (response.status === 400) {
                const error = await response.json()
                return NextResponse.json(error, { status: 400 })
            }
            throw new Error(`Scraping service error: ${response.statusText}`)
        }

        const data = await response.json()
        return NextResponse.json(data)
    } catch (error) {
        console.error('Get results error:', error)
        return NextResponse.json(
            { error: 'Failed to get job results' },
            { status: 500 }
        )
    }
}
