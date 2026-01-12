"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { ChevronDown } from "lucide-react"

const faqs = [
    {
        category: "General",
        questions: [
            {
                q: "What is GUIDESOFT?",
                a: "GUIDESOFT is the world's largest AI services marketplace, connecting businesses with 5000+ AI specialists across 16+ industries. We provide on-demand access to AI expertise for projects of any size."
            },
            {
                q: "How does GUIDESOFT work?",
                a: "Simply choose your plan, describe your project requirements, and we'll match you with the perfect AI specialists. You can manage everything through our platform, from hiring to project completion."
            },
            {
                q: "Who can use GUIDESOFT?",
                a: "GUIDESOFT is designed for everyone - from individual learners and freelancers to startups, SMEs, and large enterprises looking to leverage AI expertise."
            }
        ]
    },
    {
        category: "Pricing & Payments",
        questions: [
            {
                q: "What payment methods do you accept?",
                a: "We accept all major payment methods including UPI (PhonePe, Google Pay, Paytm), Credit/Debit Cards, Net Banking, and digital wallets. All payments are processed securely through Razorpay."
            },
            {
                q: "Is there a free trial?",
                a: "Yes! All plans come with a 14-day free trial. No credit card required to start."
            },
            {
                q: "Can I cancel anytime?",
                a: "Absolutely! You can cancel your subscription anytime. No questions asked, no cancellation fees."
            },
            {
                q: "Do you charge GST?",
                a: "Yes, 18% GST is applicable on all plans as per Indian tax regulations. GST is clearly shown during checkout."
            }
        ]
    },
    {
        category: "Services",
        questions: [
            {
                q: "What industries do you serve?",
                a: "We serve 16+ industries including Healthcare, Finance, E-commerce, Manufacturing, Education, Real Estate, and more. Our AI specialists have domain expertise across all major sectors."
            },
            {
                q: "How quickly can I get started?",
                a: "You can start immediately! Once you subscribe, you'll get instant access to our marketplace and can begin posting projects or browsing AI specialists right away."
            },
            {
                q: "What if I'm not satisfied?",
                a: "We offer a 100% satisfaction guarantee. If you're not happy with our service within the first 30 days, we'll provide a full refund."
            }
        ]
    },
    {
        category: "Technical",
        questions: [
            {
                q: "Is my data secure?",
                a: "Yes! We use bank-level encryption, secure data centers, and comply with international security standards. Your data is never shared with third parties."
            },
            {
                q: "Do you provide API access?",
                a: "Yes, Professional and Enterprise plans include full API access for seamless integration with your existing systems."
            },
            {
                q: "What support do you offer?",
                a: "Starter plans get email support, Professional plans get 24/7 priority support, and Enterprise plans get dedicated account managers."
            }
        ]
    }
]

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<string | null>(null)

    const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
        const key = `${categoryIndex}-${questionIndex}`
        setOpenIndex(openIndex === key ? null : key)
    }

    return (
        <main className="min-h-screen bg-[#050C16]">
            <Navbar />

            <section className="pt-32 pb-20">
                <div className="container-centered">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Frequently Asked <span className="text-gradient-vibrant">Questions</span>
                        </h1>
                        <p className="text-xl text-white/60">
                            Everything you need to know about GUIDESOFT. Can't find the answer you're looking for?
                            <a href="/contact" className="text-primary hover:underline ml-1">Contact us</a>.
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto space-y-12">
                        {faqs.map((category, categoryIndex) => (
                            <div key={category.category}>
                                <h2 className="text-2xl font-bold text-white mb-6">{category.category}</h2>
                                <div className="space-y-4">
                                    {category.questions.map((faq, questionIndex) => {
                                        const key = `${categoryIndex}-${questionIndex}`
                                        const isOpen = openIndex === key

                                        return (
                                            <div
                                                key={questionIndex}
                                                className="glass-premium rounded-2xl overflow-hidden"
                                            >
                                                <button
                                                    onClick={() => toggleQuestion(categoryIndex, questionIndex)}
                                                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                                                >
                                                    <span className="text-white font-semibold pr-8">{faq.q}</span>
                                                    <ChevronDown
                                                        className={`h-5 w-5 text-white/60 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''
                                                            }`}
                                                    />
                                                </button>
                                                {isOpen && (
                                                    <div className="px-6 pb-6">
                                                        <p className="text-white/70 leading-relaxed">{faq.a}</p>
                                                    </div>
                                                )}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-20 text-center glass-premium p-12 rounded-3xl">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Still have questions?
                        </h2>
                        <p className="text-white/60 mb-8">
                            Can't find the answer you're looking for? Please chat to our friendly team.
                        </p>
                        <a
                            href="/contact"
                            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>
            </section>
        </main>
    )
}
