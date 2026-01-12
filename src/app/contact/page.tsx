"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    })
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            })

            if (response.ok) {
                setSuccess(true)
                setFormData({ name: '', email: '', phone: '', message: '' })
            }
        } catch (error) {
            console.error('Form submission error:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <main className="min-h-screen bg-[#050C16]">
            <Navbar />

            {/* Hero */}
            <section className="pt-32 pb-20">
                <div className="container-centered">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                            Get in <span className="text-gradient-vibrant">Touch</span>
                        </h1>
                        <p className="text-xl text-white/60">
                            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="glass-premium p-8 rounded-3xl">
                            {success ? (
                                <div className="text-center py-12">
                                    <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-white/60 mb-6">
                                        We'll get back to you within 24 hours.
                                    </p>
                                    <Button onClick={() => setSuccess(false)} variant="outline">
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="text-white text-sm font-medium mb-2 block">
                                            Full Name *
                                        </label>
                                        <Input
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="John Doe"
                                            className="bg-white/5 border-white/10 text-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-white text-sm font-medium mb-2 block">
                                            Email Address *
                                        </label>
                                        <Input
                                            required
                                            type="email"
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="john@example.com"
                                            className="bg-white/5 border-white/10 text-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-white text-sm font-medium mb-2 block">
                                            Phone Number
                                        </label>
                                        <Input
                                            type="tel"
                                            value={formData.phone}
                                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                            placeholder="+91 98765 43210"
                                            className="bg-white/5 border-white/10 text-white"
                                        />
                                    </div>

                                    <div>
                                        <label className="text-white text-sm font-medium mb-2 block">
                                            Message *
                                        </label>
                                        <Textarea
                                            required
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            placeholder="Tell us about your project..."
                                            rows={5}
                                            className="bg-white/5 border-white/10 text-white resize-none"
                                        />
                                    </div>

                                    <Button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-semibold"
                                    >
                                        {loading ? 'Sending...' : (
                                            <>
                                                <Send className="mr-2 h-4 w-4" />
                                                Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            )}
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            <div className="glass-premium p-6 rounded-3xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="h-6 w-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Email Us</h3>
                                        <p className="text-white/60 text-sm">Our team is here to help</p>
                                        <a href="mailto:hello@guidesoft.com" className="text-primary hover:underline mt-2 block">
                                            hello@guidesoft.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-premium p-6 rounded-3xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="h-6 w-6 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Call Us</h3>
                                        <p className="text-white/60 text-sm">Mon-Fri from 9am to 6pm IST</p>
                                        <a href="tel:+919876543210" className="text-primary hover:underline mt-2 block">
                                            +91 98765 43210
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="glass-premium p-6 rounded-3xl">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="h-6 w-6 text-green-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold mb-1">Visit Us</h3>
                                        <p className="text-white/60 text-sm">Come say hello at our office</p>
                                        <p className="text-white/80 mt-2 text-sm">
                                            Bangalore, Karnataka<br />
                                            India
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="glass-premium p-6 rounded-3xl">
                                <h3 className="text-white font-semibold mb-4">Follow Us</h3>
                                <div className="flex gap-3">
                                    {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social) => (
                                        <a
                                            key={social}
                                            href="#"
                                            className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-white/60 hover:text-white transition-all"
                                        >
                                            {social[0]}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
