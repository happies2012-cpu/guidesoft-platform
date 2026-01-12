"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useUser } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react"

export const dynamic = 'force-dynamic'

const steps = [
    { id: 1, name: "Welcome", description: "Tell us about yourself" },
    { id: 2, name: "Role", description: "Choose your path" },
    { id: 3, name: "Goals", description: "What brings you here?" },
    { id: 4, name: "Complete", description: "You're all set!" },
]

const roles = [
    { id: "user", name: "Business Owner", desc: "I want to hire AI specialists" },
    { id: "specialist", name: "AI Specialist", desc: "I want to offer my services" },
    { id: "investor", name: "Investor", desc: "I want to invest in AI projects" },
    { id: "enterprise", name: "Enterprise", desc: "I represent a large organization" },
]

const goals = [
    "Build an AI product",
    "Automate business processes",
    "Improve customer experience",
    "Analyze data better",
    "Reduce operational costs",
    "Scale my business",
]

export default function OnboardingPage() {
    const router = useRouter()
    const { user } = useUser()
    const [currentStep, setCurrentStep] = useState(1)
    const [formData, setFormData] = useState({
        company: "",
        industry: "",
        role: "",
        goals: [] as string[],
        bio: "",
    })

    const handleNext = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1)
        } else {
            // Save to database and redirect
            router.push("/dashboard")
        }
    }

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const toggleGoal = (goal: string) => {
        setFormData(prev => ({
            ...prev,
            goals: prev.goals.includes(goal)
                ? prev.goals.filter(g => g !== goal)
                : [...prev.goals, goal]
        }))
    }

    return (
        <div className="min-h-screen bg-[#050C16] flex items-center justify-center p-6">
            <div className="w-full max-w-3xl">
                {/* Progress */}
                <div className="mb-12">
                    <div className="flex items-center justify-between mb-4">
                        {steps.map((step, index) => (
                            <div key={step.id} className="flex items-center flex-1">
                                <div className="flex flex-col items-center">
                                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${currentStep >= step.id
                                        ? "bg-primary text-white"
                                        : "bg-white/10 text-white/40"
                                        }`}>
                                        {currentStep > step.id ? (
                                            <CheckCircle2 className="h-5 w-5" />
                                        ) : (
                                            step.id
                                        )}
                                    </div>
                                    <div className="text-white/60 text-xs mt-2 text-center hidden sm:block">
                                        {step.name}
                                    </div>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className={`flex-1 h-1 mx-2 transition-all ${currentStep > step.id ? "bg-primary" : "bg-white/10"
                                        }`} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Content */}
                <div className="glass-premium p-8 md:p-12 rounded-3xl">
                    {currentStep === 1 && (
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Welcome to GUIDESOFT, {user?.firstName}! 👋
                            </h2>
                            <p className="text-white/60 mb-8">
                                Let's get you set up in just a few steps. This will only take 2 minutes.
                            </p>
                            <div className="space-y-4">
                                <div>
                                    <label className="text-white text-sm font-medium mb-2 block">
                                        Company Name
                                    </label>
                                    <Input
                                        placeholder="Your company name"
                                        value={formData.company}
                                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                        className="bg-white/5 border-white/10 text-white"
                                    />
                                </div>
                                <div>
                                    <label className="text-white text-sm font-medium mb-2 block">
                                        Industry
                                    </label>
                                    <Input
                                        placeholder="e.g., Healthcare, Finance, E-commerce"
                                        value={formData.industry}
                                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                                        className="bg-white/5 border-white/10 text-white"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {currentStep === 2 && (
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Choose Your Role
                            </h2>
                            <p className="text-white/60 mb-8">
                                This helps us personalize your experience
                            </p>
                            <div className="grid md:grid-cols-2 gap-4">
                                {roles.map((role) => (
                                    <button
                                        key={role.id}
                                        onClick={() => setFormData({ ...formData, role: role.id })}
                                        className={`p-6 rounded-2xl text-left transition-all ${formData.role === role.id
                                            ? "bg-primary text-white"
                                            : "bg-white/5 text-white hover:bg-white/10"
                                            }`}
                                    >
                                        <h3 className="font-semibold text-lg mb-2">{role.name}</h3>
                                        <p className={formData.role === role.id ? "text-white/90" : "text-white/60"}>
                                            {role.desc}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {currentStep === 3 && (
                        <div>
                            <h2 className="text-3xl font-bold text-white mb-4">
                                What Are Your Goals?
                            </h2>
                            <p className="text-white/60 mb-8">
                                Select all that apply
                            </p>
                            <div className="grid md:grid-cols-2 gap-3 mb-6">
                                {goals.map((goal) => (
                                    <button
                                        key={goal}
                                        onClick={() => toggleGoal(goal)}
                                        className={`p-4 rounded-xl text-left transition-all ${formData.goals.includes(goal)
                                            ? "bg-primary text-white"
                                            : "bg-white/5 text-white hover:bg-white/10"
                                            }`}
                                    >
                                        {goal}
                                    </button>
                                ))}
                            </div>
                            <div>
                                <label className="text-white text-sm font-medium mb-2 block">
                                    Tell us more (optional)
                                </label>
                                <Textarea
                                    placeholder="What specific challenges are you facing?"
                                    value={formData.bio}
                                    onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                                    className="bg-white/5 border-white/10 text-white min-h-[100px]"
                                />
                            </div>
                        </div>
                    )}

                    {currentStep === 4 && (
                        <div className="text-center">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 className="h-10 w-10 text-green-500" />
                            </div>
                            <h2 className="text-3xl font-bold text-white mb-4">
                                You're All Set! 🎉
                            </h2>
                            <p className="text-white/60 mb-8">
                                Your profile is complete. Let's start building something amazing together!
                            </p>
                        </div>
                    )}

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8 pt-8 border-t border-white/10">
                        <Button
                            variant="ghost"
                            onClick={handleBack}
                            disabled={currentStep === 1}
                            className="text-white hover:bg-white/10"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back
                        </Button>
                        <Button
                            onClick={handleNext}
                            className="bg-primary hover:bg-primary/90"
                        >
                            {currentStep === steps.length ? "Go to Dashboard" : "Continue"}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
