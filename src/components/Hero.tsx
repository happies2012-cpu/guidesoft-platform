"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Image from "next/image"

const HERO_IMAGE = "/hero_illustration_1768164611794.png"

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-[#050C16]">
            {/* Animated Background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#434BFF]/20 rounded-full blur-[128px] animate-pulse" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5B63FF]/20 rounded-full blur-[128px] animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#434BFF]/10 rounded-full blur-[150px]" />
            </div>

            <div className="container-centered relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6 inline-block"
                        >
                            <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-white/80 animate-fade-in">
                                <Sparkles className="h-4 w-4 text-primary" />
                                <span>The Intelligence Ecosystem is Here</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
                        >
                            Empowering{" "}
                            <span className="text-gradient-vibrant">Intelligence</span>,
                            <br />
                            Scaling <span className="italic text-primary">Innovation</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-white/60 mb-8 leading-relaxed max-w-xl"
                        >
                            Connecting <span className="text-white font-semibold">300+ AI Specialists</span> across{" "}
                            <span className="text-white font-semibold">16+ Industries</span>. From individuals to
                            multinationals, access the world's most comprehensive AI services on-demand.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
                        >
                            <Button
                                size="lg"
                                className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white rounded-full transition-all hover:scale-105 active:scale-95 shadow-xl glow-primary-lg group"
                            >
                                Get Started Free
                                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="h-14 px-8 text-lg border-white/20 text-white hover:bg-white/10 rounded-full transition-all"
                            >
                                Explore Solutions
                            </Button>
                        </motion.div>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="mt-12 flex items-center gap-8 text-sm text-white/40"
                        >
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-[#050505]" />
                                    ))}
                                </div>
                                <span>5000+ Experts</span>
                            </div>
                            <div className="h-4 w-[1px] bg-white/10" />
                            <div>Trusted by 500+ Companies</div>
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full h-[600px] animate-float">
                            <Image
                                src={HERO_IMAGE}
                                alt="AI Technology Illustration"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Stats Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/10 pt-12"
                >
                    {[
                        { label: "AI Roles", value: "300+", icon: "/ai_brain_icon_1768164628324.png" },
                        { label: "Industries", value: "16+", icon: "/innovation_icon_1768164643510.png" },
                        { label: "Projects", value: "10K+", icon: "/collaboration_icon_1768164660615.png" },
                        { label: "Experts", value: "5000+", icon: "/ai_brain_icon_1768164628324.png" },
                    ].map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2 + index * 0.1 }}
                            className="text-center group cursor-default"
                        >
                            <div className="flex justify-center mb-3">
                                <div className="relative w-12 h-12">
                                    <Image
                                        src={stat.icon}
                                        alt={stat.label}
                                        fill
                                        className="object-contain group-hover:scale-110 transition-transform"
                                    />
                                </div>
                            </div>
                            <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-white/40 uppercase tracking-widest">{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 z-0 bg-grid opacity-30" />
        </section>
    )
}
