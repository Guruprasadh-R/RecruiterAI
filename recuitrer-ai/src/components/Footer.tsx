"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Twitter, Linkedin, Rocket } from "lucide-react";
import Link from "next/link";

const FinalCTA = () => {
    return (
        <section className="py-20 md:py-24 px-4 md:px-6 relative overflow-hidden bg-white dark:bg-black border-y-8 border-black dark:border-white transition-colors">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-1 dark:bg-[#1e293b] -skew-x-12 translate-x-1/2 border-l-8 border-black dark:border-white -z-0" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-accent-2 dark:bg-[#1e1b4b] skew-x-12 -translate-x-1/4 border-r-8 border-black dark:border-white -z-0" />

            <div className="max-w-4xl mx-auto text-center relative z-10 text-black dark:text-white">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <h2 className="text-4xl sm:text-5xl md:text-8xl font-black mb-6 md:mb-8 uppercase tracking-tighter leading-[1] md:leading-none">
                        Ready to Hire <br className="hidden sm:block" />
                        <span className="bg-primary px-3 md:px-4 text-white border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_var(--primary)] md:dark:shadow-[8px_8px_0px_0px_var(--primary)]">Smarter?</span>
                    </h2>
                    <p className="text-xl md:text-3xl font-bold mb-10 md:mb-12 uppercase tracking-tight opacity-80 px-4">
                        Join 500+ teams winning the talent war with AI.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-8 px-4">
                        <motion.button
                            whileHover={{ scale: 1.05, translateZ: 10 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto bg-black dark:bg-white text-white dark:text-black px-8 md:px-12 py-4 md:py-6 rounded-none font-black text-xl md:text-2xl border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_var(--primary)] md:dark:shadow-[8px_8px_0px_0px_var(--primary)] hover:shadow-none transition-all flex items-center justify-center gap-3 uppercase tracking-tighter cursor-pointer"
                        >
                            Get Started
                            <ArrowRight size={24} className="md:w-7 md:h-7" strokeWidth={3} />
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto bg-white dark:bg-black text-black dark:text-white px-8 md:px-12 py-4 md:py-6 rounded-none font-black text-xl md:text-2xl border-4 border-black dark:border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_var(--primary)] md:dark:shadow-[8px_8px_0px_0px_var(--primary)] flex items-center justify-center gap-3 uppercase tracking-tighter cursor-pointer"
                        >
                            See Pricing
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-black pt-20 md:pt-24 pb-12 px-4 md:px-6 border-t-8 border-black dark:border-white transition-colors">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 md:gap-16 mb-16 md:mb-20">
                    <div className="col-span-1 sm:col-span-2 md:col-span-1">
                        <Link href="/" className="flex items-center gap-3 mb-6 md:mb-8 text-black dark:text-white">
                            <div className="bg-primary p-2 border-3 border-black dark:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_var(--primary)] text-white">
                                <Rocket size={24} strokeWidth={3} />
                            </div>
                            <span className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic">RecruiterAI</span>
                        </Link>
                        <p className="text-base md:text-lg font-bold text-black/70 dark:text-white/70 mb-8 leading-tight uppercase">
                            Automating the entire hiring workflow with AI. Built for founders.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-12 h-12 bg-accent-1 dark:bg-black border-3 border-black dark:border-white flex items-center justify-center text-black dark:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_var(--primary)] hover:bg-primary transition-colors hover:text-white"><Twitter size={24} strokeWidth={3} /></a>
                            <a href="#" className="w-12 h-12 bg-accent-2 dark:bg-black border-3 border-black dark:border-white flex items-center justify-center text-black dark:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_var(--primary)] hover:bg-primary transition-colors hover:text-white"><Linkedin size={24} strokeWidth={3} /></a>
                            <a href="#" className="w-12 h-12 bg-accent-3 dark:bg-black border-3 border-black dark:border-white flex items-center justify-center text-black dark:text-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_var(--primary)] hover:bg-primary transition-colors hover:text-white"><Github size={24} strokeWidth={3} /></a>
                        </div>
                    </div>

                    <div className="sm:pl-4 md:pl-0">
                        <h4 className="font-black mb-6 md:mb-8 uppercase text-xs md:text-sm tracking-[0.2em] text-black dark:text-white">Product</h4>
                        <ul className="space-y-3 md:space-y-4 text-black dark:text-white/70 font-bold uppercase text-xs md:text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-primary">Features</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-primary">Pricing</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-primary">Integrations</Link></li>
                        </ul>
                    </div>

                    <div className="sm:pl-4 md:pl-0">
                        <h4 className="font-black mb-6 md:mb-8 uppercase text-xs md:text-sm tracking-[0.2em] text-black dark:text-white">Resources</h4>
                        <ul className="space-y-3 md:space-y-4 text-black dark:text-white/70 font-bold uppercase text-xs md:text-sm">
                            <li><Link href="#" className="hover:text-primary transition-colors underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-primary">Documentation</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-primary">Help Center</Link></li>
                            <li><Link href="#" className="hover:text-primary transition-colors underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-primary">Community</Link></li>
                        </ul>
                    </div>

                    <div className="col-span-1 sm:col-span-2 md:col-span-1">
                        <h4 className="font-black mb-6 md:mb-8 uppercase text-xs md:text-sm tracking-[0.2em] text-black dark:text-white">Newsletter</h4>
                        <p className="text-xs md:text-sm font-bold text-black/60 dark:text-white/60 mb-6 uppercase">Get the latest hiring tips.</p>
                        <div className="flex flex-col gap-3">
                            <input
                                type="email"
                                placeholder="YOUR@EMAIL.COM"
                                className="bg-white dark:bg-black border-3 border-black dark:border-white px-4 py-3 w-full font-black text-xs md:text-sm uppercase outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:focus:shadow-[4px_4px_0px_0px_var(--primary)] transition-all text-black dark:text-white"
                            />
                            <button className="bg-primary text-white p-3 border-3 border-black dark:border-white font-black uppercase text-xs md:text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_var(--primary)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all flex items-center justify-center gap-2 cursor-pointer">
                                Subscribe
                                <Mail size={18} strokeWidth={3} />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="pt-10 md:pt-12 border-t-4 border-black dark:border-white flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                    <div className="flex gap-6 md:gap-10 text-[10px] md:text-sm font-black uppercase tracking-widest text-black/50 dark:text-white/30">
                        <Link href="#" className="hover:text-black dark:hover:text-white hover:underline decoration-2">Privacy</Link>
                        <Link href="#" className="hover:text-black dark:hover:text-white hover:underline decoration-2">Terms</Link>
                        <Link href="#" className="hover:text-black dark:hover:text-white hover:underline decoration-2">Cookies</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export { FinalCTA, Footer };

