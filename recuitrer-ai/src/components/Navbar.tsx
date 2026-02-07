"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Rocket, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        if (savedTheme) {
            setTheme(savedTheme);
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
                document.documentElement.classList.remove('light');
            } else {
                document.documentElement.classList.add('light');
                document.documentElement.classList.remove('dark');
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleTheme = () => {
        if (!mounted) return;

        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);

        if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }

        localStorage.setItem("theme", newTheme);
    };

    const navLinks = [
        { name: "Features", href: "#features" },
        { name: "Automation", href: "#automation" },
        { name: "Impact", href: "#impact" },
        { name: "FAQ", href: "#faq" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-6 py-4 md:py-5",
                isScrolled
                    ? "bg-white/90 dark:bg-black/90 backdrop-blur-md border-b-4 border-black dark:border-white shadow-[0px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[0px_4px_0px_0px_var(--primary)]"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 md:gap-3 group">
                    <div className="bg-primary p-1.5 md:p-2 border-2 md:border-3 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_var(--primary)] text-white group-hover:translate-x-[2px] group-hover:translate-y-[2px] group-hover:shadow-none transition-all">
                        <Rocket size={18} className="md:w-6 md:h-6" strokeWidth={3} />
                    </div>
                    <span className="text-lg md:text-2xl font-black tracking-tighter uppercase italic text-black dark:text-white">RecruiterAI</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6 lg:gap-10">
                    <div className="flex items-center gap-4 lg:gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-xs lg:text-sm font-black uppercase tracking-widest text-black dark:text-white hover:text-primary transition-colors underline decoration-2 underline-offset-4 decoration-transparent hover:decoration-primary"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex items-center gap-4 lg:gap-6 border-l-4 border-black dark:border-white pl-6 lg:pl-10">
                        <button
                            onClick={toggleTheme}
                            className="p-2 border-3 border-black dark:border-white shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] dark:shadow-[3px_3px_0px_0px_var(--primary)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all bg-white dark:bg-black text-black dark:text-white cursor-pointer"
                        >
                            {!mounted ? (
                                <div className="w-[18px] h-[18px]" />
                            ) : theme === "light" ? (
                                <Moon size={18} strokeWidth={3} />
                            ) : (
                                <Sun size={18} strokeWidth={3} />
                            )}
                        </button>
                        <Link
                            href="#login"
                            className="text-xs lg:text-sm font-black uppercase tracking-widest text-black dark:text-white hover:text-primary transition-colors"
                        >
                            Sign In
                        </Link>
                        <Link
                            href="#signup"
                            className="bg-accent-1 text-black px-4 lg:px-6 py-2 md:py-3 border-3 border-black dark:border-white font-black text-xs lg:text-sm uppercase tracking-tighter shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:shadow-[4px_4px_0px_0px_var(--primary)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                        >
                            Join Now
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-2 md:hidden">
                    <button
                        onClick={toggleTheme}
                        className="p-1.5 border-2 border-black dark:border-white bg-white dark:bg-black text-black dark:text-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_var(--primary)] cursor-pointer"
                    >
                        {!mounted ? (
                            <div className="w-[18px] h-[18px]" />
                        ) : theme === "light" ? (
                            <Moon size={18} strokeWidth={3} />
                        ) : (
                            <Sun size={18} strokeWidth={3} />
                        )}
                    </button>
                    <button
                        className="text-black dark:text-white border-2 border-black dark:border-white p-1.5 bg-white dark:bg-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_var(--primary)] active:shadow-none active:translate-x-1 active:translate-y-1 transition-all cursor-pointer"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={20} strokeWidth={3} /> : <Menu size={20} strokeWidth={3} />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[-1] md:hidden"
                        />
                        <motion.div
                            initial={{ opacity: 0, y: -20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            className="md:hidden absolute top-full left-4 right-4 mt-4 bg-white dark:bg-black border-4 border-black dark:border-white p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_var(--primary)] z-50 rounded-xl"
                        >
                            <div className="flex flex-col gap-4 text-center">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-xl font-black uppercase tracking-tighter border-b-2 border-black/10 dark:border-white/10 pb-2 text-black dark:text-white hover:text-primary transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="flex flex-col gap-4 mt-2">
                                    <Link
                                        href="#login"
                                        className="text-lg font-black uppercase tracking-tighter text-black dark:text-white hover:text-primary transition-colors"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Sign In
                                    </Link>
                                    <Link
                                        href="#signup"
                                        className="bg-primary text-white p-4 border-4 border-black dark:border-white text-center font-black text-lg uppercase tracking-tighter shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_0px_var(--primary)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Start Free Trial
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;

