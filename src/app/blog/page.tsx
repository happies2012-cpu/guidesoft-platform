"use client"

import { Navbar } from "@/components/Navbar"
import { motion } from "framer-motion"
import Image from "next/image"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"

const blogPosts = [
    {
        title: "Why Most AI Projects Fail (And How to Avoid It)",
        excerpt: "We've seen it happen too many times. Companies invest millions in AI, only to see projects stall or fail completely. Here's what actually works, based on 100+ successful implementations.",
        author: "Priya Sharma",
        date: "Jan 10, 2026",
        readTime: "8 min read",
        category: "Strategy",
        image: "/blog/ai-projects.jpg",
        slug: "why-ai-projects-fail"
    },
    {
        title: "The Real Cost of Not Using AI in 2026",
        excerpt: "Your competitors are using AI. Your customers expect it. Here's what it's actually costing you to wait, and why now is the time to start.",
        author: "Rajesh Kumar",
        date: "Jan 8, 2026",
        readTime: "6 min read",
        category: "Business",
        image: "/blog/ai-cost.jpg",
        slug: "real-cost-of-not-using-ai"
    },
    {
        title: "From Idea to Implementation: Our AI Project Playbook",
        excerpt: "Step-by-step guide we use with every client. No fluff, just the exact process that's worked for 500+ companies across 16 industries.",
        author: "Amit Patel",
        date: "Jan 5, 2026",
        readTime: "12 min read",
        category: "Guide",
        image: "/blog/playbook.jpg",
        slug: "ai-project-playbook"
    },
    {
        title: "ChatGPT vs Custom AI: Which Does Your Business Need?",
        excerpt: "Everyone's talking about ChatGPT. But is it right for your business? We break down when to use off-the-shelf AI and when to build custom.",
        author: "Sneha Reddy",
        date: "Jan 3, 2026",
        readTime: "7 min read",
        category: "Technology",
        image: "/blog/chatgpt-custom.jpg",
        slug: "chatgpt-vs-custom-ai"
    },
    {
        title: "How We Helped a Small Business Save ₹50 Lakhs with AI",
        excerpt: "Real story, real numbers. A 20-person company automated their customer service and saved massive costs. Here's exactly how we did it.",
        author: "Vikram Singh",
        date: "Dec 28, 2025",
        readTime: "10 min read",
        category: "Case Study",
        image: "/blog/case-study.jpg",
        slug: "small-business-saves-50-lakhs"
    },
    {
        title: "AI Ethics: What Every Business Leader Should Know",
        excerpt: "AI is powerful, but with great power comes great responsibility. Here's how to use AI ethically and avoid the pitfalls that have hurt other companies.",
        author: "Dr. Meera Iyer",
        date: "Dec 25, 2025",
        readTime: "9 min read",
        category: "Ethics",
        image: "/blog/ai-ethics.jpg",
        slug: "ai-ethics-business-leaders"
    }
]

const categories = ["All", "Strategy", "Business", "Technology", "Case Study", "Guide", "Ethics"]

export default function BlogPage() {
    return (
        <main className="min-h-screen bg-[#050C16]">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20">
                <div className="container-centered">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center max-w-3xl mx-auto mb-16"
                    >
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Insights & <span className="text-gradient-vibrant">Stories</span>
                        </h1>
                        <p className="text-xl text-white/60">
                            Real experiences, honest insights, and practical advice from the frontlines of AI implementation.
                        </p>
                    </motion.div>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-3 justify-center mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                className={`px-6 py-2 rounded-full transition-all ${category === "All"
                                        ? "bg-primary text-white"
                                        : "bg-white/5 text-white/60 hover:bg-white/10 hover:text-white"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Featured Post */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="glass-premium rounded-3xl overflow-hidden mb-12 card-hover"
                    >
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="relative h-64 md:h-auto bg-gradient-to-br from-primary/20 to-accent/20">
                                {/* Placeholder for featured image */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white/40 text-sm">Featured Image</span>
                                </div>
                            </div>
                            <div className="p-8 flex flex-col justify-center">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium">
                                        {blogPosts[0].category}
                                    </span>
                                    <span className="text-white/40 text-sm">Featured</span>
                                </div>
                                <h2 className="text-3xl font-bold text-white mb-4">{blogPosts[0].title}</h2>
                                <p className="text-white/60 mb-6 leading-relaxed">{blogPosts[0].excerpt}</p>
                                <div className="flex items-center gap-6 text-white/40 text-sm mb-6">
                                    <div className="flex items-center gap-2">
                                        <User className="h-4 w-4" />
                                        <span>{blogPosts[0].author}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Calendar className="h-4 w-4" />
                                        <span>{blogPosts[0].date}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Clock className="h-4 w-4" />
                                        <span>{blogPosts[0].readTime}</span>
                                    </div>
                                </div>
                                <a
                                    href={`/blog/${blogPosts[0].slug}`}
                                    className="inline-flex items-center text-primary hover:text-primary/80 font-semibold"
                                >
                                    Read Full Story
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.slice(1).map((post, index) => (
                            <motion.article
                                key={post.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-premium rounded-3xl overflow-hidden card-hover group"
                            >
                                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10">
                                    {/* Placeholder for post image */}
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <span className="text-white/20 text-xs">Post Image</span>
                                    </div>
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full bg-primary/90 text-white text-xs font-medium">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                                        {post.title}
                                    </h3>
                                    <p className="text-white/60 mb-4 line-clamp-3 text-sm leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center gap-4 text-white/40 text-xs mb-4">
                                        <div className="flex items-center gap-1">
                                            <User className="h-3 w-3" />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            <span>{post.readTime}</span>
                                        </div>
                                    </div>
                                    <a
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-primary hover:text-primary/80 font-semibold text-sm"
                                    >
                                        Read More
                                        <ArrowRight className="ml-2 h-3 w-3" />
                                    </a>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* Newsletter */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-20 glass-premium p-12 rounded-3xl text-center"
                    >
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Get AI Insights in Your Inbox
                        </h2>
                        <p className="text-white/60 mb-8 max-w-2xl mx-auto">
                            Weekly insights, case studies, and practical tips. No spam, just value. Unsubscribe anytime.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="flex-1 px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:border-primary"
                            />
                            <button className="px-8 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-semibold whitespace-nowrap">
                                Subscribe
                            </button>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    )
}
