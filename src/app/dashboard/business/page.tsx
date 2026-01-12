"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    LayoutDashboard,
    Users,
    BrainCircuit,
    BarChart3,
    Settings,
    Bell,
    Search,
    Plus,
    ArrowUpRight,
    TrendingUp,
    Cpu,
    ShieldCheck
} from "lucide-react"

export default function BusinessDashboard() {
    return (
        <div className="min-h-screen bg-[#050505] text-white flex">
            {/* Sidebar */}
            <aside className="w-64 border-r border-white/5 bg-[#080808] p-6 flex flex-col gap-8 hidden lg:flex">
                <div className="flex items-center gap-2">
                    <span className="text-xl font-bold tracking-tight">
                        GUIDE<span className="text-primary">SOFT</span>
                    </span>
                </div>

                <nav className="flex flex-col gap-2">
                    {[
                        { icon: LayoutDashboard, label: "Overview", active: true },
                        { icon: Users, label: "AI Experts" },
                        { icon: BrainCircuit, label: "AI Solutions" },
                        { icon: BarChart3, label: "Analytics" },
                        { icon: Settings, label: "Settings" },
                    ].map((item) => (
                        <button
                            key={item.label}
                            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${item.active
                                    ? "bg-primary text-white shadow-lg glow-primary"
                                    : "text-white/40 hover:text-white hover:bg-white/5"
                                }`}
                        >
                            <item.icon className="h-4 w-4" />
                            {item.label}
                        </button>
                    ))}
                </nav>

                <div className="mt-auto p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-white/5">
                    <p className="text-xs font-bold mb-2">PRO PLAN</p>
                    <p className="text-[10px] text-white/60 mb-4">You have access to 12/16 industry modules.</p>
                    <Button size="sm" className="w-full bg-white text-black hover:bg-white/90 text-[10px] h-8 rounded-lg">
                        Upgrade Now
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-w-0 h-screen overflow-y-auto">
                {/* Header */}
                <header className="h-16 border-b border-white/5 px-8 flex items-center justify-between sticky top-0 bg-[#050505]/80 backdrop-blur-md z-20">
                    <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-full border border-white/10 w-96">
                        <Search className="h-4 w-4 text-white/40" />
                        <input
                            type="text"
                            placeholder="Search AI tools, experts, or analytics..."
                            className="bg-transparent border-none outline-none text-sm w-full placeholder:text-white/20"
                        />
                    </div>

                    <div className="flex items-center gap-4">
                        <Button variant="ghost" size="icon" className="text-white/60 hover:text-white relative">
                            <Bell className="h-5 w-5" />
                            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full" />
                        </Button>
                        <div className="h-8 w-[1px] bg-white/10" />
                        <div className="flex items-center gap-3">
                            <div className="text-right hidden sm:block">
                                <p className="text-sm font-medium text-white">Acme Corp</p>
                                <p className="text-[10px] text-white/40 italic">Enterprise Account</p>
                            </div>
                            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-white/10" />
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-8 space-y-8">
                    <div className="flex justify-between items-end">
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight mb-2">Business Overview</h1>
                            <p className="text-white/40">Welcome back! Here's what's happening with your AI ecosystem.</p>
                        </div>
                        <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg glow-primary">
                            <Plus className="mr-2 h-4 w-4" /> Deploy New AI
                        </Button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: "Active AI Agents", value: "24", change: "+4", icon: BrainCircuit, trend: "up" },
                            { label: "Token Usage", value: "1.2M", change: "+12%", icon: Cpu, trend: "up" },
                            { label: "Estimated Savings", value: "$4,250", change: "-$200", icon: TrendingUp, trend: "down" },
                            { label: "System Health", value: "99.9%", change: "Stable", icon: ShieldCheck, trend: "up" },
                        ].map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Card className="glass-dark border-white/5 hover:border-white/10 transition-all">
                                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                                        <CardTitle className="text-sm font-medium text-white/60">{stat.label}</CardTitle>
                                        <stat.icon className="h-4 w-4 text-primary" />
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{stat.value}</div>
                                        <p className={`text-xs mt-1 flex items-center gap-1 ${stat.trend === 'up' ? 'text-emerald-400' : 'text-rose-400'}`}>
                                            {stat.change} {stat.trend === 'up' && <ArrowUpRight className="h-3 w-3" />}
                                        </p>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        ))}
                    </div>

                    {/* Charts Placeholder/Main Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <Card className="lg:col-span-2 glass-dark border-white/5 h-[400px] flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-lg font-bold flex items-center justify-between">
                                    Industry AI Performance
                                    <Badge variant="outline" className="border-white/10 text-white/40 px-3">Last 30 Days</Badge>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 flex items-center justify-center border-t border-white/5">
                                <div className="text-white/20 flex flex-col items-center gap-4">
                                    <BarChart3 className="h-16 w-16" />
                                    <p>Performance Metrics Visualization</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="glass-dark border-white/5 flex flex-col">
                            <CardHeader>
                                <CardTitle className="text-lg font-bold">Active AI Teams</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                {[
                                    { name: "NLP Optimization", members: 4, status: "Active", progress: 85 },
                                    { name: "Global Supply Chain", members: 7, status: "Review", progress: 62 },
                                    { name: "Customer Service Bot", members: 2, status: "Active", progress: 98 },
                                ].map((team) => (
                                    <div key={team.name} className="space-y-2">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="font-medium">{team.name}</span>
                                            <span className="text-xs text-white/40">{team.progress}%</span>
                                        </div>
                                        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-primary"
                                                style={{ width: `${team.progress}%` }}
                                            />
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <div className="flex -space-x-2">
                                                {[1, 2, 3].map(i => (
                                                    <div key={i} className="h-6 w-6 rounded-full border border-black bg-white/10" />
                                                ))}
                                            </div>
                                            <Badge className="bg-white/5 text-[10px] text-white/60 h-5 border-none">{team.status}</Badge>
                                        </div>
                                    </div>
                                ))}
                                <Button variant="outline" className="w-full border-white/10 text-white/60 hover:text-white">
                                    Manage All Teams
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}
