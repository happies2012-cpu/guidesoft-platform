import { Navbar } from "@/components/Navbar"

export const metadata = {
    title: "Privacy Policy | GUIDESOFT",
    description: "How we protect and handle your data",
}

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-[#050C16]">
            <Navbar />

            <div className="pt-32 pb-20">
                <div className="container-narrow mx-auto px-6">
                    <h1 className="text-5xl font-bold text-white mb-6">Privacy Policy</h1>
                    <p className="text-white/60 mb-12">Last updated: January 12, 2026</p>

                    <div className="prose prose-invert max-w-none">
                        <div className="space-y-8 text-white/70 leading-relaxed">
                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Our Promise to You</h2>
                                <p>
                                    Your privacy matters. A lot. We're not going to sell your data, spam you, or do anything shady. This policy explains exactly what data we collect, why we need it, and how we protect it. No legal jargon, just straight talk.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">1. What Information We Collect</h2>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Information You Give Us:</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Account Details:</strong> Name, email, phone number when you sign up</li>
                                    <li><strong>Payment Information:</strong> UPI ID, transaction details (we don't store full card numbers)</li>
                                    <li><strong>Profile Information:</strong> Company name, industry, role, preferences</li>
                                    <li><strong>Communications:</strong> Messages you send us, support tickets, feedback</li>
                                </ul>

                                <h3 className="text-xl font-semibold text-white mb-3 mt-6">Information We Collect Automatically:</h3>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Usage Data:</strong> How you use our platform, features you click, pages you visit</li>
                                    <li><strong>Device Information:</strong> Browser type, IP address, device type</li>
                                    <li><strong>Cookies:</strong> Small files that help us remember you and improve your experience</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">2. Why We Need This Information</h2>
                                <p className="mb-4">We use your data to:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Provide Our Service:</strong> Can't run a platform without knowing who you are</li>
                                    <li><strong>Process Payments:</strong> So you can actually pay for our services</li>
                                    <li><strong>Improve Our Platform:</strong> Understanding usage helps us make it better</li>
                                    <li><strong>Communicate:</strong> Send you updates, respond to questions, share important info</li>
                                    <li><strong>Security:</strong> Detect fraud, prevent abuse, keep everyone safe</li>
                                    <li><strong>Legal Compliance:</strong> Sometimes the law requires us to keep certain records</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">3. How We Protect Your Data</h2>
                                <p className="mb-4">Security isn't just a checkbox for us. Here's what we do:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Encryption:</strong> All data is encrypted in transit and at rest</li>
                                    <li><strong>Secure Servers:</strong> We use industry-leading cloud providers with top-tier security</li>
                                    <li><strong>Access Controls:</strong> Only authorized team members can access your data</li>
                                    <li><strong>Regular Audits:</strong> We regularly review and update our security measures</li>
                                    <li><strong>Monitoring:</strong> 24/7 monitoring for suspicious activity</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">4. Who We Share Data With</h2>
                                <p className="mb-4">We don't sell your data. Period. But we do share it with:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Service Providers:</strong> Payment processors, email services, hosting providers (they're bound by strict contracts)</li>
                                    <li><strong>AI Specialists:</strong> When you hire someone, they see your project details (obviously)</li>
                                    <li><strong>Legal Requirements:</strong> If required by law or to protect rights and safety</li>
                                    <li><strong>Business Transfers:</strong> If we're acquired, your data goes with the company (but same privacy rules apply)</li>
                                </ul>
                                <p className="mt-4">
                                    <strong>We will NEVER:</strong> Sell your data to advertisers, share it with random third parties, or use it for purposes you didn't agree to.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights & Choices</h2>
                                <p className="mb-4">Your data, your rules. You can:</p>
                                <ul className="list-disc pl-6 space-y-2">
                                    <li><strong>Access Your Data:</strong> Request a copy of everything we have on you</li>
                                    <li><strong>Correct Information:</strong> Update or fix any incorrect data</li>
                                    <li><strong>Delete Your Account:</strong> Request complete deletion of your data</li>
                                    <li><strong>Opt-Out of Marketing:</strong> Unsubscribe from promotional emails anytime</li>
                                    <li><strong>Export Your Data:</strong> Download your information in a portable format</li>
                                    <li><strong>Object to Processing:</strong> Tell us to stop using your data for certain purposes</li>
                                </ul>
                                <p className="mt-4">
                                    To exercise any of these rights, just email us at <a href="mailto:privacy@guidesoft.com" className="text-primary hover:underline">privacy@guidesoft.com</a>
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">6. Cookies & Tracking</h2>
                                <p>
                                    We use cookies to make our platform work better. They help us remember you, understand how you use our site, and improve your experience. You can disable cookies in your browser, but some features might not work properly.
                                </p>
                                <p className="mt-4">
                                    We use:
                                </p>
                                <ul className="list-disc pl-6 space-y-2 mt-2">
                                    <li><strong>Essential Cookies:</strong> Required for the platform to function</li>
                                    <li><strong>Analytics Cookies:</strong> Help us understand usage patterns</li>
                                    <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
                                </ul>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
                                <p>
                                    We keep your data as long as your account is active or as needed to provide services. After you delete your account, we'll delete your data within 30 days (except what we're legally required to keep for tax/legal purposes).
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">8. International Data Transfers</h2>
                                <p>
                                    Your data is primarily stored in India. If we transfer data internationally, we ensure it's protected by appropriate safeguards and complies with applicable laws.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
                                <p>
                                    Our platform is not for children under 18. We don't knowingly collect data from minors. If you're a parent and believe your child has given us information, please contact us immediately.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Policy</h2>
                                <p>
                                    We might update this policy occasionally. When we do, we'll notify you via email and update the date at the top. Material changes will be highlighted clearly.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                                <p className="mb-4">
                                    Questions about privacy? We're here to help:
                                </p>
                                <ul className="list-none space-y-2">
                                    <li><strong>Email:</strong> <a href="mailto:privacy@guidesoft.com" className="text-primary hover:underline">privacy@guidesoft.com</a></li>
                                    <li><strong>Address:</strong> Bangalore, Karnataka, India</li>
                                    <li><strong>Phone:</strong> +91 98765 43210</li>
                                </ul>
                            </section>

                            <div className="mt-12 p-6 rounded-2xl bg-green-500/10 border border-green-500/20">
                                <p className="text-white/80 text-sm">
                                    <strong>TL;DR:</strong> We collect what we need, protect it seriously, never sell it, and give you full control. Your privacy is not negotiable.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
