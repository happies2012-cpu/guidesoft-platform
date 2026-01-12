import { Navbar } from "@/components/Navbar"

export const metadata = {
    title: "Terms of Service | GUIDESOFT",
    description: "Terms and conditions for using GUIDESOFT services",
}

export default function TermsPage() {
    return (
        <main className="min-h-screen bg-[#050C16]">
            <Navbar />

            <div className="pt-32 pb-20">
                <div className="container-narrow mx-auto px-6">
                    <h1 className="text-5xl font-bold text-white mb-6">Terms of Service</h1>
                    <p className="text-white/60 mb-12">Last updated: January 12, 2026</p>

                    <div className="prose prose-invert max-w-none">
                        <div className="space-y-8 text-white/70 leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">The Basics (In Plain English)</h2>
                                <p>
                                    Look, we know nobody actually reads terms of service. But these are important, so we've written them in plain English. Here's the deal: we provide AI services, you pay for them, and we both promise to be reasonable human beings about it.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. What We Do</h2>
                                <p>
                                    GUIDESOFT connects businesses with AI specialists and provides AI-powered solutions. We're basically a marketplace and service provider rolled into one. Think of us as the bridge between your business challenges and AI solutions that actually work.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Your Account</h2>
                                <p className="mb-4">When you create an account with us:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>You're responsible for keeping your password secure. Don't share it.</li>
                                    <li>You must provide accurate information. Fake details help nobody.</li>
                                    <li>You must be at least 18 years old or have parental consent.</li>
                                    <li>One person, one account. No sharing accounts like Netflix passwords.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. Payment Terms</h2>
                                <p className="mb-4">Here's how money works:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Pricing:</strong> All prices are in Indian Rupees (₹) and include 18% GST.</li>
                                    <li><strong>Payment:</strong> We accept UPI, cards, and other payment methods. Payment is due upfront.</li>
                                    <li><strong>Refunds:</strong> 30-day money-back guarantee if you're not satisfied. No questions asked.</li>
                                    <li><strong>Cancellation:</strong> Cancel anytime. No penalties, no hard feelings.</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. What You Can (and Can't) Do</h2>
                                <p className="mb-4"><strong>You CAN:</strong></p>
                                <ul className="list-disc pl-6 space-y-2 mb-4">
                                    <li>Use our platform for legitimate business purposes</li>
                                    <li>Connect with AI specialists and hire them</li>
                                    <li>Access all features included in your plan</li>
                                    <li>Cancel or upgrade your subscription anytime</li>
                                </ul>
                                <p className="mb-4"><strong>You CANNOT:</strong></p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Try to hack, break, or abuse our platform</li>
                                    <li>Use our services for anything illegal or unethical</li>
                                    <li>Spam other users or AI specialists</li>
                                    <li>Resell our services without permission</li>
                                    <li>Scrape our data or reverse engineer our systems</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                                <p>
                                    Everything on our platform - the code, design, content, logos - belongs to us or our licensors. You can use our platform, but you can't copy it, steal it, or claim it as your own. That's just common sense.
                                </p>
                                <p className="mt-4">
                                    Any work created by AI specialists you hire through our platform belongs to you (unless you agree otherwise with the specialist). We don't claim ownership of your projects.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Privacy & Data</h2>
                                <p>
                                    We take your privacy seriously. Check our <a href="/privacy" className="text-primary hover:underline">Privacy Policy</a> for the full details, but here's the summary:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>We collect only what we need to provide our services</li>
                                    <li>We never sell your data to third parties</li>
                                    <li>We use industry-standard security measures</li>
                                    <li>You can request your data or ask us to delete it anytime</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Disclaimers</h2>
                                <p>
                                    We work hard to provide great service, but we're human (well, mostly). Here's the legal stuff:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-4">
                                    <li>Our platform is provided "as is" - we can't guarantee 100% uptime</li>
                                    <li>We're not responsible for the work quality of individual AI specialists (but we do vet them)</li>
                                    <li>Results may vary - AI is powerful but not magic</li>
                                    <li>We're not liable for indirect damages or lost profits</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">8. Changes to These Terms</h2>
                                <p>
                                    We might update these terms occasionally. When we do, we'll notify you via email and update the "Last updated" date at the top. If you continue using our services after changes, you're agreeing to the new terms.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">9. Termination</h2>
                                <p>
                                    You can stop using our services anytime. We can also terminate accounts that violate these terms. If we do, we'll try to give you notice and explain why (unless you did something really bad).
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">10. Governing Law</h2>
                                <p>
                                    These terms are governed by Indian law. Any disputes will be resolved in the courts of Bangalore, Karnataka. But honestly, let's just talk it out if there's an issue.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Questions?</h2>
                                <p>
                                    If anything here is unclear or you have questions, just <a href="/contact" className="text-primary hover:underline">reach out</a>. We're happy to explain in even simpler terms.
                                </p>
                                <p className="mt-4">
                                    Email us at: <a href="mailto:legal@guidesoft.com" className="text-primary hover:underline">legal@guidesoft.com</a>
                                </p>
                            </section>

                            <div className="mt-12 p-6 rounded-2xl bg-primary/10 border border-primary/20">
                                <p className="text-white/80 text-sm">
                                    <strong>Bottom line:</strong> Be respectful, use our platform for good, pay your bills, and we'll provide great service. It's really that simple.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
