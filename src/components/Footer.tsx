"use client"

import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Github, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
    return (
        <footer className="py-20 border-t border-white/5 bg-[#050C16]">
            <div className="container-centered">
                {/* Main Footer Content */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 mb-12">
                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-white/60 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/careers" className="text-white/60 hover:text-white transition-colors text-sm">Careers</Link></li>
                            <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">Contact</Link></li>
                            <li><Link href="/partners" className="text-white/60 hover:text-white transition-colors text-sm">Partners</Link></li>
                        </ul>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li><Link href="/services" className="text-white/60 hover:text-white transition-colors text-sm">Features</Link></li>
                            <li><Link href="/pricing" className="text-white/60 hover:text-white transition-colors text-sm">Pricing</Link></li>
                            <li><Link href="/marketplace" className="text-white/60 hover:text-white transition-colors text-sm">Marketplace</Link></li>
                            <li><Link href="/docs" className="text-white/60 hover:text-white transition-colors text-sm">API</Link></li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li><Link href="/blog" className="text-white/60 hover:text-white transition-colors text-sm">Blog</Link></li>
                            <li><Link href="/docs" className="text-white/60 hover:text-white transition-colors text-sm">Documentation</Link></li>
                            <li><Link href="/faq" className="text-white/60 hover:text-white transition-colors text-sm">Help Center</Link></li>
                            <li><Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">Support</Link></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><Link href="/privacy" className="text-white/60 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-white/60 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
                            <li><Link href="/privacy#cookies" className="text-white/60 hover:text-white transition-colors text-sm">Cookie Policy</Link></li>
                            <li><Link href="/privacy#gdpr" className="text-white/60 hover:text-white transition-colors text-sm">GDPR</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-span-2">
                        <h3 className="text-white font-semibold mb-4">Stay Updated</h3>
                        <p className="text-white/60 text-sm mb-4">Get the latest AI insights and updates delivered to your inbox.</p>
                        <div className="flex gap-2">
                            <Input
                                type="email"
                                placeholder="your@email.com"
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40"
                            />
                            <Button className="bg-primary hover:bg-primary/90">
                                <Mail className="h-4 w-4" />
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    {/* Logo & Copyright */}
                    <div className="flex items-center gap-4">
                        <span className="text-2xl font-bold tracking-tight text-white">
                            GUIDE<span className="text-primary">SOFT</span>
                        </span>
                        <span className="text-white/40 text-sm">
                            © 2026 GUIDESOFT. All rights reserved.
                        </span>
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                        <a href="https://twitter.com/guidesoft" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                            <Twitter className="h-5 w-5" />
                        </a>
                        <a href="https://linkedin.com/company/guidesoft" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                            <Linkedin className="h-5 w-5" />
                        </a>
                        <a href="https://facebook.com/guidesoft" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                            <Facebook className="h-5 w-5" />
                        </a>
                        <a href="https://instagram.com/guidesoft" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                            <Instagram className="h-5 w-5" />
                        </a>
                        <a href="https://github.com/guidesoft" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-white transition-colors">
                            <Github className="h-5 w-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
