"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";
import { Zap, Clock, Users, CheckCircle2, TrendingUp, DollarSign, ShieldCheck, ArrowRight, Target, Flame, Stars } from "lucide-react";
import { cn } from "@/lib/utils";

// Animated Counter Component
const Counter = ({ value, suffix = "", duration = 2 }: { value: string; suffix?: string; duration?: number }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Extract numeric part
    const target = parseFloat(value.replace(/[^0-9.]/g, ''));
    const isMultiplier = value.includes('x');
    const isPercent = value.includes('%');

    useEffect(() => {
        if (isInView) {
            let start = 0;
            const end = target;
            const totalFrames = duration * 60;
            let frame = 0;

            const timer = setInterval(() => {
                frame++;
                const progress = frame / totalFrames;
                const easeOutQuad = (t: number) => t * (2 - t);
                const currentCount = start + (end - start) * easeOutQuad(progress);

                setCount(currentCount);

                if (frame >= totalFrames) {
                    setCount(end);
                    clearInterval(timer);
                }
            }, 1000 / 60);

            return () => clearInterval(timer);
        }
    }, [isInView, target, duration]);

    return (
        <span ref={ref} className="tabular-nums">
            {isMultiplier ? `${Math.floor(count)}x` : isPercent ? `${Math.floor(count)}%` : Math.floor(count)}
            {suffix}
        </span>
    );
};

const MetricCard = ({ metric, index }: { metric: any; index: number }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1
            }}
            className={cn(
                "relative group p-6 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_var(--primary)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_var(--primary)] hover:-translate-x-1 hover:-translate-y-1 transition-all flex flex-col justify-between overflow-hidden",
                metric.color,
                metric.gridSpan,
                "dark:bg-black dark:text-white"
            )}
        >
            {/* Background Decoration */}
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity">
                <metric.icon size={120} strokeWidth={3} />
            </div>

            <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-white dark:bg-black border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_var(--primary)] group-hover:rotate-12 transition-transform">
                        <metric.icon size={20} className="w-4 h-4 md:w-5 md:h-5 text-black dark:text-white" strokeWidth={3} />
                    </div>
                    <h4 className="text-[10px] md:text-xs font-black uppercase tracking-widest leading-none">{metric.label}</h4>
                </div>

                <div className="flex flex-col">
                    <div className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tighter mb-2 italic leading-none">
                        <Counter value={metric.value} />
                    </div>
                </div>
            </div>

            <div className="relative z-10 pt-4 border-t-2 border-black/10 dark:border-white/10 group-hover:border-black/20 dark:group-hover:border-white/20 transition-colors mt-2">
                <p className="text-xs md:text-sm font-bold leading-tight opacity-80 uppercase">{metric.desc}</p>
            </div>

            {/* Unique Visualization based on type */}
            <div className="absolute bottom-2 right-2 opacity-20 group-hover:opacity-100 transition-all pointer-events-none transform translate-y-4 group-hover:translate-y-0">
                {metric.label.includes("Screening") && (
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                        <Zap size={40} fill="currentColor" />
                    </motion.div>
                )}
                {metric.label.includes("Cost") && (
                    <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <DollarSign size={40} />
                    </motion.div>
                )}
                {metric.label.includes("Interview") && (
                    <div className="flex -space-x-3">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="w-8 h-8 rounded-full border-2 border-black dark:border-white bg-primary flex items-center justify-center">
                                <Users size={12} />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </motion.div>
    );
};

