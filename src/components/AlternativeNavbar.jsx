"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function AlternativeNavbar({ className }) {
    const [active, setActive] = useState(null);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Helper map to properly link items to section IDs
    const sectionIds = {
        "Sobre Mi": "sobre-mi",
        "Proyectos": "proyectos",
        "Shopify": "shopify-lp",
        "Contacto": "contacto"
    };

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`fixed top-0 inset-x-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
                ? "py-4 bg-[rgba(8,12,20,0.85)] backdrop-blur-xl border-b border-[var(--border)] shadow-[0_10px_30px_rgba(0,0,0,0.3)]"
                : "py-8 bg-transparent border-b border-transparent shadow-none"
                } ${className || ''}`}
        >
            <div className="wrap flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="relative group z-50 text-[var(--color-white)] font-['Syne'] font-extrabold text-[1.2rem] tracking-[-0.03em] flex items-center gap-[8px]">
                    <div className="w-[8px] h-[8px] bg-[var(--blue2)] rounded-full"></div>
                    I<span className="text-[var(--text2)] group-hover:text-[var(--blue2)] transition-colors duration-300">G</span>.
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <Menu setActive={setActive}>
                        {Object.keys(sectionIds).map((item) => (
                            <a key={item} href={`#${sectionIds[item]}`}>
                                <MenuItem setActive={setActive} active={active} item={item} />
                            </a>
                        ))}
                    </Menu>
                </div>

                {/* Call to Action */}
                <a href="#contacto" className="hidden md:flex relative group items-center justify-center bg-[var(--blue)] text-[var(--color-white)] px-[24px] py-[12px] rounded-full font-sans text-[0.8rem] uppercase tracking-[0.05em] font-medium transition-all duration-300 hover:bg-[var(--blue2)] overflow-hidden">
                    <span className="relative z-10 hidden lg:inline">Iniciar Proyecto</span>
                    <span className="relative z-10 lg:hidden">Contacto</span>
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-[var(--color-white)] z-50 relative w-10 h-10 flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <div className="w-6 h-5 flex flex-col justify-between relative">
                        <span className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
                        <span className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-full h-[2px] bg-white rounded-full transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-full left-0 w-full bg-[var(--bg2)]/95 backdrop-blur-xl border-b border-[var(--border)] py-6 px-8 flex flex-col gap-6 shadow-2xl"
                    >
                        {Object.keys(sectionIds).map((item, i) => (
                            <motion.a
                                key={item}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                href={`#${sectionIds[item]}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-['Syne'] text-xl font-bold text-[var(--color-white)] hover:text-[var(--blue2)] transition-colors border-b border-[var(--border)] pb-4"
                            >
                                {item}
                            </motion.a>
                        ))}
                        <motion.a
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            href="#contacto"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-4 flex items-center justify-center bg-[var(--blue)] text-[var(--color-white)] px-[24px] py-[14px] rounded-xl font-sans text-[0.85rem] uppercase tracking-[0.05em] font-bold transition-all duration-300 hover:bg-[var(--blue2)]"
                        >
                            Iniciar Proyecto
                        </motion.a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
