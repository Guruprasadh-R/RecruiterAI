"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Sparkles, Star, Zap, User, Clock, CheckCircle, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const ConversationCard = ({ conv, idx }: { conv: any; idx: number }) => {
    // Parallax effect for cards
    const cardRef = useRef(null);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{
                y: -10,
                scale: 1.02,
                rotate: idx % 2 === 0 ? 1 : -1,
                transition: { duration: 0.2 }
            }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: conv.delay
            }}
            className={cn(
                "absolute p-5 backdrop-blur-xl border-[3px] border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_var(--primary)] z-10 max-w-[280px] pointer-events-auto",
                conv.position,
                conv.color,
                "dark:bg-black/80"
            )}
        >
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full border-2 border-black dark:border-white bg-white dark:bg-black flex items-center justify-center font-black text-sm text-black dark:text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                        {conv.profile[0]}
                    </div>
                    <div>
                        <h4 className="text-sm font-black tracking-tight text-black dark:text-white uppercase leading-none mb-1">{conv.profile}</h4>
                        <p className="text-[10px] font-bold uppercase opacity-60 tracking-wider text-black dark:text-white/60">{conv.role}</p>
                    </div>
                </div>
                <div className="relative">
                    <span className="absolute -top-2 -left-2 text-primary opacity-40"><Zap size={16} fill="currentColor" /></span>
                    <p className="text-sm font-bold leading-tight italic text-black dark:text-white pl-3 border-l-2 border-primary/30">
                        "{conv.quote}"
                    </p>
                </div>
            </div>
        </motion.div>
    );
};

