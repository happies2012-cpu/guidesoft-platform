"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const features = [
    {
        title: "AI-Powered Automation",
        description: "Automate complex workflows with intelligent AI agents that learn and adapt to your business processes.",
        icon: "/feature_automation_1768164936320.png",
        gradient: "from-purple-500/20 to-blue-500/20"
    },
    {
        title: "Advanced Analytics",
        description: "Get deep insights with real-time analytics and predictive modeling powered by machine learning.",
        icon: "/feature_analytics_1768164951094.png",
        gradient: "from-cyan-500/20 to-purple-500/20"
    },
    {
        title: "Enterprise Security",
        description: "Bank-level security with end-to-end encryption, compliance certifications, and data protection.",
        icon: "/feature_security_1768164967908.png",
        gradient: "from-green-500/20 to-blue-500/20"
    },
    {
        title: "Seamless Integration",
        description: "Connect with 100+ tools and platforms through our robust API and pre-built integrations.",
        icon: "/collaboration_icon_1768164660615.png",
        gradient: "from-blue-500/20 to-pink-500/20"
    },
    {
        title: "Custom AI Models",
        description: "Train and deploy custom AI models tailored to your specific industry and use cases.",
        icon: "/ai_brain_icon_1768164628324.png",
        gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
        title: "24/7 Expert Support",
        description: "Access our global network of AI specialists anytime, anywhere for consultation and support.",
        icon: "/innovation_icon_1768164643510.png",
        gradient: "from-orange-500/20 to-cyan-500/20"
    }
]

export function Features() {
    return (
        <section className="py-24 bg-[#080808] relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-dots opacity-20" />

            <div className="container-centered relative z-10">
                <div className="text-center mb-16 animate-fade-up">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                            Features
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Everything You Need to Scale
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Powerful features designed to accelerate your AI transformation and drive measurable business outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative p-8 rounded-3xl glass-premium card-interactive overflow-hidden"
                        >
                            {/* Gradient Background */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Content */}
                            <div className="relative z-10">
                                {/* Icon */}
                                <div className="mb-6 relative w-16 h-16">
                                    <Image
                                        src={feature.icon}
                                        alt={feature.title}
                                        fill
                                        className="object-contain group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
