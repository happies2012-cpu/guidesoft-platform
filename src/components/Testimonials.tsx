"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"

const testimonials = [
    {
        name: "Sarah Mitchell",
        role: "CEO, TechVentures Inc.",
        avatar: "/testimonial_avatar_1_1768164984923.png",
        content: "GUIDESOFT transformed our AI capabilities. We deployed a full AI team in 48 hours and saw immediate ROI. The quality of experts is unmatched.",
        rating: 5,
        company: "TechVentures"
    },
    {
        name: "Michael Chen",
        role: "CTO, DataFlow Solutions",
        avatar: "/testimonial_avatar_2_1768165000880.png",
        content: "The marketplace gave us access to world-class AI specialists we couldn't hire full-time. Game-changer for our product development.",
        rating: 5,
        company: "DataFlow"
    },
    {
        name: "Emma Rodriguez",
        role: "Founder, AI Startup Labs",
        avatar: "/testimonial_avatar_3_1768165016244.png",
        content: "As a startup, GUIDESOFT's ecosystem helped us scale faster than we imagined. The learning resources and expert network are invaluable.",
        rating: 5,
        company: "AI Startup Labs"
    }
]

export function Testimonials() {
    return (
        <section className="py-24 bg-[#050505] relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[150px]" />
            </div>

            <div className="container-centered relative z-10">
                <div className="text-center mb-16 animate-fade-up">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium">
                            Testimonials
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        See how companies are transforming their businesses with GUIDESOFT's AI ecosystem.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group p-8 rounded-3xl glass-premium card-hover"
                        >
                            {/* Rating */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-white/80 text-sm leading-relaxed mb-8 italic">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                                    <Image
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <div className="text-white font-semibold text-sm">{testimonial.name}</div>
                                    <div className="text-white/40 text-xs">{testimonial.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="mt-16 p-8 rounded-3xl glass-premium grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    {[
                        { label: "Customer Satisfaction", value: "98%" },
                        { label: "Average Rating", value: "4.9/5" },
                        { label: "Projects Completed", value: "10K+" },
                        { label: "Success Rate", value: "99%" }
                    ].map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-white/40">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