const ImpactSection = () => {
    const metrics = [
        {
            label: "Faster Screening",
            value: "10x",
            desc: "AI parses 250+ apps/day vs 25 manually",
            icon: Zap,
            color: "bg-primary",
            gridSpan: "md:col-span-2 md:row-span-1 lg:col-span-2"
        },
        {
            label: "Time-to-Hire",
            value: "70%",
            desc: "Drops from 42 to 12 days average",
            icon: Clock,
            color: "bg-accent-1",
            gridSpan: "md:col-span-1"
        },
        {
            label: "Interviewing",
            value: "25x",
            desc: "Conduct 200+ interviews daily",
            icon: Users,
            color: "bg-accent-2",
            gridSpan: "md:col-span-1"
        },
        {
            label: "Cost Savings",
            value: "80%",
            desc: "Compared to agency fees & ads",
            icon: DollarSign,
            color: "bg-accent-3 text-white",
            gridSpan: "md:col-span-1 lg:col-span-1"
        },
        {
            label: "App Completion",
            value: "95%",
            desc: "Smart forms maximize talent intake",
            icon: CheckCircle2,
            color: "bg-accent-3 text-white",
            gridSpan: "md:col-span-1 lg:col-span-1"
        },
        {
            label: "Qualified Apps",
            value: "89%",
            desc: "Attract the best with optimizer",
            icon: TrendingUp,
            color: "bg-white",
            gridSpan: "md:col-span-2 lg:col-span-2"
        },
        {
            label: "Hiring Accuracy",
            value: "50%",
            desc: "Reduction in bad hire occurrences",
            icon: ShieldCheck,
            color: "bg-accent-1",
            gridSpan: "md:col-span-2 lg:col-span-4"
        },
    ];

    const benefits = [
        {
            title: "Scale Without Burnout",
            desc: "Hire for 10 roles as easily as 1. Our AI doesn't get tired of reading resumes.",
            icon: TrendingUp,
            color: "bg-accent-1"
        },
        {
            title: "Data-Driven Decisions",
            desc: "Remove human bias with objective AI scoring based on your custom rubrics.",
            icon: ShieldCheck,
            color: "bg-accent-2"
        },
        {
            title: "Candidate First Experience",
            desc: "No more black holes. Every candidate gets instant replies and feedback.",
            icon: Users,
            color: "bg-accent-3 text-white"
        }
    ];

    return (
        <section id="impact" className="py-24 bg-primary-bg overflow-hidden border-b-8 border-black dark:border-white transition-colors">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16 md:mb-20 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-8">
                    <div className="text-center lg:text-left text-black dark:text-white">
                        <motion.h2
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-4xl sm:text-5xl md:text-8xl font-black mb-4 md:mb-6 tracking-tighter uppercase leading-[1] md:leading-none"
                        >
                            Impact <br className="hidden md:block" />
                            <span className="text-primary dark:text-primary outline-text-brutal">By The Numbers</span>
                        </motion.h2>
                        <p className="text-lg md:text-2xl font-bold opacity-80 uppercase tracking-tight">Real results that move the needle.</p>
                    </div>

                    <div className="hidden lg:block">
                        <motion.div
                            initial={{ rotate: -10, scale: 0.8 }}
                            whileInView={{ rotate: 5, scale: 1 }}
                            className="bg-black dark:bg-white text-white dark:text-black p-4 border-4 border-black dark:border-white rotate-6 shadow-[10px_10px_0px_0px_var(--primary)]"
                        >
                            <div className="flex items-center gap-2 font-black uppercase italic text-xl">
                                <Flame className="text-orange-500 fill-orange-500" /> 100% Data Backed
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Creative Metrics Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-24">
                    {metrics.map((m, idx) => (
                        <MetricCard key={idx} metric={m} index={idx} />
                    ))}
                </div>

                {/* Benefit Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                    {benefits.map((b, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ type: "spring", stiffness: 100, delay: idx * 0.2 }}
                            className={cn(
                                "p-8 md:p-10 border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_var(--primary)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[12px_12px_0px_0px_var(--primary)] hover:-translate-y-2 transition-all group",
                                b.color,
                                "dark:bg-black dark:text-white"
                            )}
                        >
                            <div className="w-14 h-14 md:w-16 md:h-16 bg-white dark:bg-black border-4 border-black dark:border-white flex items-center justify-center text-black dark:text-white mb-6 md:mb-8 group-hover:rotate-6 transition-transform shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_var(--primary)]">
                                <b.icon size={32} className="w-7 h-7 md:w-8 md:h-8" strokeWidth={3} />
                            </div>
                            <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 uppercase tracking-tight">{b.title}</h3>
                            <p className="text-base md:text-lg font-bold leading-tight opacity-90">{b.desc}</p>
                            <div className="mt-6 md:mt-8 flex items-center gap-2 font-black uppercase text-xs md:text-sm tracking-widest cursor-pointer group-hover:gap-4 transition-all">
                                Learn More <ArrowRight size={20} className="w-4.5 h-4.5 md:w-5 md:h-5" strokeWidth={3} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Retro Style Marquee at bottom of section */}
            <div className="mt-24 border-y-4 border-black dark:border-white bg-white dark:bg-black py-4 overflow-hidden flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="flex gap-20 items-center text-2xl font-black uppercase italic"
                >
                    {[1, 2, 3, 4, 5].map((i) => (
                        <React.Fragment key={i}>
                            <span className="flex items-center gap-4 text-black dark:text-white"><Target className="text-primary" /> Maximize ROI</span>
                            <span className="flex items-center gap-4 text-black dark:text-white"><Zap className="text-primary" /> Instant Feedback</span>
                            <span className="flex items-center gap-4 text-black dark:text-white"><Stars className="text-primary" /> AI Powered</span>
                            <span className="flex items-center gap-4 text-black dark:text-white"><Users className="text-primary" /> Scalable Teams</span>
                        </React.Fragment>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ImpactSection;

