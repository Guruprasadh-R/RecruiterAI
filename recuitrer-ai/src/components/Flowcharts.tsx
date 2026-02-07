"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Mail, Calendar, Video, UserCheck, RefreshCcw, Database, Zap, ArrowRight, MousePointer2, Settings, ShieldCheck, Activity } from "lucide-react";
import { cn } from "@/lib/utils";

// --- Components ---

const AnimatedConnector = ({ active }: { active: boolean }) => (
    <div className="relative w-1 md:w-1.5 h-8 md:h-12 bg-black/10 dark:bg-white/10 overflow-hidden">
        <motion.div
            initial={{ y: "-100%" }}
            animate={active ? { y: "100%" } : { y: "-100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-primary shadow-[0_0_10px_var(--primary)]"
        />
    </div>
);

const SVGConnector = ({ active, path = "M 50 0 V 20 H 20 V 40" }: { active: boolean; path?: string }) => (
    <svg className="w-full h-12 -mt-4 mb-4" viewBox="0 0 100 40" fill="none" preserveAspectRatio="none">
        <path d={path} stroke="currentColor" strokeWidth="3" className="text-black/10 dark:text-white/10" />
        <motion.path
            d={path}
            stroke="var(--primary)"
            strokeWidth="3"
            strokeDasharray="10 5"
            animate={active ? { strokeDashoffset: [-20, 0] } : {}}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className={cn("opacity-0", active && "opacity-100")}
        />
    </svg>
);

const WorkflowNode = ({ icon: Icon, title, status, active, color = "primary" }: any) => {
    const colors = {
        primary: "bg-primary text-white",
        accent1: "bg-accent-1 text-black",
        accent2: "bg-accent-2 text-black",
        accent3: "bg-accent-3 text-white",
    }[color as "primary" | "accent1" | "accent2" | "accent3"];

    return (
        <motion.div
            animate={active ? { scale: 1.05, y: -2 } : { scale: 1, y: 0 }}
            className="flex flex-col items-center z-10"
        >
            <div className={cn(
                "w-12 h-12 md:w-16 md:h-16 border-4 border-black dark:border-white transition-all relative flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_var(--primary)]",
                active ? colors : "bg-white dark:bg-black text-black dark:text-white"
            )}>
                {active && (
                    <motion.div
                        layoutId="active-glow"
                        className="absolute inset-0 bg-primary/20 blur-xl -z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    />
                )}
                <Icon size={24} className="md:w-8 md:h-8" strokeWidth={3} />

                {status && (
                    <div className="absolute -top-2 -right-2 bg-black dark:bg-white text-white dark:text-black text-[8px] font-black px-1 border-2 border-black dark:border-white uppercase">
                        {status}
                    </div>
                )}
            </div>
            <span className={cn(
                "mt-3 text-[10px] md:text-xs font-black uppercase tracking-tighter text-center max-w-[90px] leading-none transition-colors",
                active ? "text-primary opacity-100" : "text-black dark:text-white opacity-40"
            )}>
                {title}
            </span>
        </motion.div>
    );
};

const DecisionNode = ({ title, active }: { title: string; active: boolean }) => (
    <div className="py-6 flex flex-col items-center relative">
        <div className={cn(
            "w-14 h-14 md:w-16 md:h-16 rotate-45 border-4 border-black dark:border-white flex items-center justify-center transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_var(--primary)]",
            active ? "bg-accent-2" : "bg-white dark:bg-black"
        )}>
            <span className={cn(
                "-rotate-45 font-black text-[8px] md:text-[9px] text-center uppercase leading-none px-1 transition-colors",
                active ? "text-black" : "text-black dark:text-white"
            )}>
                {title}
            </span>
        </div>
    </div>
);

// --- Main Section ---

const FlowchartSection = () => {
    const [activeFlow, setActiveFlow] = useState(0);
    const [step, setStep] = useState(0);

    const flows = [
        {
            id: 0,
            title: "Automated Screening",
            description: "From 250+ applications to top 5 candidates in minutes.",
            icon: Zap,
            accent: "bg-accent-1",
            steps: [
                { icon: Check, title: "App Received", status: "LIVE" },
                { icon: Database, title: "AI Screening", status: "PROCESSING" },
                { icon: Mail, title: "Questionnaire", status: "QUEUED" },
                { type: "decision", title: "Passing Grade?" },
                { icon: Calendar, title: "Auto-Schedule", status: "SUCCESS" }
            ]
        },
        {
            id: 1,
            title: "Video Interviewing",
            description: "AI-driven assessment capturing nuanced behavioral signals.",
            icon: Video,
            accent: "bg-accent-2",
            steps: [
                { icon: Video, title: "AI Interview", status: "RECORDING" },
                { icon: Activity, title: "Sentiment Analysis", status: "ANALYZING" },
                { icon: ShieldCheck, title: "Soft Skill Scan", status: "VERIFYING" },
                { type: "decision", title: "Top Talent?" },
                { icon: UserCheck, title: "HM Review", status: "READY" }
            ]
        },
        {
            id: 2,
            title: "Smart Re-engagement",
            description: "Maintaining your talent pool as a living, breathing asset.",
            icon: RefreshCcw,
            accent: "bg-accent-3",
            steps: [
                { icon: RefreshCcw, title: "Talent Re-scan", status: "RETRIEVING" },
                { icon: Database, title: "Skill Matching", status: "MAPPING" },
                { icon: Mail, title: "AI Outreach", status: "SENDING" },
                { type: "decision", title: "Interest?" },
                { icon: Zap, title: "Fast-Track", status: "PRIORITY" }
            ]
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % (flows[activeFlow].steps.length + 1));
        }, 2500);
        return () => clearInterval(timer);
    }, [activeFlow]);

    useEffect(() => {
        setStep(0);
    }, [activeFlow]);

    return (
        <section id="automation" className="py-24 bg-background relative overflow-hidden border-y-8 border-black transition-colors">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ backgroundImage: "linear-gradient(90deg, #000 1px, transparent 1px), linear-gradient(#000 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Sidebar / Info Panel */}
                    <div className="lg:w-1/3 flex flex-col gap-8">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black font-black uppercase text-xs tracking-widest mb-6 border-2 border-black dark:border-white shadow-[4px_4px_0px_0px_var(--primary)]"
                            >
                                <Settings className="animate-spin-slow w-4 h-4" /> The Automation Engine
                            </motion.div>

                            <motion.h2
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-[0.9] text-black dark:text-white"
                            >
                                Workflows <br /><span className="text-primary italic">In Motion</span>
                            </motion.h2>
                            <p className="text-xl font-bold opacity-80 uppercase leading-tight text-black dark:text-white">
                                Every step of your hiring journey is powered by an autonomous nervous system.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4">
                            {flows.map((f, i) => (
                                <button
                                    key={f.id}
                                    onClick={() => setActiveFlow(i)}
                                    className={cn(
                                        "p-6 border-4 text-left transition-all relative overflow-hidden group border-black dark:border-white",
                                        activeFlow === i
                                            ? "bg-black dark:bg-white text-white dark:text-black translate-x-3 shadow-[0px_8px_20px_rgba(59,130,246,0.3)]"
                                            : "bg-white dark:bg-black text-black dark:text-white hover:translate-x-1"
                                    )}
                                >
                                    <div className="flex items-center justify-between relative z-10">
                                        <div className="flex items-center gap-4">
                                            <f.icon size={24} className={activeFlow === i ? "text-primary" : "opacity-40"} />
                                            <h3 className="text-xl font-black uppercase tracking-tight leading-none">{f.title}</h3>
                                        </div>
                                        <ArrowRight size={20} className={cn("transition-transform", activeFlow === i && "translate-x-2")} />
                                    </div>
                                    <p className={cn(
                                        "mt-3 text-xs font-bold leading-tight uppercase opacity-60 relative z-10",
                                        activeFlow === i && "opacity-80"
                                    )}>
                                        {f.description}
                                    </p>
                                    {activeFlow === i && (
                                        <motion.div layoutId="btn-active" className="absolute left-0 top-0 bottom-0 w-2 bg-primary z-20" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Simulation / Animation Panel */}
                    <div className="lg:w-2/3 w-full">
                        <div className="relative p-8 md:p-12 border-8 border-black dark:border-white bg-white dark:bg-black shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] dark:shadow-[16px_16px_0px_0px_var(--primary)] min-h-[600px] flex items-center justify-center overflow-hidden">
                            {/* Dashboard Elements */}
                            <div className="absolute top-6 left-6 flex items-center gap-2">
                                <Activity className="text-primary animate-pulse" size={16} />
                                <span className="text-[10px] font-black uppercase tracking-widest opacity-40 text-black dark:text-white">Workflow Simulation System v2.0</span>
                            </div>

                            <div className="absolute top-6 right-6 flex gap-1">
                                {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-black/10 dark:bg-white/10" />)}
                            </div>

                            <div className="absolute bottom-6 left-6 text-[10px] font-black uppercase tracking-widest text-black/40 dark:text-white/40 border-l-4 border-primary pl-4">
                                Status: <span className="text-primary">Operational</span> <br />
                                Pulse: <span className="text-primary">{(step === flows[activeFlow].steps.length) ? "COMPLETE" : "STEP " + (step + 1)}</span>
                            </div>

                            {/* The Live Flow */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeFlow}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.05 }}
                                    transition={{ duration: 0.4 }}
                                    className="flex flex-col items-center w-full"
                                >
                                    {flows[activeFlow].steps.map((item: any, idx) => {
                                        const isActive = step >= idx;
                                        const isCurrent = step === idx;
                                        const isDecision = item.type === "decision";

                                        return (
                                            <React.Fragment key={idx}>
                                                {isDecision ? (
                                                    <DecisionNode title={item.title} active={isActive} />
                                                ) : (
                                                    <WorkflowNode
                                                        icon={item.icon}
                                                        title={item.title}
                                                        status={item.status}
                                                        active={isActive}
                                                        color={idx === 4 ? "accent1" : "primary"}
                                                    />
                                                )}

                                                {idx < flows[activeFlow].steps.length - 1 && (
                                                    idx === 3 ? (
                                                        <div className="w-full flex justify-center -mt-4 mb-2">
                                                            <div className="w-[1px] md:w-[1.5px] h-12 bg-black/10 dark:bg-white/10 relative">
                                                                <motion.div
                                                                    initial={{ height: 0 }}
                                                                    animate={isActive ? { height: "100%" } : { height: 0 }}
                                                                    className="absolute top-0 left-0 w-full bg-primary"
                                                                />
                                                            </div>
                                                        </div>
                                                    ) : (
                                                        <AnimatedConnector active={isActive} />
                                                    )
                                                )}
                                            </React.Fragment>
                                        );
                                    })}
                                </motion.div>
                            </AnimatePresence>

                            {/* Overlay Cursor Interaction */}
                            <motion.div
                                animate={{
                                    x: [0, 100, -50, 0],
                                    y: [0, -50, 80, 0],
                                }}
                                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute pointer-events-none opacity-20"
                            >
                                <MousePointer2 className="text-primary fill-primary" size={32} />
                                <div className="ml-4 -mt-2 bg-black text-white text-[8px] px-2 py-1 font-black">AI_CORE_USER</div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Marquee decoration */}
            <div className="mt-20 border-t-4 border-black dark:border-white bg-black dark:bg-white py-3 overflow-hidden flex whitespace-nowrap">
                <motion.div
                    animate={{ x: [0, -1000] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="flex gap-20 items-center text-xs font-black uppercase tracking-[0.3em] text-white dark:text-black italic"
                >
                    {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex gap-20">
                            <span>Autonomous Recruitment System Active</span>
                            <span>Neural Node Processing</span>
                            <span>Pipeline Optimized</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default FlowchartSection;
