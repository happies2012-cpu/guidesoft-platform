"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Search, User } from "lucide-react"

const LOGO_URL = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/696192300100a707e867436b/a06b07f70_gslogo.png"

const industries = [
    { name: "Healthcare & Medical", href: "/industries/healthcare" },
    { name: "Finance & Banking", href: "/industries/finance" },
    { name: "Education & EdTech", href: "/industries/education" },
    { name: "E-commerce", href: "/industries/ecommerce" },
    { name: "Manufacturing", href: "/industries/manufacturing" },
    { name: "Agriculture", href: "/industries/agriculture" },
    { name: "Real Estate", href: "/industries/real-estate" },
    { name: "Legal", href: "/industries/legal" },
]

const companySizes = [
    { name: "Startups", href: "/solutions/startups" },
    { name: "Small Businesses", href: "/solutions/small-business" },
    { name: "Medium Enterprises", href: "/solutions/medium-enterprise" },
    { name: "Large Corporations", href: "/solutions/enterprise" },
]

const tools = [
    { name: "Custom Chatbots", href: "/tools/chatbots" },
    { name: "Process Automation", href: "/tools/automation" },
    { name: "Marketing AI", href: "/tools/marketing" },
    { name: "Predictive Analytics", href: "/tools/analytics" },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "glass-dark shadow-2xl border-b border-white/5"
                    : "bg-transparent"
            )}
        >
            <div className="container-centered">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src={LOGO_URL}
                        alt="GUIDESOFT"
                        width={40}
                        height={40}
                        className="rounded-lg"
                    />
                    <span className="text-2xl font-bold tracking-tight text-white hidden sm:block">
                        GUIDE<span className="text-primary">SOFT</span>
                    </span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center gap-6">
                    <NavigationMenu>
                        <NavigationMenuList className="gap-2">
                            <NavigationMenuItem>
                                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-white/10">
                                    Solutions
                                </NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    <div className="grid w-[600px] grid-cols-3 p-6 gap-6 glass-dark border-none shadow-2xl">
                                        <div className="space-y-4">
                                            <h4 className="text-sm font-semibold text-primary">By Industry</h4>
                                            <p className="text-xs text-muted-foreground">Tailored AI solutions</p>
                                            <ul className="space-y-2">
                                                {industries.map((item) => (
                                                    <li key={item.name}>
                                                        <Link
                                                            href={item.href}
                                                            className="text-white/70 hover:text-white text-sm transition-colors block"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="text-sm font-semibold text-primary">By Company Size</h4>
                                            <p className="text-xs text-muted-foreground">Scalable AI for growth</p>
                                            <ul className="space-y-2">
                                                {companySizes.map((item) => (
                                                    <li key={item.name}>
                                                        <Link
                                                            href={item.href}
                                                            className="text-white/70 hover:text-white text-sm transition-colors block"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="space-y-4">
                                            <h4 className="text-sm font-semibold text-primary">Pre-built Tools</h4>
                                            <p className="text-xs text-muted-foreground">Ready-to-deploy AI</p>
                                            <ul className="space-y-2">
                                                {tools.map((item) => (
                                                    <li key={item.name}>
                                                        <Link
                                                            href={item.href}
                                                            className="text-white/70 hover:text-white text-sm transition-colors block"
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </NavigationMenuContent>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/marketplace" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/10")}>
                                        Marketplace
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/services" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/10")}>
                                        Services
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/about" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/10")}>
                                        About
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/blog" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/10")}>
                                        Blog
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>

                            <NavigationMenuItem>
                                <Link href="/pricing" legacyBehavior passHref>
                                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-white hover:bg-white/10")}>
                                        Pricing
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="/sign-in">
                        <Button variant="outline" className="hidden sm:flex border-white/10 text-white hover:bg-white/5">
                            Log In
                        </Button>
                    </Link>
                    <Link href="/sign-up">
                        <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg glow-primary">
                            Get Started
                        </Button>
                    </Link>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="lg:hidden text-white">
                                <Menu className="h-6 w-6" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="glass-dark border-none text-white">
                            <div className="flex flex-col gap-6 mt-10">
                                <Link href="/marketplace" className="text-xl font-semibold">Marketplace</Link>
                                <Link href="/services" className="text-xl font-semibold">Services</Link>
                                <Link href="/about" className="text-xl font-semibold">About</Link>
                                <Link href="/blog" className="text-xl font-semibold">Blog</Link>
                                <Link href="/pricing" className="text-xl font-semibold">Pricing</Link>
                                <div className="pt-6 border-t border-white/10 space-y-4">
                                    <Link href="/sign-in">
                                        <Button variant="outline" className="w-full justify-start border-white/10">Log In</Button>
                                    </Link>
                                    <Link href="/sign-up">
                                        <Button className="w-full justify-start bg-primary">Get Started</Button>
                                    </Link>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
