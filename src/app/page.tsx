import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MarketplacePreview } from "@/components/MarketplacePreview";
import { IndustryShowcase } from "@/components/IndustryShowcase";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import Image from "next/image";

const roleData = [
  {
    name: "Learners",
    description: "Access 300+ courses and certifications to master AI.",
    icon: "/learner_icon_1768164683856.png",
    gradient: "from-blue-500/20 to-purple-500/20"
  },
  {
    name: "Earners",
    description: "Monetize your AI expertise on a global scale.",
    icon: "/earner_icon_1768164704085.png",
    gradient: "from-green-500/20 to-cyan-500/20"
  },
  {
    name: "Entrepreneurs",
    description: "Build and scale your AI startup with our ecosystem.",
    icon: "/entrepreneur_icon_1768164720894.png",
    gradient: "from-orange-500/20 to-pink-500/20"
  },
  {
    name: "Investors",
    description: "Find the next generation of AI unicorns.",
    icon: "/investor_icon_1768164736509.png",
    gradient: "from-purple-500/20 to-yellow-500/20"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050C16]">
      <Navbar />
      <Hero />

      {/* Role Selection Section */}
      <section id="roles" className="py-24 bg-[#0D1525] relative z-10 border-t border-white/5">
        <div className="container-centered">
          <div className="text-center mb-16 animate-fade-up">
            <div className="inline-block mb-4">
              <span className="px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                Choose Your Path
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Your Journey Starts Here
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Whether you're looking to learn, earn, innovate, or invest, GUIDESOFT has a tailored path for your AI journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roleData.map((role, index) => (
              <div
                key={role.name}
                className="group relative p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] card-interactive cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${role.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 relative w-20 h-20 mx-auto lg:mx-0">
                    <Image
                      src={role.icon}
                      alt={role.name}
                      fill
                      className="object-contain group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{role.name}</h3>
                  <p className="text-white/50 text-sm mb-6 leading-relaxed">
                    {role.description}
                  </p>

                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Join as {role.name} <span className="text-xl ml-1">→</span>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="text-8xl font-black">{role.name[0]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <MarketplacePreview />
      <IndustryShowcase />
      <Features />
      <Testimonials />
      <Pricing />

      <Footer />
    </main>
  );
}
