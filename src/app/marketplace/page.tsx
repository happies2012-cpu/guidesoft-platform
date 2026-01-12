"use client"

import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Filter, Star, MapPin, Briefcase, Clock, TrendingUp } from "lucide-react"

const specialists = [
    {
        name: "Dr. Priya Sharma",
        title: "AI Research Scientist",
        rating: 4.9,
        reviews: 127,
        hourlyRate: 8500,
        location: "Bangalore, India",
        skills: ["Machine Learning", "Deep Learning", "NLP", "Computer Vision"],
        experience: "8 years",
        availability: "Available",
        projects: 156,
        image: "/specialists/priya.jpg"
    },
    {
        name: "Rajesh Kumar",
        title: "Full Stack AI Engineer",
        rating: 4.8,
        reviews: 94,
        hourlyRate: 6500,
        location: "Mumbai, India",
        skills: ["Python", "TensorFlow", "React", "Node.js"],
        experience: "6 years",
        availability: "Available",
        projects: 112,
        image: "/specialists/rajesh.jpg"
    },
    {
        name: "Sneha Reddy",
        title: "Data Scientist & ML Expert",
        rating: 5.0,
        reviews: 203,
        hourlyRate: 9500,
        location: "Hyderabad, India",
        skills: ["Data Science", "ML", "Statistics", "Python"],
        experience: "10 years",
        availability: "Busy",
        projects: 245,
        image: "/specialists/sneha.jpg"
    },
    {
        name: "Amit Patel",
        title: "AI Solutions Architect",
        rating: 4.9,
        reviews: 156,
        hourlyRate: 10500,
        location: "Pune, India",
        skills: ["System Design", "Cloud AI", "MLOps", "Architecture"],
        experience: "12 years",
        availability: "Available",
        projects: 189,
        image: "/specialists/amit.jpg"
    },
    {
        name: "Meera Iyer",
        title: "NLP & Chatbot Specialist",
        rating: 4.7,
        reviews: 78,
        hourlyRate: 7500,
        location: "Chennai, India",
        skills: ["NLP", "LangChain", "ChatGPT", "Dialogflow"],
        experience: "5 years",
        availability: "Available",
        projects: 98,
        image: "/specialists/meera.jpg"
    },
    {
        name: "Vikram Singh",
        title: "Computer Vision Engineer",
        rating: 4.8,
        reviews: 134,
        hourlyRate: 8000,
        location: "Delhi, India",
        skills: ["OpenCV", "YOLO", "Image Processing", "PyTorch"],
        experience: "7 years",
        availability: "Available",
        projects: 167,
        image: "/specialists/vikram.jpg"
    },
]

const categories = [
    "All Specialists",
    "Machine Learning",
    "Data Science",
    "NLP",
    "Computer Vision",
    "MLOps",
    "AI Consulting",
]

export default function MarketplacePage() {
    return (
        <main className="min-h-screen bg-[#050C16]">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-12">
                <div className="container-centered">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-12"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Find Your Perfect
                            <br />
                            <span className="text-gradient-vibrant">AI Specialist</span>
                        </h1>
                        <p className="text-xl text-white/60">
                            Browse 5000+ vetted AI experts ready to transform your business. Hire the best, pay only for results.
                        </p>
                    </motion.div>

                    {/* Search & Filters */}
                    <div className="glass-premium p-6 rounded-3xl mb-12">
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/40" />
                                <Input
                                    placeholder="Search by skills, name, or expertise..."
                                    className="pl-12 h-12 bg-white/5 border-white/10 text-white placeholder:text-white/40"
                                />
                            </div>
                            <Button variant="outline" className="h-12 border-white/10 text-white hover:bg-white/10">
                                <Filter className="h-4 w-4 mr-2" />
                                Filters
                            </Button>
                            <Button className="h-12 bg-primary hover:bg-primary/90">
                                Search
                            </Button>
                        </div>

                        {/* Categories */}
                        <div className="flex flex-wrap gap-2 mt-6">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`px-4 py-2 rounded-full text-sm transition-all ${category === "All Specialists"
                                            ? "bg-primary text-white"
                                            : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {[
                            { label: "Active Specialists", value: "5,000+", icon: TrendingUp },
                            { label: "Projects Completed", value: "10,000+", icon: Briefcase },
                            { label: "Avg Response Time", value: "< 2 hours", icon: Clock },
                            { label: "Success Rate", value: "98%", icon: Star },
                        ].map((stat) => (
                            <div key={stat.label} className="glass-premium p-6 rounded-2xl text-center">
                                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                <div className="text-white/40 text-sm">{stat.label}</div>
                            </div>
                        ))}
                    </div>

                    {/* Specialists Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {specialists.map((specialist, index) => (
                            <motion.div
                                key={specialist.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-premium rounded-3xl overflow-hidden card-hover group"
                            >
                                {/* Header */}
                                <div className="p-6 pb-4">
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                                            {specialist.name[0]}
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-bold text-white mb-1">{specialist.name}</h3>
                                            <p className="text-white/60 text-sm">{specialist.title}</p>
                                        </div>
                                        <div className={`px-3 py-1 rounded-full text-xs font-medium ${specialist.availability === "Available"
                                                ? "bg-green-500/20 text-green-500"
                                                : "bg-yellow-500/20 text-yellow-500"
                                            }`}>
                                            {specialist.availability}
                                        </div>
                                    </div>

                                    {/* Rating */}
                                    <div className="flex items-center gap-2 mb-4">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                                            <span className="text-white font-semibold">{specialist.rating}</span>
                                        </div>
                                        <span className="text-white/40 text-sm">({specialist.reviews} reviews)</span>
                                    </div>

                                    {/* Info */}
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-white/60 text-sm">
                                            <MapPin className="h-4 w-4" />
                                            <span>{specialist.location}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-white/60 text-sm">
                                            <Briefcase className="h-4 w-4" />
                                            <span>{specialist.experience} • {specialist.projects} projects</span>
                                        </div>
                                    </div>

                                    {/* Skills */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {specialist.skills.slice(0, 3).map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {specialist.skills.length > 3 && (
                                            <span className="px-3 py-1 rounded-full bg-white/5 text-white/60 text-xs">
                                                +{specialist.skills.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Footer */}
                                <div className="p-6 pt-4 border-t border-white/5 flex items-center justify-between">
                                    <div>
                                        <div className="text-white/40 text-xs mb-1">Starting at</div>
                                        <div className="text-white font-bold text-lg">₹{specialist.hourlyRate.toLocaleString()}/hr</div>
                                    </div>
                                    <Button className="bg-primary hover:bg-primary/90">
                                        View Profile
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="text-center mt-12">
                        <Button variant="outline" className="border-white/10 text-white hover:bg-white/10">
                            Load More Specialists
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    )
}
