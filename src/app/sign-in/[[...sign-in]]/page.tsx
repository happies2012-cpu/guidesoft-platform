import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
    return (
        <div className="min-h-screen grid lg:grid-cols-2">
            {/* Left Side - Branding */}
            <div className="hidden lg:flex flex-col justify-center items-center bg-gradient-to-br from-[#050C16] via-[#0D1525] to-[#050C16] p-12 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-grid opacity-10" />

                <div className="relative z-10 max-w-md">
                    <h1 className="text-5xl font-bold text-white mb-6">
                        Welcome Back to
                        <br />
                        <span className="text-gradient-vibrant">GUIDESOFT</span>
                    </h1>
                    <p className="text-white/60 text-lg leading-relaxed mb-8">
                        Access your dashboard, manage projects, and connect with AI specialists. Your journey to AI transformation continues here.
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-6 mt-12">
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">5000+</div>
                            <div className="text-white/40 text-sm">AI Specialists</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">16+</div>
                            <div className="text-white/40 text-sm">Industries</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-white mb-1">10K+</div>
                            <div className="text-white/40 text-sm">Projects</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side - Sign In Form */}
            <div className="flex items-center justify-center p-8 bg-white">
                <div className="w-full max-w-md">
                    <div className="mb-8 lg:hidden">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
                        <p className="text-gray-600">Welcome back to GUIDESOFT</p>
                    </div>

                    <SignIn
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
                        path="/sign-in"
                        signUpUrl="/sign-up"
                    />
                </div>
            </div>
        </div>
    );
}
