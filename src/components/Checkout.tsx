"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { formatCurrency, calculateTotal, generateUPIString, generateOrderId } from "@/lib/payment-config"
import { Loader2, CheckCircle2, Upload, QrCode as QrCodeIcon } from "lucide-react"
import Image from "next/image"
import QRCode from "qrcode"

interface SimpleCheckoutProps {
    planName: string
    amount: number
    onSuccess?: () => void
}

export function SimpleCheckout({ planName, amount, onSuccess }: SimpleCheckoutProps) {
    const [step, setStep] = useState<'qr' | 'upload' | 'success'>('qr')
    const [qrCode, setQRCode] = useState<string>('')
    const [orderId, setOrderId] = useState<string>('')
    const [screenshot, setScreenshot] = useState<File | null>(null)
    const [uploading, setUploading] = useState(false)
    const [userDetails, setUserDetails] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const { baseAmount, gstAmount, totalAmount } = calculateTotal(amount)

    // Generate QR code
    const handleGenerateQR = async () => {
        const newOrderId = generateOrderId()
        setOrderId(newOrderId)

        const upiString = generateUPIString(totalAmount, newOrderId)

        const qr = await QRCode.toDataURL(upiString, {
            width: 400,
            margin: 2,
            color: {
                dark: '#000000',
                light: '#FFFFFF',
            },
        })

        setQRCode(qr)
    }

    // Handle screenshot upload
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setScreenshot(e.target.files[0])
        }
    }

    // Submit payment proof
    const handleSubmitProof = async () => {
        if (!screenshot || !userDetails.name || !userDetails.email) {
            alert('Please fill all details and upload screenshot')
            return
        }

        setUploading(true)

        try {
            // Create FormData for file upload
            const formData = new FormData()
            formData.append('screenshot', screenshot)
            formData.append('orderId', orderId)
            formData.append('planName', planName)
            formData.append('amount', totalAmount.toString())
            formData.append('name', userDetails.name)
            formData.append('email', userDetails.email)
            formData.append('phone', userDetails.phone)

            const response = await fetch('/api/payments/submit-proof', {
                method: 'POST',
                body: formData,
            })

            if (response.ok) {
                setStep('success')
                onSuccess?.()
            } else {
                alert('Failed to submit payment proof. Please try again.')
            }
        } catch (error) {
            console.error('Upload error:', error)
            alert('Failed to upload. Please try again.')
        } finally {
            setUploading(false)
        }
    }

    // Initialize QR code on mount
    useState(() => {
        handleGenerateQR()
    })

    if (step === 'success') {
        return (
            <Card className="glass-premium max-w-md mx-auto">
                <CardContent className="pt-12 pb-12 text-center">
                    <CheckCircle2 className="h-20 w-20 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-white mb-3">Payment Submitted!</h3>
                    <p className="text-white/60 mb-2">Order ID: <span className="text-white font-mono">{orderId}</span></p>
                    <p className="text-white/60 mb-6">
                        We'll verify your payment within 2-4 hours and send confirmation to {userDetails.email}
                    </p>
                    <div className="space-y-3">
                        <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                            <p className="text-sm text-blue-300">
                                💡 Save your Order ID for reference
                            </p>
                        </div>
                        <Button
                            onClick={() => window.location.href = '/'}
                            className="w-full bg-primary hover:bg-primary/90"
                        >
                            Back to Home
                        </Button>
                    </div>
                </CardContent>
            </Card>
        )
    }

    if (step === 'upload') {
        return (
            <Card className="glass-premium max-w-md mx-auto">
                <CardHeader>
                    <CardTitle>Upload Payment Screenshot</CardTitle>
                    <CardDescription>Order ID: {orderId}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* User Details */}
                    <div className="space-y-4">
                        <div>
                            <label className="text-white text-sm font-medium mb-2 block">Full Name *</label>
                            <Input
                                value={userDetails.name}
                                onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                                placeholder="John Doe"
                                className="bg-white/5 border-white/10 text-white"
                            />
                        </div>
                        <div>
                            <label className="text-white text-sm font-medium mb-2 block">Email *</label>
                            <Input
                                type="email"
                                value={userDetails.email}
                                onChange={(e) => setUserDetails({ ...userDetails, email: e.target.value })}
                                placeholder="john@example.com"
                                className="bg-white/5 border-white/10 text-white"
                            />
                        </div>
                        <div>
                            <label className="text-white text-sm font-medium mb-2 block">Phone</label>
                            <Input
                                type="tel"
                                value={userDetails.phone}
                                onChange={(e) => setUserDetails({ ...userDetails, phone: e.target.value })}
                                placeholder="+91 98765 43210"
                                className="bg-white/5 border-white/10 text-white"
                            />
                        </div>
                    </div>

                    {/* Screenshot Upload */}
                    <div>
                        <label className="text-white text-sm font-medium mb-2 block">Payment Screenshot *</label>
                        <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                                className="hidden"
                                id="screenshot-upload"
                            />
                            <label htmlFor="screenshot-upload" className="cursor-pointer">
                                {screenshot ? (
                                    <div className="space-y-2">
                                        <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto" />
                                        <p className="text-white font-medium">{screenshot.name}</p>
                                        <p className="text-white/40 text-sm">Click to change</p>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        <Upload className="h-12 w-12 text-white/40 mx-auto" />
                                        <p className="text-white">Click to upload screenshot</p>
                                        <p className="text-white/40 text-sm">PNG, JPG up to 10MB</p>
                                    </div>
                                )}
                            </label>
                        </div>
                    </div>

                    {/* Instructions */}
                    <div className="p-4 rounded-lg bg-yellow-500/10 border border-yellow-500/20">
                        <p className="text-sm text-yellow-300">
                            📸 Upload a clear screenshot showing:
                            <br />• Transaction ID
                            <br />• Amount paid (₹{totalAmount})
                            <br />• Date & time
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3">
                        <Button
                            onClick={() => setStep('qr')}
                            variant="outline"
                            className="flex-1"
                        >
                            Back to QR
                        </Button>
                        <Button
                            onClick={handleSubmitProof}
                            disabled={uploading || !screenshot || !userDetails.name || !userDetails.email}
                            className="flex-1 bg-primary hover:bg-primary/90"
                        >
                            {uploading ? (
                                <>
                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                    Uploading...
                                </>
                            ) : (
                                'Submit'
                            )}
                        </Button>
                    </div>
                </CardContent>
            </Card>
        )
    }

    return (
        <Card className="glass-premium max-w-md mx-auto">
            <CardHeader>
                <CardTitle>Scan QR Code to Pay</CardTitle>
                <CardDescription>{planName} Plan</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                {/* Price Breakdown */}
                <div className="space-y-3 p-4 rounded-lg bg-white/5">
                    <div className="flex justify-between text-white/80">
                        <span>Base Amount</span>
                        <span>{formatCurrency(baseAmount)}</span>
                    </div>
                    <div className="flex justify-between text-white/80">
                        <span>GST (18%)</span>
                        <span>{formatCurrency(gstAmount)}</span>
                    </div>
                    <div className="h-px bg-white/10" />
                    <div className="flex justify-between text-white font-bold text-lg">
                        <span>Total Amount</span>
                        <span>{formatCurrency(totalAmount)}</span>
                    </div>
                </div>

                {/* QR Code */}
                {qrCode && (
                    <div className="text-center space-y-4">
                        <div className="inline-block p-4 bg-white rounded-2xl">
                            <Image
                                src={qrCode}
                                alt="UPI QR Code"
                                width={300}
                                height={300}
                                className="rounded-lg"
                            />
                        </div>
                        <div className="space-y-2">
                            <p className="text-white font-semibold">Scan with any UPI app</p>
                            <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                                <span>PhonePe</span>
                                <span>•</span>
                                <span>Google Pay</span>
                                <span>•</span>
                                <span>Paytm</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Order ID */}
                <div className="p-3 rounded-lg bg-white/5 text-center">
                    <p className="text-white/60 text-xs mb-1">Order ID</p>
                    <p className="text-white font-mono font-semibold">{orderId}</p>
                </div>

                {/* Instructions */}
                <div className="space-y-3">
                    <div className="flex items-start gap-3 text-sm">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">1</div>
                        <p className="text-white/70">Scan QR code with your UPI app</p>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">2</div>
                        <p className="text-white/70">Pay exactly ₹{totalAmount}</p>
                    </div>
                    <div className="flex items-start gap-3 text-sm">
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary font-bold">3</div>
                        <p className="text-white/70">Take screenshot of successful payment</p>
                    </div>
                </div>

                {/* Next Button */}
                <Button
                    onClick={() => setStep('upload')}
                    className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold"
                >
                    I've Paid - Upload Screenshot
                </Button>

                <p className="text-xs text-white/40 text-center">
                    Payment will be verified within 2-4 hours
                </p>
            </CardContent>
        </Card>
    )
}
