import { NextRequest, NextResponse } from 'next/server'
import crypto from 'crypto'

export async function POST(request: NextRequest) {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        } = await request.json()

        // Verify signature
        const sign = razorpay_order_id + '|' + razorpay_payment_id
        const expectedSign = crypto
            .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
            .update(sign.toString())
            .digest('hex')

        if (razorpay_signature === expectedSign) {
            // Payment is verified
            // TODO: Update database
            // await supabase.from('orders').update({
            //   razorpay_payment_id: razorpay_payment_id,
            //   status: 'paid',
            //   paid_at: new Date().toISOString(),
            // }).eq('razorpay_order_id', razorpay_order_id)

            // TODO: Send confirmation email
            // await sendPaymentConfirmationEmail(...)

            return NextResponse.json({
                success: true,
                message: 'Payment verified successfully',
            })
        } else {
            return NextResponse.json(
                { success: false, message: 'Invalid signature' },
                { status: 400 }
            )
        }
    } catch (error) {
        console.error('Payment verification error:', error)
        return NextResponse.json(
            { error: 'Payment verification failed' },
            { status: 500 }
        )
    }
}
