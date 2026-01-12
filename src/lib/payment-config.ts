// Simple UPI payment configuration
export const UPI_CONFIG = {
    upiId: '8884162999-4@ybl',
    merchantName: 'GUIDESOFT',
    currency: 'INR',
    currencySymbol: '₹',
}

// Pricing plans in INR
export const PRICING_PLANS = {
    starter: {
        name: 'Starter',
        price: 3999,
        interval: 'month',
        features: [
            'Access to 50+ AI specialists',
            '5 projects per month',
            'Basic analytics dashboard',
            'Email support',
            'Community access',
            'Standard integrations'
        ]
    },
    professional: {
        name: 'Professional',
        price: 15999,
        interval: 'month',
        popular: true,
        features: [
            'Access to 200+ AI specialists',
            'Unlimited projects',
            'Advanced analytics & reporting',
            'Priority support (24/7)',
            'Custom AI model training',
            'Premium integrations',
            'Dedicated account manager',
            'API access'
        ]
    },
    enterprise: {
        name: 'Enterprise',
        price: null,
        interval: 'custom',
        features: [
            'Access to 300+ AI specialists',
            'Unlimited everything',
            'White-label solutions',
            'Enterprise SLA',
            'Custom AI development',
            'On-premise deployment',
            'Security & compliance',
            'Training & onboarding'
        ]
    }
}

// GST configuration
export const GST_RATE = 0.18 // 18%

// Helper function to format currency
export function formatCurrency(amount: number): string {
    return `₹${new Intl.NumberFormat('en-IN').format(amount)}`
}

// Calculate total with GST
export function calculateTotal(amount: number): {
    baseAmount: number
    gstAmount: number
    totalAmount: number
} {
    const gstAmount = Math.round(amount * GST_RATE)
    return {
        baseAmount: amount,
        gstAmount,
        totalAmount: amount + gstAmount
    }
}

// Generate UPI payment string for QR code
export function generateUPIString(amount: number, orderId: string): string {
    const { upiId, merchantName } = UPI_CONFIG
    return `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(`Order-${orderId}`)}`
}

// Generate unique order ID
export function generateOrderId(): string {
    return `GS${Date.now()}${Math.random().toString(36).substr(2, 5).toUpperCase()}`
}
