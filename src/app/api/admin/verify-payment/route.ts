import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
    try {
        const { orderId, status } = await request.json()

        // TODO: Update database
        // await supabase
        //   .from('orders')
        //   .update({ 
        //     status: status === 'approved' ? 'paid' : 'rejected',
        //     verified_at: new Date().toISOString()
        //   })
        //   .eq('order_id', orderId)

        // TODO: Send email to customer
        // const order = await supabase
        //   .from('orders')
        //   .select('*')
        //   .eq('order_id', orderId)
        //   .single()

        // if (status === 'approved') {
        //   await sendEmail({
        //     to: order.customer_email,
        //     subject: 'Payment Approved - Welcome to GUIDESOFT!',
        //     html: `
        //       <h2>Payment Approved!</h2>
        //       <p>Hi ${order.customer_name},</p>
        //       <p>Your payment has been verified and approved.</p>
        //       <p>Your ${order.plan_name} plan is now active!</p>
        //       <p>Login to access your dashboard: ${process.env.NEXT_PUBLIC_APP_URL}/dashboard</p>
        //     `
        //   })
        // } else {
        //   await sendEmail({
        //     to: order.customer_email,
        //     subject: 'Payment Verification Failed',
        //     html: `
        //       <h2>Payment Verification Issue</h2>
        //       <p>Hi ${order.customer_name},</p>
        //       <p>We couldn't verify your payment for Order ID: ${orderId}</p>
        //       <p>Please contact support or try again.</p>
        //     `
        //   })
        // }

        return NextResponse.json({
            success: true,
            message: `Payment ${status}`,
        })
    } catch (error) {
        console.error('Verification error:', error)
        return NextResponse.json(
            { error: 'Failed to verify payment' },
            { status: 500 }
        )
    }
}
