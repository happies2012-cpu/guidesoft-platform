"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, XCircle, Clock, Eye } from "lucide-react"
import Image from "next/image"

interface PaymentProof {
    orderId: string
    planName: string
    amount: number
    customerName: string
    customerEmail: string
    customerPhone: string
    screenshotUrl: string
    status: 'pending' | 'approved' | 'rejected'
    createdAt: string
}

export default function AdminDashboard() {
    const [payments, setPayments] = useState<PaymentProof[]>([])
    const [selectedPayment, setSelectedPayment] = useState<PaymentProof | null>(null)
    const [loading, setLoading] = useState(true)

    // Fetch pending payments
    useEffect(() => {
        fetchPayments()
    }, [])

    const fetchPayments = async () => {
        try {
            const response = await fetch('/api/admin/payments')
            const data = await response.json()
            setPayments(data.payments || [])
        } catch (error) {
            console.error('Failed to fetch payments:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleVerify = async (orderId: string, status: 'approved' | 'rejected') => {
        try {
            await fetch('/api/admin/verify-payment', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ orderId, status }),
            })

            // Refresh list
            fetchPayments()
            setSelectedPayment(null)
        } catch (error) {
            console.error('Verification failed:', error)
        }
    }

    const pendingCount = payments.filter(p => p.status === 'pending').length
    const approvedCount = payments.filter(p => p.status === 'approved').length
    const totalRevenue = payments
        .filter(p => p.status === 'approved')
        .reduce((sum, p) => sum + p.amount, 0)

    return (
        <div className="min-h-screen bg-[#050C16] p-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-white mb-8">Admin Dashboard</h1>

                {/* Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <Card className="glass-premium">
                        <CardHeader>
                            <CardTitle className="text-white/60 text-sm">Pending Verification</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-yellow-500">{pendingCount}</div>
                        </CardContent>
                    </Card>

                    <Card className="glass-premium">
                        <CardHeader>
                            <CardTitle className="text-white/60 text-sm">Approved</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-green-500">{approvedCount}</div>
                        </CardContent>
                    </Card>

                    <Card className="glass-premium">
                        <CardHeader>
                            <CardTitle className="text-white/60 text-sm">Total Revenue</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-white">₹{totalRevenue.toLocaleString('en-IN')}</div>
                        </CardContent>
                    </Card>

                    <Card className="glass-premium">
                        <CardHeader>
                            <CardTitle className="text-white/60 text-sm">Total Orders</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold text-white">{payments.length}</div>
                        </CardContent>
                    </Card>
                </div>

                {/* Payments List */}
                <Card className="glass-premium">
                    <CardHeader>
                        <CardTitle className="text-white">Payment Verifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                        {loading ? (
                            <div className="text-center py-12 text-white/60">Loading...</div>
                        ) : payments.length === 0 ? (
                            <div className="text-center py-12 text-white/60">No payments yet</div>
                        ) : (
                            <div className="space-y-4">
                                {payments.map((payment) => (
                                    <div
                                        key={payment.orderId}
                                        className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex-1">
                                                <div className="flex items-center gap-3 mb-2">
                                                    <span className="text-white font-mono font-semibold">{payment.orderId}</span>
                                                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${payment.status === 'pending' ? 'bg-yellow-500/20 text-yellow-500' :
                                                            payment.status === 'approved' ? 'bg-green-500/20 text-green-500' :
                                                                'bg-red-500/20 text-red-500'
                                                        }`}>
                                                        {payment.status === 'pending' ? (
                                                            <><Clock className="inline h-3 w-3 mr-1" />Pending</>
                                                        ) : payment.status === 'approved' ? (
                                                            <><CheckCircle2 className="inline h-3 w-3 mr-1" />Approved</>
                                                        ) : (
                                                            <><XCircle className="inline h-3 w-3 mr-1" />Rejected</>
                                                        )}
                                                    </span>
                                                </div>
                                                <div className="text-white/60 text-sm space-y-1">
                                                    <div><strong>Plan:</strong> {payment.planName}</div>
                                                    <div><strong>Amount:</strong> ₹{payment.amount.toLocaleString('en-IN')}</div>
                                                    <div><strong>Customer:</strong> {payment.customerName} ({payment.customerEmail})</div>
                                                    <div><strong>Phone:</strong> {payment.customerPhone}</div>
                                                    <div><strong>Date:</strong> {new Date(payment.createdAt).toLocaleString()}</div>
                                                </div>
                                            </div>
                                            <div className="flex gap-2">
                                                <Button
                                                    onClick={() => setSelectedPayment(payment)}
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    <Eye className="h-4 w-4 mr-1" />
                                                    View Screenshot
                                                </Button>
                                                {payment.status === 'pending' && (
                                                    <>
                                                        <Button
                                                            onClick={() => handleVerify(payment.orderId, 'approved')}
                                                            size="sm"
                                                            className="bg-green-600 hover:bg-green-700"
                                                        >
                                                            <CheckCircle2 className="h-4 w-4 mr-1" />
                                                            Approve
                                                        </Button>
                                                        <Button
                                                            onClick={() => handleVerify(payment.orderId, 'rejected')}
                                                            size="sm"
                                                            variant="destructive"
                                                        >
                                                            <XCircle className="h-4 w-4 mr-1" />
                                                            Reject
                                                        </Button>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </CardContent>
                </Card>

                {/* Screenshot Modal */}
                {selectedPayment && (
                    <div
                        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                        onClick={() => setSelectedPayment(null)}
                    >
                        <div className="max-w-4xl w-full bg-[#0D1525] rounded-3xl p-6" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center justify-between mb-4">
                                <h3 className="text-xl font-bold text-white">Payment Screenshot - {selectedPayment.orderId}</h3>
                                <button
                                    onClick={() => setSelectedPayment(null)}
                                    className="text-white/60 hover:text-white"
                                >
                                    ✕
                                </button>
                            </div>
                            <div className="relative w-full h-[600px] bg-white rounded-lg">
                                <Image
                                    src={selectedPayment.screenshotUrl}
                                    alt="Payment Screenshot"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            {selectedPayment.status === 'pending' && (
                                <div className="flex gap-3 mt-6">
                                    <Button
                                        onClick={() => handleVerify(selectedPayment.orderId, 'approved')}
                                        className="flex-1 bg-green-600 hover:bg-green-700"
                                    >
                                        <CheckCircle2 className="h-4 w-4 mr-2" />
                                        Approve Payment
                                    </Button>
                                    <Button
                                        onClick={() => handleVerify(selectedPayment.orderId, 'rejected')}
                                        className="flex-1"
                                        variant="destructive"
                                    >
                                        <XCircle className="h-4 w-4 mr-2" />
                                        Reject Payment
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
