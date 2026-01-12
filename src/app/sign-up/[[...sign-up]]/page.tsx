import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-[#050C16] via-[#0D1525] to-[#050C16] p-12 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid opacity-10" />

                <div className="relative z-10 max-w-md">
                    <h1 className="text-5xl font-bold text-white mb-6">
                        Start Your AI
                        <br />
                        <span className="text-gradient-vibrant">Journey Today</span>
                    </h1>
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                        Join thousands of businesses transforming with AI. Get instant access to 5000+ specialists, powerful tools, and a community that grows with you.
                    </p>

                    {/* Benefits */}
                    <div className="space-y-4">
                        {[
                            "Instant access to AI specialists",
                            "No credit card required to start",
                            "Cancel anytime, no questions asked",
                            "24/7 support from real humans"
                        ].map((benefit, i) => (
                            <div key={i} className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-white/80">{benefit}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side - Sign Up Form */}
            <div className="flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md">
                    <div className="mb-8 lg:hidden">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
                        <p className="text-gray-600">Start your AI journey with GUIDESOFT</p>
                    </div>

                    <SignUp
                        appearance={{
                            elements: {
                                rootBox: "w-full",
                                card: "shadow-none",
                                headerTitle: "hidden lg:block",
                                headerSubtitle: "hidden lg:block",
                                socialButtonsBlockButton: "bg-white border-2 border-gray-200 hover:bg-gray-50",
                                formButtonPrimary: "bg-[#434BFF] hover:bg-[#434BFF]/90",
                                footerActionLink: "text-[#434BFF] hover:text-[#434BFF]/80",
                            },
                        }}
                        routing="path"
                        path="/sign-up"
                        signInUrl="/sign-in"
                    />
                </div>
            </div>
        </div>
    );
}
