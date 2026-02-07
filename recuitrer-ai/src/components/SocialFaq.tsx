"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Quote, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Rahul Mehta",
            role: "Founder, TechStart",
            quote: "We went from 6 weeks to 10 days. RecruiterAI handled everything from screening to scheduling. Total game changer.",
            rating: 5,
            color: "bg-accent-1"
        },
        {
            name: "Ananya Iyer",
            role: "Head of Talent at NeoGraph",
            quote: "The AI video screening is incredibly accurate. It captures nuances that our manual screening often missed. 40% improvement in quality.",
            rating: 5,
            color: "bg-accent-2"
        },
        {
            name: "James Wilson",
            role: "CEO at CloudScale",
            quote: "RecruiterAI paid for itself in the first month. We completely eliminated dependence on expensive recruitment agencies.",
            rating: 5,
            color: "bg-accent-3 text-white"
        }
    ];

    // Duplicate testimonials for seamless infinite scroll
    const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

    return (
        <section className="py-20 md:py-24 bg-white dark:bg-black overflow-hidden border-y-8 border-black dark:border-white transition-colors">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="text-4xl md:text-7xl font-black text-center mb-16 md:mb-20 uppercase tracking-tighter text-black dark:text-white"
                >
                    Loved by <span className="text-primary italic">Founders</span>
                </motion.h2>

                {/* Professional testimonial slider */}
                <div className="relative py-10 overflow-hidden group border-y-4 border-black/5 dark:border-white/5">
                    <div className="animate-scroll-slow flex whitespace-nowrap">
                        {extendedTestimonials.map((t, idx) => (
                            <div
                                key={idx}
                                className={cn(
                                    "inline-block w-[300px] md:w-[450px] p-8 md:p-10 border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_var(--primary)] md:dark:shadow-[8px_8px_0px_0px_var(--primary)] hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[10px_10px_0px_0px_var(--primary)] hover:-translate-y-2 transition-all relative group cursor-default mx-4 md:mx-6 flex-shrink-0",
                                    t.color,
                                    "dark:bg-black/40 dark:text-white"
                                )}
                            >
                                <div className="flex gap-1 mb-6 md:mb-8">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={20} className="w-4.5 h-4.5 md:w-5 md:h-5 fill-current text-black dark:text-primary" />
                                    ))}
                                </div>
                                <Quote size={40} className="w-8 h-8 md:w-10 md:h-10 absolute top-8 md:top-10 right-8 md:right-10 opacity-20 group-hover:rotate-12 transition-transform" strokeWidth={3} />
                                <p className="text-lg md:text-xl font-bold mb-8 md:mb-10 leading-tight italic relative z-10 whitespace-normal">"{t.quote}"</p>
                                <div className="flex items-center gap-4 md:gap-5 mt-auto">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-black border-2 border-black dark:border-white flex items-center justify-center font-black text-black dark:text-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_var(--primary)]">
                                        {t.name[0]}
                                    </div>
                                    <div className="text-left">
                                        <h4 className="font-black text-base md:text-lg uppercase tracking-tight leading-none mb-1">{t.name}</h4>
                                        <p className="text-[10px] md:text-sm font-bold opacity-70 uppercase">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const FAQItem = ({ question, answer, idx }: { question: string, answer: string, idx: number }) => {
    const [isOpen, setIsOpen] = useState(false);
    const colors = ["bg-accent-1", "bg-accent-2", "bg-accent-3", "bg-primary", "bg-white"];

    return (
        <motion.div
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={cn(
                "border-4 border-black dark:border-white mb-4 md:mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_var(--primary)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[6px_6px_0px_0px_var(--primary)] transition-all",
                isOpen ? colors[idx % colors.length] : "bg-white dark:bg-black",
                isOpen && idx % 5 === 2 && "text-white",
                isOpen && "dark:text-black" // Make text black when open/colored in dark mode for contrast
            )}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-5 md:p-6 flex items-center justify-between text-left font-black cursor-pointer"
            >
                <span className={cn(
                    "text-lg md:text-2xl uppercase tracking-tighter transition-colors",
                    isOpen ? "text-inherit" : "text-black dark:text-white"
                )}>
                    {question}
                </span>
                <div className={cn(
                    "w-8 h-8 md:w-10 md:h-10 border-2 border-black dark:border-white flex items-center justify-center transition-all bg-white dark:bg-black text-black dark:text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_var(--primary)] shrink-0 ml-4",
                    isOpen && "rotate-180"
                )}>
                    <ChevronDown size={24} className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
                </div>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="overflow-hidden bg-white/10 dark:bg-black/10"
                    >
                        <p className={cn(
                            "p-5 md:p-6 text-base md:text-lg font-bold leading-tight border-t-4 border-black dark:border-white",
                            isOpen ? "text-inherit" : "text-black dark:text-white"
                        )}>
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

const FAQ = () => {
    const faqs = [
        {
            question: "How does AI screening work?",
            answer: "Our AI uses advanced NLP to understand not just keywords, but the context of an applicant's experience. It compares their profile against your specific requirements and benchmarks them against top performers in the industry."
        },
        {
            question: "Does RecruiterAI integrate with our existing ATS?",
            answer: "Yes! We offer native integrations with Greenhouse, Lever, Workday, and Ashby. You can also use our robust API to connect with custom internal systems."
        },
        {
            question: "What's the pricing structure?",
            answer: "We offer flexible plans based on hiring volume. Our 'Startup' plan starts at free for 1 active role, while 'Growth' and 'Enterprise' plans provide unlimited roles with advanced automation features."
        },
        {
            question: "How long does setup take?",
            answer: "Most teams are up and running in less than 30 minutes. Connecting your job boards and setting up your first AI-workflow is a guided, no-code process."
        },
        {
            question: "Is candidate data secure?",
            answer: "Absolutely. We are SOC2 Type II compliant and GDPR ready. All candidate data is encrypted at rest and in transit, and we never use your proprietary data to train our global models without permission."
        }
    ];

    return (
        <section id="faq" className="py-20 md:py-24 bg-primary-bg px-4 md:px-6 border-b-8 border-black dark:border-white transition-colors">
            <div className="max-w-4xl mx-auto">
                <motion.h2
                    initial={{ y: 20 }}
                    whileInView={{ y: 0 }}
                    className="text-4xl md:text-7xl font-black text-center mb-16 md:mb-20 uppercase tracking-tighter text-black dark:text-white"
                >
                    Common <span className="bg-white dark:bg-black border-4 border-black dark:border-white px-2 md:px-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_var(--primary)] md:dark:shadow-[8px_8px_0px_0px_var(--primary)]">Queries</span>
                </motion.h2>
                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <FAQItem key={idx} idx={idx} {...faq} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export { Testimonials, FAQ };

