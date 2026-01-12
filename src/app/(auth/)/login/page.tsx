"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Github, Chrome } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696192300100a707e867436b/a06b07f70_gslogo.png"

export default function LoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-[#050505] p-4 relative overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[128px] z-0" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full max-w-md relative z-10"
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
                        <CardTitle className="text-3xl font-bold text-white tracking-tight">Welcome Back</CardTitle>
                        <CardDescription className="text-white/50">
                            Continue your AI journey with GUIDESOFT
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-8 space-y-6">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-white/80">Email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    className="bg-white/5 border-white/10 text-white placeholder:text-white/20 h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between items-center">
                                    <Label htmlFor="password" className="text-white/80">Password</Label>
                                    <Link href="#" className="text-xs text-primary hover:underline">Forgot password?</Link>
                                </div>
                                <Input
                                    id="password"
                                    type="password"
                                    className="bg-white/5 border-white/10 text-white h-12"
                                />
                            </div>
                        </div>

                        <Button className="w-full h-12 text-lg bg-primary hover:bg-primary/90 text-white shadow-lg glow-primary">
                            Log In
                        </Button>

                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <span className="w-full border-t border-white/10" />
                            </div>
                            <div className="relative flex justify-center text-xs uppercase">
                                <span className="bg-[#050505] px-2 text-white/40">Or continue with</span>
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
                    <CardFooter className="pb-8 pt-4 justify-center text-sm text-white/40">
                        Don't have an account? <Link href="/signup" className="text-primary font-semibold ml-1 hover:underline">Sign up</Link>
                    </CardFooter>
                </Card>
            </motion.div>
        </div>
    )
}
