"use client"

import { useUser } from "@clerk/nextjs"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
    LayoutDashboard, Briefcase, Users, TrendingUp, Bell, Settings,
    Plus, ArrowRight, Star, Clock, DollarSign
} from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
    const { user } = useUser()

    const stats = [
        { label: "Active Projects", value: "3", icon: Briefcase, color: "text-blue-500" },
        { label: "Hired Specialists", value: "5", icon: Users, color: "text-green-500" },
        { label: "Total Spent", value: "₹1,24,500", icon: DollarSign, color: "text-purple-500" },
        { label: "Avg Rating", value: "4.8", icon: Star, color: "text-yellow-500" },
    ]

    const recentProjects = [
        {
            title: "AI Chatbot Development",
            specialist: "Dr. Priya Sharma",
            status: "In Progress",
            progress: 65,
            dueDate: "Jan 20, 2026"
        },
        {
            title: "Data Analysis Dashboard",
            specialist: "Rajesh Kumar",
            status: "In Progress",
            progress: 40,
            dueDate: "Jan 25, 2026"
        },
        {
            title: "ML Model Training",
            specialist: "Sneha Reddy",
            status: "Completed",
            progress: 100,
            dueDate: "Jan 10, 2026"
        },
    ]

    const quickActions = [
        { label: "Create Project", icon: Plus, href: "/projects/new", color: "bg-primary" },
        { label: "Find Specialists", icon: Users, href: "/marketplace", color: "bg-green-600" },
        { label: "View Analytics", icon: TrendingUp, href: "/dashboard/analytics", color: "bg-purple-600" },
        { label: "Settings", icon: Settings, href: "/profile", color: "bg-gray-600" },
    ]

    return (
        <main className="min-h-screen bg-[#050C16]">
            <Navbar />

            <div className="pt-32 pb-20">
                <div className="container-centered">
                    {/* Welcome Header */}
                    <div className="mb-12">
                        <h1 className="text-4xl font-bold text-white mb-2">
                            Welcome back, {user?.firstName || 'User'}! 👋
                        </h1>
                        <p className="text-white/60">
                            Here's what's happening with your projects today.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {stats.map((stat) => (
                            <Card key={stat.label} className="glass-premium border-none">
                                <CardContent className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <stat.icon className={`h-8 w-8 ${stat.color}`} />
                                    </div>
                                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                                    <div className="text-white/60 text-sm">{stat.label}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Quick Actions */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                        {quickActions.map((action) => (
                            <Link key={action.label} href={action.href}>
                                <button className={`${action.color} hover:opacity-90 text-white p-6 rounded-2xl w-full text-left transition-all card-hover`}>
                                    <action.icon className="h-6 w-6 mb-3" />
                                    <div className="font-semibold">{action.label}</div>
                                </button>
                            </Link>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Recent Projects */}
                        <div className="lg:col-span-2">
                            <Card className="glass-premium border-none">
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <CardTitle className="text-white">Recent Projects</CardTitle>
                                        <Link href="/projects">
                                            <Button variant="ghost" className="text-primary hover:text-primary/80">
                                                View All
                                                <ArrowRight className="ml-2 h-4 w-4" />
                                            </Button>
                                        </Link>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {recentProjects.map((project) => (
                                            <div key={project.title} className="p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                                <div className="flex items-start justify-between mb-3">
                                                    <div>
                                                        <h3 className="text-white font-semibold mb-1">{project.title}</h3>
                                                        <p className="text-white/60 text-sm">with {project.specialist}</p>
                                                    </div>
                                                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.status === "Completed"
                                                            ? "bg-green-500/20 text-green-500"
                                                            : "bg-blue-500/20 text-blue-500"
                                                        }`}>
                                                        {project.status}
                                                    </span>
                                                </div>
                                                <div className="space-y-2">
                                                    <div className="flex items-center justify-between text-sm">
                                                        <span className="text-white/60">Progress</span>
                                                        <span className="text-white font-medium">{project.progress}%</span>
                                                    </div>
                                                    <div className="w-full bg-white/10 rounded-full h-2">
                                                        <div
                                                            className="bg-primary h-2 rounded-full transition-all"
                                                            style={{ width: `${project.progress}%` }}
                                                        />
                                                    </div>
                                                    <div className="flex items-center gap-2 text-white/40 text-xs">
                                                        <Clock className="h-3 w-3" />
                                                        <span>Due: {project.dueDate}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Activity Feed */}
                        <div>
                            <Card className="glass-premium border-none">
                                <CardHeader>
                                    <CardTitle className="text-white flex items-center gap-2">
                                        <Bell className="h-5 w-5" />
                                        Recent Activity
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {[
                                            { text: "Sneha Reddy completed ML Model Training", time: "2 hours ago" },
                                            { text: "New message from Rajesh Kumar", time: "5 hours ago" },
                                            { text: "Payment of ₹45,000 processed", time: "1 day ago" },
                                            { text: "Priya Sharma accepted your project", time: "2 days ago" },
                                        ].map((activity, i) => (
                                            <div key={i} className="flex gap-3">
                                                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                                                <div>
                                                    <p className="text-white/80 text-sm">{activity.text}</p>
                                                    <p className="text-white/40 text-xs mt-1">{activity.time}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}
