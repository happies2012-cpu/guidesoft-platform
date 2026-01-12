"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, X } from "lucide-react"
import { formatCurrency } from "@/lib/payment-config"
import { SimpleCheckout } from "@/components/Checkout"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

const plans = [
    {
        name: "Starter",
        price: 3999,
        period: "/month",
        description: "Perfect for individuals and small teams getting started with AI.",
        features: [
            "Access to 50+ AI specialists",
            "5 projects per month",
            "Basic analytics dashboard",
            "Email support",
            "Community access",
            "Standard integrations"
        ],
        popular: false
    },
    {
        name: "Professional",
        price: 15999,
        period: "/month",
        description: "For growing businesses scaling their AI capabilities.",
        features: [
            "Access to 200+ AI specialists",
            "Unlimited projects",
            "Advanced analytics & reporting",
            "Priority support (24/7)",
            "Custom AI model training",
            "Premium integrations",
            "Dedicated account manager",
            "API access"
        ],
        popular: true
    },
    {
        name: "Enterprise",
        price: null,
        period: "",
        description: "Tailored solutions for large organizations with complex needs.",
        features: [
            "Access to 300+ AI specialists",
            "Unlimited everything",
            "White-label solutions",
            "Enterprise SLA",
            "Custom AI development",
            "On-premise deployment",
            "Security & compliance",
            "Training & onboarding"
        ],
        popular: false
    }
]

export function Pricing() {
    const [checkoutOpen, setCheckoutOpen] = useState(false)
    const [selectedPlan, setSelectedPlan] = useState<{ name: string; price: number } | null>(null)

    const handleSelectPlan = (plan: typeof plans[0]) => {
        if (plan.price) {
            setSelectedPlan({ name: plan.name, price: plan.price })
            setCheckoutOpen(true)
        } else {
            // For enterprise, redirect to contact
            window.location.href = '/contact'
        }
    }

    return (
        <>
            <section className="py-24 bg-[#0D1525] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid opacity-20" />

                <div className="container-centered relative z-10">
                    <div className="text-center mb-16 animate-fade-up">
                        <div className="inline-block mb-4">
                            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                                Pricing
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Simple, Transparent Pricing
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto text-lg">
                            Choose the perfect plan for your needs. All plans include a 14-day free trial.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative p-8 rounded-3xl ${plan.popular
                                    ? 'glass-premium border-2 border-primary/50 shadow-premium-lg'
                                    : 'glass-premium'
                                    } card-hover`}
                            >
                                {/* Popular Badge */}
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                                        <div className="flex items-center gap-1 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary to-accent text-white text-xs font-bold shadow-lg">
                                            <Sparkles className="h-3 w-3" />
                                            MOST POPULAR
                                        </div>
                                    </div>
                                )}

                                {/* Plan Header */}
                                <div className="mb-6">
                                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                                    <p className="text-white/60 text-sm mb-6">{plan.description}</p>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-5xl font-bold text-white">
                                            {plan.price ? formatCurrency(plan.price) : "Custom"}
                                        </span>
                                        <span className="text-white/40 text-sm">{plan.period}</span>
                                    </div>
                                </div>

                                {/* Features */}
                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <div className="mt-0.5">
                                                <Check className="h-5 w-5 text-primary" />
                                            </div>
                                            <span className="text-white/70 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <Button
                                    onClick={() => handleSelectPlan(plan)}
                                    className={`w-full h-12 rounded-full font-semibold ${plan.popular
                                        ? 'bg-primary hover:bg-primary/90 text-white glow-primary'
                                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                                        }`}
                                >
                                    {plan.price ? 'Get Started' : 'Contact Sales'}
                                </Button>
                            </motion.div>
                        ))}
                    </div>

                    {/* FAQ Link */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        viewport={{ once: true }}
                        className="text-center mt-12"
                    >
                        <p className="text-white/60">
                            Have questions?{" "}
                            <a href="/faq" className="text-primary hover:underline">
                                View our FAQ
                            </a>{" "}
                            or{" "}
                            <a href="/contact" className="text-primary hover:underline">
                                contact our sales team
                            </a>
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Checkout Dialog */}
            <Dialog open={checkoutOpen} onOpenChange={setCheckoutOpen}>
                <DialogContent className="bg-[#0D1525] border-white/10 max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className="text-white flex items-center justify-between">
                            <span>Checkout</span>
                            <button
                                onClick={() => setCheckoutOpen(false)}
                                className="text-white/60 hover:text-white"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </DialogTitle>
                    </DialogHeader>
                    {selectedPlan && (
                        <SimpleCheckout
                            planName={selectedPlan.name}
                            amount={selectedPlan.price}
                            onSuccess={() => {
                                setCheckoutOpen(false)
                                // Redirect to success page
                                window.location.href = '/'
                            }}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}
