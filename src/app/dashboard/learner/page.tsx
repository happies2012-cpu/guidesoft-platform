"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    BookOpen,
    GraduationCap,
    Trophy,
    Target,
    Clock,
    PlayCircle,
    Brain,
    Search,
    ChevronRight,
    TrendingUp,
    Award
} from "lucide-react"

export default function LearnerDashboard() {
    return (
        <div className="min-h-screen bg-[#050505] text-white flex flex-col md:flex-row">
            {/* Small Screen Nav / Big Screen Sidebar Stub */}
            <aside className="w-full md:w-20 lg:w-64 border-r border-white/5 bg-[#080808] p-4 lg:p-6 flex flex-col gap-8">
                <div className="flex items-center gap-2 px-2">
                    <span className="text-xl font-bold tracking-tight block lg:hidden">GS</span>
                    <span className="text-xl font-bold tracking-tight hidden lg:block">
                        GUIDE<span className="text-primary">SOFT</span>
                    </span>
                </div>

                <nav className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible">
                    {[
                        { icon: BookOpen, label: "My Learning", active: true },
                        { icon: GraduationCap, label: "Certifications" },
                        { icon: Brain, label: "Playground" },
                        { icon: Target, label: "Career Path" },
                    ].map((item) => (
                        <button
                            key={item.label}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all min-w-fit ${item.active
                                    ? "bg-primary text-white shadow-lg glow-primary"
                                    : "text-white/40 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <item.icon className="h-4 w-4" />
                            <span className="hidden lg:block">{item.label}</span>
                        </button>
                    ))}
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-4 lg:p-8 space-y-8 overflow-y-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight mb-2">My Learning Path</h1>
                        <p className="text-white/40">You're 65% through your AI System Architect specialization.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="h-10 px-4 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-sm">
                            <Trophy className="h-4 w-4 text-yellow-500" />
                            <span>1,240 XP</span>
                        </div>
                        <div className="h-10 px-4 rounded-xl bg-primary text-white flex items-center gap-2 text-sm font-bold shadow-lg glow-primary cursor-pointer hover:scale-105 transition-all">
                            Join Live Workshop
                        </div>
                    </div>
                </div>

                {/* Stats Summary */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Card className="glass-dark border-white/5 bg-gradient-to-br from-primary/10 to-transparent">
                        <CardContent className="p-6 flex items-center gap-6">
                            <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center">
                                <Clock className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <p className="text-sm text-white/40 mb-1">Weekly Focus</p>
                                <div className="text-2xl font-bold">12h 45m</div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="glass-dark border-white/5 bg-gradient-to-br from-accent/10 to-transparent">
                        <CardContent className="p-6 flex items-center gap-6">
                            <div className="h-12 w-12 rounded-2xl bg-accent/20 flex items-center justify-center">
                                <TrendingUp className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                                <p className="text-sm text-white/40 mb-1">Current Streak</p>
                                <div className="text-2xl font-bold">8 Days</div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="glass-dark border-white/5 bg-gradient-to-br from-fuchsia-500/10 to-transparent">
                        <CardContent className="p-6 flex items-center gap-6">
                            <div className="h-12 w-12 rounded-2xl bg-fuchsia-500/20 flex items-center justify-center">
                                <Award className="h-6 w-6 text-fuchsia-400" />
                            </div>
                            <div>
                                <p className="text-sm text-white/40 mb-1">Badges Earned</p>
                                <div className="text-2xl font-bold">14</div>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Continue Learning */}
                <div>
                    <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
                        <PlayCircle className="h-5 w-5 text-primary" /> Continue Learning
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Advanced LLM Integration Patterns",
                                instructor: "Alex Rivera",
                                progress: 74,
                                duration: "2h 45m left",
                                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=400&auto=format&fit=crop"
                            },
                            {
                                title: "Prompt Engineering for Enterprise",
                                instructor: "Elena Petrov",
                                progress: 42,
                                duration: "5h 20m left",
                                image: "https://images.unsplash.com/photo-1620712943543-bcc4628c9455?q=80&w=400&auto=format&fit=crop"
                            }
                        ].map((course, i) => (
                            <motion.div
                                key={course.title}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="glass-dark border-white/5 overflow-hidden group cursor-pointer">
                                    <div className="flex h-32">
                                        <div className="relative w-40 h-full overflow-hidden">
                                            <img src={course.image} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500" alt={course.title} />
                                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <PlayCircle className="h-10 w-10 text-white" />
                                            </div>
                                        </div>
                                        <div className="flex-1 p-4 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-sm font-bold truncate mb-1">{course.title}</h3>
                                                <p className="text-[10px] text-white/40">{course.instructor}</p>
                                            </div>
                                            <div className="space-y-2">
                                                <div className="flex justify-between items-center text-[10px]">
                                                    <span className="text-primary">{course.progress}% Complete</span>
                                                    <span className="text-white/40">{course.duration}</span>
                                                </div>
                                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                    <div className="h-full bg-primary" style={{ width: `${course.progress}%` }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Recommended for You */}
                <div>
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Recommended for You</h2>
                        <Button variant="link" className="text-primary text-sm p-0 h-auto">See all recommendations</Button>
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {[
                            "Computer Vision v2",
                            "AI Ethics Lab",
                            "Next.js AI Sdk",
                            "Vector Database Pro"
                        ].map((skill) => (
                            <div key={skill} className="p-4 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-primary/20 hover:bg-white/[0.05] transition-all cursor-pointer flex items-center justify-between group">
                                <span className="text-sm font-medium text-white/70 group-hover:text-white">{skill}</span>
                                <ChevronRight className="h-4 w-4 text-white/20 group-hover:text-primary transition-colors" />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}
