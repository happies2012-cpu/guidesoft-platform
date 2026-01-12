import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home, Search, ArrowLeft } from "lucide-react"

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#050C16] flex items-center justify-center p-6">
            <div className="text-center max-w-2xl">
                {/* 404 Animation */}
                <div className="mb-8">
                    <h1 className="text-[150px] md:text-[200px] font-bold text-gradient-vibrant leading-none">
                        404
                    </h1>
                </div>

                {/* Message */}
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Page Not Found
                </h2>
                <p className="text-white/60 text-lg mb-8">
                    Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <Button className="bg-primary hover:bg-primary/90 h-12 px-8">
                            <Home className="mr-2 h-4 w-4" />
                            Go Home
                        </Button>
                    </Link>
                    <Link href="/marketplace">
                        <Button variant="outline" className="border-white/10 text-white hover:bg-white/10 h-12 px-8">
                            <Search className="mr-2 h-4 w-4" />
                            Browse Marketplace
                        </Button>
                    </Link>
                </div>

                {/* Helpful Links */}
                <div className="mt-12 pt-8 border-t border-white/10">
                    <p className="text-white/40 text-sm mb-4">You might be looking for:</p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link href="/about" className="text-primary hover:text-primary/80 text-sm">About Us</Link>
                        <Link href="/services" className="text-primary hover:text-primary/80 text-sm">Services</Link>
                        <Link href="/pricing" className="text-primary hover:text-primary/80 text-sm">Pricing</Link>
                        <Link href="/contact" className="text-primary hover:text-primary/80 text-sm">Contact</Link>
                        <Link href="/faq" className="text-primary hover:text-primary/80 text-sm">FAQ</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
