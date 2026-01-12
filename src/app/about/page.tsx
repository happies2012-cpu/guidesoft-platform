import { Navbar } from "@/components/Navbar"
import { motion } from "framer-motion"
import Image from "next/image"
import { Users, Target, Zap, Award } from "lucide-react"

export const metadata = {
    title: "About Us | GUIDESOFT",
    description: "Learn about GUIDESOFT's mission to empower intelligence and scale innovation through AI.",
}

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-[#050C16]">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="container-centered relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Empowering Intelligence,
                            <br />
                            <span className="text-gradient-vibrant">Scaling Innovation</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed">
                            We're building the world's largest AI services ecosystem, connecting businesses with top AI talent across 16+ industries.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-[#0D1525]">
                <div className="container-centered">
                    <div className="grid md:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-premium p-8 rounded-3xl"
                        >
                            <Target className="h-12 w-12 text-primary mb-6" />
                            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
                            <p className="text-white/70 leading-relaxed">
                                To democratize access to AI expertise by creating a global marketplace where businesses of all sizes can find, hire, and collaborate with world-class AI specialists on-demand.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="glass-premium p-8 rounded-3xl"
                        >
                            <Zap className="h-12 w-12 text-accent mb-6" />
                            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
                            <p className="text-white/70 leading-relaxed">
                                To become the world's most trusted AI services platform, powering innovation across every industry and enabling the next generation of intelligent solutions.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20">
                <div className="container-centered">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { label: "AI Specialists", value: "5000+" },
                            { label: "Industries Served", value: "16+" },
                            { label: "Projects Completed", value: "10K+" },
                            { label: "Countries", value: "50+" },
                        ].map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-5xl font-bold text-white mb-2">{stat.value}</div>
                                <div className="text-white/40 uppercase tracking-wider text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-20 bg-[#0D1525]">
                <div className="container-centered">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Award,
                                title: "Excellence",
                                description: "We maintain the highest standards in everything we do, from vetting AI specialists to delivering exceptional customer service."
                            },
                            {
                                icon: Users,
                                title: "Collaboration",
                                description: "We believe in the power of teamwork and create environments where innovation thrives through collaboration."
                            },
                            {
                                icon: Zap,
                                title: "Innovation",
                                description: "We constantly push boundaries, embrace new technologies, and find creative solutions to complex challenges."
                            },
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-premium p-8 rounded-3xl text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                                    <value.icon className="h-8 w-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                                <p className="text-white/60 leading-relaxed">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container-centered">
                    <div className="glass-premium p-12 rounded-3xl text-center">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                            Join thousands of companies already leveraging GUIDESOFT's AI ecosystem
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/pricing"
                                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold transition-all"
                            >
                                View Pricing
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-semibold border border-white/20 transition-all"
                            >
                                Contact Sales
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
