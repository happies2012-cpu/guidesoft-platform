import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const { name, email, phone, message } = await request.json()

        // TODO: Save to database
        // await supabase.from('contacts').insert({
        //   name,
        //   email,
        //   phone,
        //   message,
        //   status: 'new',
        // })

        // TODO: Send email notification to admin
        // await sendEmail({
        //   to: process.env.ADMIN_EMAIL,
        //   subject: `New Contact Form Submission from ${name}`,
        //   html: `...`
        // })

        // TODO: Send auto-reply to user
        // await sendEmail({
        //   to: email,
        //   subject: 'We received your message',
        //   html: `...`
        // })

        return NextResponse.json({
            success: true,
            message: 'Message received successfully',
        })
    } catch (error) {
        console.error('Contact form error:', error)
        return NextResponse.json(
            { error: 'Failed to submit form' },
            { status: 500 }
        )
    }
}
