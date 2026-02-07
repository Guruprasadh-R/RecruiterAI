"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Search, Globe, Briefcase, ChevronRight, Zap, Target, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const platforms = [
    { name: "LinkedIn", icon: Linkedin, color: "bg-[#0A66C2]" },
    { name: "Naukri.com", icon: Search, color: "bg-[#0047AB]" },
    { name: "Indeed", icon: Globe, color: "bg-[#2164f3]" },
    { name: "Glassdoor", icon: Briefcase, color: "bg-[#0caa41]" },
    { name: "Monster", icon: Zap, color: "bg-[#6e41e2]" },
    { name: "Angellist", icon: Target, color: "bg-black" },
    { name: "Jooble", icon: Briefcase, color: "bg-[#ff5c3e]" },
    { name: "Hired", icon: Rocket, color: "bg-[#2c3e50]" },
];

const LogoSlider = () => {
    // Duplicate logos for seamless infinite scroll
    const extendedPlatforms = [...platforms, ...platforms, ...platforms];

    return (
        <section className="py-20 bg-accent-2 relative overflow-hidden transition-colors">
            {/* Elegant Background Enhancements */}
            <div className="absolute inset-0 z-0">
                {/* Dynamic Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.07]"
                    style={{ backgroundImage: "radial-gradient(#000 1.5px, transparent 1.5px)", backgroundSize: "24px 24px" }} />

                {/* Fluid Mesh Gradient Overlays */}
                <div className="absolute -top-[20%] -left-[10%] w-[60%] h-[140%] bg-[radial-gradient(circle_at_center,_var(--accent-1),_transparent_70%)] opacity-30 blur-[100px]" />
                <div className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[140%] bg-[radial-gradient(circle_at_center,_var(--accent-3),_transparent_70%)] opacity-30 blur-[100px]" />

                {/* Floating "Data Nodes" */}
                <motion.div
                    animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 5, repeat: Infinity }}
                    className="absolute top-1/4 left-10 w-24 h-24 border-2 border-black/10 rounded-full flex items-center justify-center p-2 rotate-12"
                >
                    <div className="w-full h-full border border-black/5 rounded-full animate-spin-slow" />
                </motion.div>

                <motion.div
                    animate={{ y: [0, 20, 0], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 7, repeat: Infinity }}
                    className="absolute bottom-1/4 right-20 w-32 h-32 border-4 border-black/5 rounded-none flex items-center justify-center -rotate-12"
                >
                    <span className="text-[10px] font-black uppercase tracking-widest text-black/10">Global_Sync</span>
                </motion.div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mb-12 text-center relative z-10 text-black">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest mb-6"
                >
                    <Globe size={12} className="text-primary" /> Multi-Platform Distribution
                </motion.div>

                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl md:text-6xl font-black mb-4 uppercase tracking-tighter leading-none"
                >
                    Reach <span className="text-white italic outline-text-black">Every</span> Talent Pool
                </motion.h2>

                <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg font-bold uppercase tracking-tight opacity-70 max-w-xl mx-auto leading-tight"
                >
                    Your postings automatically sync across 50+ major platforms.
                </motion.p>
            </div>

            {/* Clean aesthetic slider */}
            <div className="relative z-10 py-10 bg-black/5 backdrop-blur-sm border-y-4 border-black/10 overflow-hidden group">
                <div className="animate-scroll flex whitespace-nowrap">
                    {extendedPlatforms.map((platform, idx) => (
                        <div key={idx} className="flex items-center gap-4 mx-8 group/item">
                            <div className={cn(
                                "w-12 h-12 md:w-14 md:h-14 border-3 border-black flex items-center justify-center transition-all group-hover/item:scale-110 group-hover/item:-rotate-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
                                platform.color
                            )}>
                                <platform.icon size={24} className="text-white" strokeWidth={3} />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-sm font-black uppercase tracking-tighter text-black">{platform.name}</span>
                                <div className="flex items-center gap-1">
                                    <span className="text-[8px] font-bold text-black/40 uppercase">Connected</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Accent */}
            <div className="relative h-12 flex items-center justify-center mt-4">
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
                    <span>Active Integration Network</span>
                    <ChevronRight size={10} strokeWidth={4} />
                    <ChevronRight size={10} strokeWidth={4} />
                    <ChevronRight size={10} strokeWidth={4} />
                </div>
            </div>
        </section>
    );
};

export default LogoSlider;
