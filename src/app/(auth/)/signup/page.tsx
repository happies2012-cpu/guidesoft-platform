"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Github, Chrome, ShieldCheck } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696192300100a707e867436b/a06b07f70_gslogo.png"

export default function SignupPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#050505] p-4 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[128px] z-0" />
            <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[128px] z-0" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-lg relative z-10"
            >
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-8 transition-colors group"
                >
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </Link>

                <Card className="glass-dark border-white/10 shadow-2xl">
                    <CardHeader className="text-center pb-8 border-b border-white/5">
                        <div className="relative w-16 h-16 mx-auto mb-4">
                            <Image
                                src={LOGO_URL}
                                alt="GUIDESOFT Logo"
                                fill
                                className="object-contain filter brightness-0 invert"
                            />
                        </div>
                        <CardTitle className="text-3xl font-bold text-white tracking-tight">Create Account</CardTitle>
                        <CardDescription className="text-white/50">
                            Join the world's most advanced AI ecosystem
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-8 space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="firstName" className="text-white/80">First Name</Label>
                                <Input id="firstName" placeholder="John" className="bg-white/5 border-white/10 text-white h-11" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName" className="text-white/80">Last Name</Label>
                                <Input id="lastName" placeholder="Doe" className="bg-white/5 border-white/10 text-white h-11" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="email" className="text-white/80">Email</Label>
                            <Input id="email" type="email" placeholder="name@example.com" className="bg-white/5 border-white/10 text-white h-11" />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="role" className="text-white/80">Select Initial Role</Label>
                            <select className="flex h-11 w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                                <option className="bg-[#050505]">Learner</option>
                                <option className="bg-[#050505]">Earner (Expert/Freelancer)</option>
                                <option className="bg-[#050505]">Entrepreneur</option>
                                <option className="bg-[#050505]">Investor</option>
                                <option className="bg-[#050505]">SMB / Enterprise</option>
                            </select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password" className="text-white/80">Password</Label>
                            <Input id="password" type="password" className="bg-white/5 border-white/10 text-white h-11" />
                            <p className="text-[10px] text-white/30 flex items-center gap-1">
                                <ShieldCheck className="h-3 w-3" /> Minimum 8 characters with at least one special character
                            </p>
                        </div>

                        <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg glow-primary mt-2">
                            Create Account
                        </Button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-white/10" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-[#050505] px-2 text-white/40">Or register with</span>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <Button variant="outline" className="h-11 border-white/10 text-white hover:bg-white/5">
                                <Chrome className="mr-2 h-4 w-4" />
                                Google
                            </Button>
                            <Button variant="outline" className="h-11 border-white/10 text-white hover:bg-white/5">
                                <Github className="mr-2 h-4 w-4" />
                                GitHub
                            </Button>
                        </div>
                    </CardContent>
                    <CardFooter className="pb-8 pt-4 justify-center text-xs text-white/40 text-center">
                        By creating an account, you agree to our <Link href="#" className="text-white/60 hover:underline mx-1">Terms</Link> and <Link href="#" className="text-white/60 hover:underline mx-1">Privacy Policy</Link>.
                        <div className="mt-4">
                            Already have an account? <Link href="/login" className="text-primary font-semibold ml-1 hover:underline text-sm">Log in</Link>
                        </div>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    )
}