const Hero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const conversations = [
        {
            id: 1,
            profile: "Sarah K.",
            role: "Founder at TechStart",
            quote: "Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors.",
            color: "bg-accent-1",
            position: "xl:top-[15%] xl:left-[-2%] 2xl:left-[1%]",
            delay: 0.1,
        },
        {
            id: 2,
            profile: "Rahul M.",
            role: "Hiring Manager at GrowthCo",
            quote: "Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months.",
            color: "bg-accent-2",
            position: "xl:top-[12%] xl:right-[-2%] 2xl:right-[1%]",
            delay: 0.3,
        },
        {
            id: 3,
            profile: "Priya S.",
            role: "CEO at InnovateLabs",
            quote: "I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly.",
            color: "bg-accent-3 text-white",
            position: "xl:bottom-[15%] xl:left-[-1%] 2xl:left-[2%]",
            delay: 0.5,
        },
        {
            id: 4,
            profile: "Amit T.",
            role: "Head of HR at ScaleUp",
            quote: "Our best candidate accepted another offer while we were still scheduling interviews. This keeps happening.",
            color: "bg-white",
            position: "xl:bottom-[10%] xl:right-[-1%] 2xl:right-[2%]",
            delay: 0.7,
        },
    ];

    return (
        <section
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-36 pb-20 md:pb-24 px-4 md:px-6 bg-background transition-colors duration-300"
        >
            {/* High-End Background Elements */}
            <div className="absolute inset-0 z-0">
                {/* Modern Mesh Gradient */}
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,_rgba(59,130,246,0.1),_transparent_40%),radial-gradient(circle_at_80%_70%,_rgba(168,85,247,0.1),_transparent_40%)]" />

                {/* Decorative Shapes */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-black/[0.03] dark:border-white/[0.03] rounded-full"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-black/[0.05] dark:border-white/[0.05] rounded-full"
                />

                {/* Subtle Grid */}
                <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>
            </div>

            <div className="max-w-[1600px] mx-auto w-full relative z-10 px-4 md:px-8">
                {/* Desktop Floating Conversations - Only on large screens with enough gutter */}
                <div className="hidden xl:block">
                    {conversations.map((conv, idx) => (
                        <ConversationCard key={conv.id} conv={conv} idx={idx} />
                    ))}
                </div>

                {/* Central Hero Body */}
                <motion.div
                    style={{ y, opacity }}
                    className="text-center max-w-2xl xl:max-w-3xl 2xl:max-w-4xl mx-auto relative z-20"
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-black dark:bg-white text-white dark:text-black font-black uppercase text-[10px] md:text-xs tracking-[0.2em] shadow-[4px_4px_0px_0px_var(--primary)]">
                            <Sparkles size={14} className="text-primary animate-pulse" />
                            Next-Gen Recruitment
                        </div>

                        {/* Split Text Headline */}
                        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] md:leading-[0.8] mb-10 text-black dark:text-white uppercase group">
                            <span className="block mb-2 overflow-hidden">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    className="block"
                                >
                                    Hiring <span className="text-primary italic">Faster</span>
                                </motion.span>
                            </span>
                            <span className="block overflow-hidden pb-4">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                    className="block relative inline-block"
                                >
                                    Hiring <span className="bg-primary px-4 text-white dark:text-black border-4 border-black dark:border-white shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_0px_var(--primary)] rotate-[-1deg] inline-block">Better</span>
                                </motion.span>
                            </span>
                        </h1>

                        {/* Value Prop */}
                        <div className="max-w-xl mx-auto mb-12 relative">
                            <p className="text-lg md:text-xl font-bold text-black/80 dark:text-white/80 uppercase tracking-tight leading-snug">
                                Stop wasting time on manual screening. <span className="text-black dark:text-white underline decoration-primary decoration-4 underline-offset-4">Let AI automate the heavy lifting</span> so you can focus on building your team.
                            </p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 px-4 mb-20">
                            <motion.button
                                whileHover={{ scale: 1.05, translateZ: 20 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black px-10 md:px-14 py-5 md:py-7 font-black text-xl md:text-2xl border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_var(--primary)] hover:shadow-none transition-all flex items-center justify-center gap-4 uppercase tracking-tighter cursor-pointer group"
                            >
                                <Rocket size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                Get Started Free
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="w-full sm:w-auto bg-white dark:bg-black text-black dark:text-white px-10 md:px-14 py-5 md:py-7 font-black text-xl md:text-2xl border-4 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_var(--primary)] flex items-center justify-center gap-4 uppercase tracking-tighter cursor-pointer hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                            >
                                <Play size={28} fill="currentColor" />
                                Watch Demo
                            </motion.button>
                        </div>

                        {/* Trust Bar */}
                        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-500">
                            <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-black dark:text-white">
                                <Clock size={16} className="text-primary" />
                                Save 20h / Week
                            </div>
                            <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-black dark:text-white">
                                <CheckCircle size={16} className="text-primary" />
                                99% Match Rate
                            </div>
                            <div className="flex items-center gap-2 font-black text-xs uppercase tracking-widest text-black dark:text-white">
                                <User size={16} className="text-primary" />
                                500+ Companies
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Mobile Tablet Grid Layout */}
                <div className="lg:hidden mt-20 grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
                    {conversations.map((conv, idx) => (
                        <motion.div
                            key={conv.id}
                            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className={cn(
                                "p-6 border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_var(--primary)]",
                                conv.color,
                                "dark:bg-black/90 dark:text-white"
                            )}
                        >
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 border-3 border-black dark:border-white bg-white dark:bg-black flex items-center justify-center font-black text-xl text-black dark:text-white">
                                        {conv.profile[0]}
                                    </div>
                                    <div>
                                        <h4 className="font-black text-base uppercase tracking-tight leading-none mb-1 text-black dark:text-white">{conv.profile}</h4>
                                        <p className="text-[10px] font-bold uppercase opacity-60 tracking-widest text-black dark:text-white">{conv.role}</p>
                                    </div>
                                </div>
                                <p className="text-sm font-bold italic leading-tight text-black dark:text-white">"{conv.quote}"</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Premium Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center gap-3"
                >
                    <div className="w-[2px] h-12 bg-gradient-to-b from-primary to-transparent" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-black/50 dark:text-white/50">Discover More</span>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
