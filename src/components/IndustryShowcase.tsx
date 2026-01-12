"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import {
    Stethoscope,
    Wallet,
    GraduationCap,
    ShoppingBag,
    Factory,
    Sprout,
    Building2,
    Gavel,
    Truck,
    Film,
    Zap,
    Car,
    ShieldAlert,
    Phone,
    Megaphone,
    Hotel
} from "lucide-react"

const industries = [
    { name: "Healthcare", icon: Stethoscope, color: "text-red-400" },
    { name: "Finance", icon: Wallet, color: "text-green-400" },
    { name: "Education", icon: GraduationCap, color: "text-blue-400" },
    { name: "E-commerce", icon: ShoppingBag, color: "text-pink-400" },
    { name: "Manufacturing", icon: Factory, color: "text-orange-400" },
    { name: "Agriculture", icon: Sprout, color: "text-emerald-400" },
    { name: "Real Estate", icon: Building2, color: "text-indigo-400" },
    { name: "Legal", icon: Gavel, color: "text-slate-400" },
    { name: "Logistics", icon: Truck, color: "text-amber-400" },
    { name: "Entertainment", icon: Film, color: "text-purple-400" },
    { name: "Energy", icon: Zap, color: "text-yellow-400" },
    { name: "Automotive", icon: Car, color: "text-cyan-400" },
    { name: "Cybersecurity", icon: ShieldAlert, color: "text-rose-400" },
    { name: "Telecom", icon: Phone, color: "text-sky-400" },
    { name: "Marketing", icon: Megaphone, color: "text-lime-400" },
    { name: "Hospitality", icon: Hotel, color: "text-fuchsia-400" },
]

export function IndustryShowcase() {
    return (
        <section className="py-24 bg-[#050505]">
            <div className="container-centered">
                <div className="text-center mb-16 animate-fade-up">
                    <div className="inline-block mb-4">
                        <span className="px-4 py-1.5 rounded-full border border-accent/30 bg-accent/10 text-accent text-sm font-medium">
                            Global Reach
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">16+ Industry Solutions</h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        Ready-to-deploy AI environments tailored for the unique challenges and regulations of every major sector.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {industries.map((industry, index) => (
                        <motion.div
                            key={industry.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="group cursor-pointer"
                        >
                            <div className="flex flex-col items-center p-6 rounded-2xl glass-premium card-hover">
                                <industry.icon className={`h-8 w-8 mb-4 transition-transform group-hover:scale-110 ${industry.color}`} />
                                <span className="text-xs font-semibold text-white/70 group-hover:text-white text-center">
                                    {industry.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
