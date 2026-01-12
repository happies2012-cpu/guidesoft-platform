import { NextRequest, NextResponse } from 'next/server'
import { writeFile } from 'fs/promises'
import path from 'path'

export async function POST(request: NextRequest) {
    try {
        const formData = await request.formData()

        const screenshot = formData.get('screenshot') as File
        const orderId = formData.get('orderId') as string
        const planName = formData.get('planName') as string
        const amount = formData.get('amount') as string
        const name = formData.get('name') as string
        const email = formData.get('email') as string
        const phone = formData.get('phone') as string

        if (!screenshot || !orderId) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            )
        }

        // Save screenshot to public/payment-proofs folder
        const bytes = await screenshot.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const fileName = `${orderId}_${Date.now()}.${screenshot.name.split('.').pop()}`
        const filePath = path.join(process.cwd(), 'public', 'payment-proofs', fileName)

        await writeFile(filePath, buffer)

        // TODO: Save to database
        // await supabase.from('orders').insert({
        //   order_id: orderId,
        //   plan_name: planName,
        //   amount: parseFloat(amount),
        //   customer_name: name,
        //   customer_email: email,
        //   customer_phone: phone,
        //   screenshot_url: `/payment-proofs/${fileName}`,
        //   status: 'pending_verification',
        //   created_at: new Date().toISOString()
        // })

        // TODO: Send email notification to admin
        // await sendEmail({
        //   to: process.env.ADMIN_EMAIL,
        //   subject: `New Payment Proof - Order ${orderId}`,
        //   html: `
        //     <h2>New Payment Received</h2>
        //     <p><strong>Order ID:</strong> ${orderId}</p>
        //     <p><strong>Plan:</strong> ${planName}</p>
        //     <p><strong>Amount:</strong> ₹${amount}</p>
        //     <p><strong>Customer:</strong> ${name} (${email})</p>
        //     <p><strong>Phone:</strong> ${phone}</p>
        //     <p>Please verify the payment screenshot in admin dashboard.</p>
        //   `
        // })

        // TODO: Send confirmation email to customer
        // await sendEmail({
        //   to: email,
        //   subject: `Payment Received - Order ${orderId}`,
        //   html: `
        //     <h2>Thank you for your payment!</h2>
        //     <p>Hi ${name},</p>
        //     <p>We've received your payment proof for Order ID: <strong>${orderId}</strong></p>
        //     <p>We'll verify your payment within 2-4 hours and activate your ${planName} plan.</p>
        //     <p>You'll receive a confirmation email once verified.</p>
        //   `
        // })

        return NextResponse.json({
            success: true,
            message: 'Payment proof submitted successfully',
            orderId,
        })
    } catch (error) {
        console.error('Payment proof submission error:', error)
        return NextResponse.json(
            { error: 'Failed to submit payment proof' },
            { status: 500 }
        )
    }
}
