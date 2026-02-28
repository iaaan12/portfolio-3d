import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function WelcomeScreen({ onSelect }) {
    return (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-[var(--bg)]">
            <div className="min-h-[100dvh] w-full flex flex-col pt-8 pb-12 px-4 md:px-6">
                {/* Ambient Background Elements */}
                <div className="fixed inset-0 z-0 opacity-40 mix-blend-screen pointer-events-none overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 min-w-[300px] min-h-[300px] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-[var(--blue)]/20 rounded-full blur-[80px] md:blur-[100px] animate-pulse-slow"></div>
                    <div className="absolute bottom-1/4 right-1/4 min-w-[250px] min-h-[250px] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-[var(--blue2)]/20 rounded-full blur-[80px] md:blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
                </div>

                <div className="relative z-10 w-full max-w-6xl mx-auto my-auto flex flex-col justify-center py-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h1 className="font-['Syne'] font-extrabold text-4xl md:text-6xl text-[var(--color-white)] tracking-tight mb-4">
                            Elige tu Experiencia
                        </h1>
                        <p className="font-sans text-[var(--text2)] text-lg max-w-2xl mx-auto">
                            Selecciona cómo prefieres explorar mi trabajo profesional y mi mundo interactivo.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
                        {/* Option 1: Full Portfolio */}
                        <motion.button
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            onClick={() => onSelect('portfolio')}
                            className="group relative flex flex-col items-center justify-center p-8 md:p-14 bg-[var(--bg2)]/50 backdrop-blur-md border border-[var(--border)] rounded-2xl md:rounded-3xl hover:border-[var(--blue)] transition-all duration-500 overflow-hidden text-left sm:text-center w-full min-h-[260px] md:min-h-[300px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-[var(--blue)]/5 to-[var(--blue2)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-[var(--blue)]/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <svg className="w-8 h-8 md:w-10 md:h-10 text-[var(--blue)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <h2 className="font-['Syne'] font-bold text-2xl md:text-3xl text-[var(--color-white)] mb-3">
                                    Profesional
                                </h2>
                                <p className="font-sans text-[var(--text2)] text-sm md:text-base mb-8">
                                    Diseño ui/ux, frontend y casos de estudio. La experiencia tradicional y limpia.
                                </p>
                                <span className="inline-flex items-center gap-2 font-sans text-[0.85rem] font-bold uppercase tracking-wider text-[var(--blue)] group-hover:text-[var(--blue2)] transition-colors">
                                    Explorar Portafolio
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </div>
                        </motion.button>

                        {/* Option 2: RPG Game */}
                        <motion.button
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            onClick={() => onSelect('rpg')}
                            className="group relative flex flex-col items-center justify-center p-8 md:p-14 bg-[var(--bg2)]/50 backdrop-blur-md border border-[var(--border)] rounded-2xl md:rounded-3xl hover:border-green-500/50 transition-all duration-500 overflow-hidden text-left sm:text-center w-full min-h-[260px] md:min-h-[300px]"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="relative z-10 flex flex-col items-center">
                                <div className="w-16 h-16 md:w-20 md:h-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                                    <svg className="w-8 h-8 md:w-10 md:h-10 text-green-400 font-pixel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h2 className="font-['Syne'] font-bold text-2xl md:text-3xl text-[var(--color-white)] mb-3">
                                    Modo RPG
                                </h2>
                                <p className="font-sans text-[var(--text2)] text-sm md:text-base mb-8">
                                    Explora mi mundo interactivo al estilo 8-bits. ¡Encuentra los huevos de pascua!
                                </p>
                                <span className="inline-flex items-center gap-2 font-sans text-[0.85rem] font-bold uppercase tracking-wider text-green-400 group-hover:text-green-300 transition-colors">
                                    Presiona Start
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </div>
                        </motion.button>
                    </div>
                </div>
            </div>
        </div>
    );
}
