"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Zap } from "lucide-react"

const experts = [
    {
        name: "Alex Rivera",
        role: "LLM Specialist",
        rating: 4.9,
        reviews: 124,
        location: "San Francisco, CA",
        price: "$150/hr",
        tags: ["GPT-4", "Claude 3", "RAG"],
        image: "https://i.pravatar.cc/150?u=alex"
    },
    {
        name: "Sarah Chen",
        role: "AI Product Designer",
        rating: 5.0,
        reviews: 89,
        location: "London, UK",
        price: "$120/hr",
        tags: ["UX/UI", "Generative Art", "Midjourney"],
        image: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        name: "Dr. James Wilson",
        role: "Medical AI Consultant",
        rating: 4.8,
        reviews: 56,
        location: "Berlin, DE",
        price: "$200/hr",
        tags: ["Healthcare", "BioTech", "MLOps"],
        image: "https://i.pravatar.cc/150?u=james"
    },
    {
        name: "Elena Petrov",
        role: "Computer Vision Engineer",
        rating: 4.9,
        reviews: 112,
        location: "Austin, TX",
        price: "$140/hr",
        tags: ["Object Detection", "PyTorch", "Edge AI"],
        image: "https://i.pravatar.cc/150?u=elena"
    }
]

export function MarketplacePreview() {
    return (
        <section className="py-24 bg-[#080808] relative overflow-hidden">
            <div className="container-centered">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 animate-fade-up">
                    <div className="max-w-2xl">
                        <div className="inline-block mb-4">
                            <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                                Marketplace
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Access 300+ AI Roles</h2>
                        <p className="text-white/60 text-lg">
                            Browse our curated marketplace of AI professionals, researchers, and engineers ready to scale your innovation.
                        </p>
                    </div>
                    <Button variant="link" className="text-primary p-0 h-auto text-lg group">
                        View all experts <span className="group-hover:translate-x-1 transition-transform ml-2">→</span>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {experts.map((expert, index) => (
                        <motion.div
                            key={expert.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Card className="glass-premium card-interactive">
                                <CardHeader className="pb-4">
                                    <div className="flex items-center gap-4">
                                        <Avatar className="h-12 w-12 border-2 border-primary/20">
                                            <AvatarImage src={expert.image} />
                                            <AvatarFallback>{expert.name[0]}</AvatarFallback>
                                        </Avatar>
                                        <div className="overflow-hidden">
                                            <h3 className="text-white font-semibold truncate">{expert.name}</h3>
                                            <p className="text-xs text-primary/80 font-medium truncate">{expert.role}</p>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between text-xs text-white/40">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                                            <span className="text-white/80">{expert.rating}</span>
                                            <span>({expert.reviews})</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-3 w-3" />
                                            <span>{expert.location}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {expert.tags.map(tag => (
                                            <Badge key={tag} variant="secondary" className="bg-white/5 text-[10px] text-white/60 py-0 h-5">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>
                                <CardFooter className="pt-0 flex justify-between items-center border-t border-white/5 mt-4 pt-4">
                                    <div className="text-white font-bold">{expert.price}</div>
                                    <Button size="sm" variant="outline" className="h-8 border-white/10 hover:bg-primary hover:text-white transition-all">
                                        View Profile
                                    </Button>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-primary/10 to-accent/10 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="flex items-center gap-6">
                        <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                            <Zap className="h-8 w-8 text-primary glow-primary" />
                        </div>
                        <div>
                            <h4 className="text-xl font-bold text-white">Scale with Guided Teams</h4>
                            <p className="text-white/60 text-sm">Deploy a full stack AI team in under 48 hours.</p>
                        </div>
                    </div>
                    <Button className="bg-white text-black hover:bg-white/90 px-8 h-12 rounded-full font-bold">
                        Contact Sales
                    </Button>
                </div>
            </div>
        </section>
    )
}
