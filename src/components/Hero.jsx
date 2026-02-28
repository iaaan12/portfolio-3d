import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Typewriter } from './ui/typewriter';

export default function Hero() {
    return (
        <section className="hero min-h-screen flex items-center pt-[120px] pb-[80px] relative">
            <div className="hero-glow absolute w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)' }}></div>
            <div className="wrap">
                <div className="hero-content max-w-[760px]">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="hero-tag inline-flex items-center gap-2 bg-[rgba(37,99,235,0.1)] border border-[var(--border2)] text-[var(--blue3)] px-[14px] py-[6px] rounded-full text-[0.72rem] tracking-[0.08em] uppercase mb-[28px]"
                    >
                        <span className="w-[6px] h-[6px] bg-[var(--blue2)] rounded-full animate-[pulse_2s_infinite]"></span>
                        Disponible para proyectos
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-['Syne'] text-[clamp(3rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-[var(--color-white)] mb-[24px]"
                    >
                        Ian<br />
                        <span className="accent text-[var(--blue2)]">Gianera</span><br />
                        <span className="line2 block text-[transparent] drop-shadow-sm" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)' }}>
                            <Typewriter
                                text={[
                                    "Fullstack Dev.",
                                    "Frontend Dev.",
                                    "Backend Dev."
                                ]}
                                speed={70}
                                waitTime={2500}
                                deleteSpeed={40}
                                cursorChar={"_"}
                                showCursor={true}
                            />
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hero-desc text-[1rem] text-[var(--text2)] leading-[1.7] max-w-[520px] mb-[40px]"
                    >
                        Desarrollo productos digitales con <strong className="text-[var(--blue3)] font-medium">React, JavaScript ES6+</strong> y enfoque en experiencia de usuario. Especializado en e-commerce, sistemas de gestión y landing pages de alto rendimiento.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="hero-actions flex gap-[16px] flex-wrap"
                    >
                        <a href="#proyectos" className="btn-primary inline-flex items-center gap-2 bg-[var(--blue)] text-[var(--color-white)] px-[28px] py-[14px] rounded-[6px] font-['DM_Mono'] text-[0.82rem] no-underline tracking-[0.05em] transition-all duration-200 shadow-[0_0_30px_rgba(37,99,235,0.3)] hover:bg-[var(--blue2)] hover:-translate-y-[2px] hover:shadow-[0_0_50px_rgba(37,99,235,0.5)]">
                            Ver proyectos
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                        <a href="https://api.whatsapp.com/send/?phone=5493876333305&text=Hola+Ian%21+Vi+tu+portfolio+y+me+gustar%C3%ADa+hablar+contigo+sobre+un+proyecto.&type=phone_number&app_absent=0" target="_blank" rel="noreferrer" className="btn-secondary inline-flex items-center gap-2 border border-[var(--border2)] text-[var(--text2)] px-[28px] py-[14px] rounded-[6px] font-['DM_Mono'] text-[0.82rem] no-underline tracking-[0.05em] transition-all duration-200 hover:border-[var(--blue3)] hover:text-[var(--color-white)] hover:-translate-y-[2px]">
                            Contactar
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                        </a>
                    </motion.div>
                </div>
            </div>

            <div className="hero-scroll absolute bottom-[40px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-[8px] color-[var(--text3)] text-[0.65rem] tracking-[0.15em] uppercase text-[var(--text3)]">
                scroll
                <div className="scroll-line w-[1px] h-[40px] bg-gradient-to-b from-[var(--blue2)] to-transparent origin-top animate-[scrolldown_2s_infinite]"></div>
            </div>
            {/* Embedded styles for keyframes not supported directly by inline Tailwind easily */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scrolldown {
                    0% { transform: scaleY(0); transform-origin: top; }
                    50% { transform: scaleY(1); transform-origin: top; }
                    51% { transform: scaleY(1); transform-origin: bottom; }
                    100% { transform: scaleY(0); transform-origin: bottom; }
                }
            `}} />
        </section>
    );
}
