"use client"

import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Image from "next/image"
import {
    Brain, Rocket, Users, TrendingUp, Shield, Zap,
    CheckCircle2, ArrowRight, Star
} from "lucide-react"

const services = [
    {
        icon: Brain,
        title: "AI Strategy & Consulting",
        description: "We help you understand where AI can transform your business. Our experts analyze your processes, identify opportunities, and create a roadmap that actually makes sense for your team.",
        features: [
            "Business process analysis",
            "AI opportunity assessment",
            "Custom implementation roadmap",
            "ROI projections and planning"
        ],
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Rocket,
        title: "Custom AI Development",
        description: "Need something specific? We build AI solutions tailored to your exact needs. From chatbots that sound human to predictive models that actually predict things.",
        features: [
            "Custom machine learning models",
            "Natural language processing",
            "Computer vision solutions",
            "Predictive analytics systems"
        ],
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: Users,
        title: "AI Team Augmentation",
        description: "Sometimes you just need the right people. We connect you with AI specialists who fit your culture, understand your goals, and get things done.",
        features: [
            "Vetted AI specialists",
            "Flexible engagement models",
            "Seamless team integration",
            "Ongoing support and training"
        ],
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: TrendingUp,
        title: "AI-Powered Automation",
        description: "Stop doing repetitive tasks manually. We automate the boring stuff so your team can focus on what humans do best - being creative and strategic.",
        features: [
            "Process automation",
            "Workflow optimization",
            "Data processing automation",
            "Integration with existing tools"
        ],
        color: "from-orange-500 to-red-500"
    },
    {
        icon: Shield,
        title: "AI Security & Compliance",
        description: "AI is powerful, but it needs to be safe. We ensure your AI systems are secure, ethical, and compliant with regulations. Sleep better at night.",
        features: [
            "Security audits",
            "Compliance assessment",
            "Ethical AI guidelines",
            "Data privacy protection"
        ],
        color: "from-indigo-500 to-blue-500"
    },
    {
        icon: Zap,
        title: "AI Training & Workshops",
        description: "Empower your team to work with AI confidently. We offer hands-on training that's actually useful, not just theory. Your team will thank you.",
        features: [
            "Customized training programs",
            "Hands-on workshops",
            "Ongoing mentorship",
            "Certification programs"
        ],
        color: "from-yellow-500 to-orange-500"
    }
]

const industries = [
    { name: "Healthcare", desc: "Improving patient care with AI diagnostics and treatment planning" },
    { name: "Finance", desc: "Fraud detection, risk assessment, and automated trading" },
    { name: "E-commerce", desc: "Personalized recommendations and inventory optimization" },
    { name: "Manufacturing", desc: "Predictive maintenance and quality control" },
    { name: "Education", desc: "Personalized learning and automated grading" },
    { name: "Real Estate", desc: "Property valuation and market analysis" },
    { name: "Logistics", desc: "Route optimization and demand forecasting" },
    { name: "Marketing", desc: "Customer insights and campaign optimization" }
]

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#050C16]">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-grid opacity-20" />
                <div className="container-centered relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <div className="inline-block mb-6">
                            <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                                Our Services
                            </span>
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            AI Solutions That Actually
                            <br />
                            <span className="text-gradient-vibrant">Work for You</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed mb-8">
                            We don't just talk about AI - we build it, implement it, and make sure it delivers real results for your business. No buzzwords, just solutions that work.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="h-12 px-8 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold">
                                <a href="/contact">Get Started</a>
                            </Button>
                            <Button variant="outline" className="h-12 px-8 rounded-full font-semibold border-white/20 text-white hover:bg-white/10">
                                <a href="/pricing">View Pricing</a>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-[#0D1525]">
                <div className="container-centered">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-premium p-8 rounded-3xl card-hover group"
                            >
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <service.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                                <p className="text-white/60 mb-6 leading-relaxed">{service.description}</p>
                                <ul className="space-y-3">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex items-start gap-2 text-white/70 text-sm">
                                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="py-20">
                <div className="container-centered">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            Industries We Serve
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            We've helped businesses across these industries transform with AI. Your industry next?
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {industries.map((industry, index) => (
                            <motion.div
                                key={industry.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="glass-premium p-6 rounded-2xl text-center card-hover"
                            >
                                <h3 className="text-white font-semibold mb-2">{industry.name}</h3>
                                <p className="text-white/40 text-xs">{industry.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-20 bg-[#0D1525]">
                <div className="container-centered">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4">
                            How We Work
                        </h2>
                        <p className="text-white/60 max-w-2xl mx-auto">
                            Simple, transparent process. No surprises, just results.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {[
                            {
                                step: "01",
                                title: "Discovery Call",
                                desc: "We listen to your challenges and goals. Really listen. Then we tell you honestly if AI can help."
                            },
                            {
                                step: "02",
                                title: "Strategy Session",
                                desc: "We map out exactly what needs to happen, who does what, and how long it'll take. Clear timelines, clear costs."
                            },
                            {
                                step: "03",
                                title: "Implementation",
                                desc: "We build, test, and refine. You stay in the loop with regular updates. No disappearing for months."
                            },
                            {
                                step: "04",
                                title: "Launch & Support",
                                desc: "We launch together, train your team, and stick around to make sure everything runs smoothly."
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center"
                            >
                                <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                <p className="text-white/60 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20">
                <div className="container-centered">
                    <div className="glass-premium p-12 rounded-3xl text-center relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                Ready to Transform Your Business?
                            </h2>
                            <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                                Let's talk about what AI can do for you. No sales pitch, just honest conversation about your goals.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="/contact">
                                    <Button className="h-12 px-8 bg-white text-black hover:bg-white/90 rounded-full font-semibold">
                                        Schedule a Call
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Button>
                                </a>
                                <a href="/pricing">
                                    <Button variant="outline" className="h-12 px-8 rounded-full font-semibold border-white/20 text-white hover:bg-white/10">
                                        View Pricing
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
