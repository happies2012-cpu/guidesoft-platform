import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
    try {
        // TODO: Fetch from database
        // const { data: payments } = await supabase
        //   .from('orders')
        //   .select('*')
        //   .order('created_at', { ascending: false })

        // Mock data for now
        const payments: any[] = []

        return NextResponse.json({ payments })
    } catch (error) {
        console.error('Failed to fetch payments:', error)
        return NextResponse.json(
            { error: 'Failed to fetch payments' },
            { status: 500 }
        )
    }
}
