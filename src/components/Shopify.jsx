import { motion } from 'framer-motion';

export default function Shopify() {
    return (
        <section id="shopify-lp" className="shopify-section py-[120px] relative overflow-hidden bg-[var(--bg2)] border-t border-[var(--border)]">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--blue)]/10 blur-[100px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2"></div>

            <div className="wrap relative z-10">
                <div className="flex flex-col lg:flex-row gap-[80px] items-center">

                    {/* Text Content */}
                    <div className="flex-1">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 bg-[var(--blue)]/10 border border-[var(--blue2)]/30 text-[var(--blue2)] px-[14px] py-[6px] rounded-full text-[0.72rem] tracking-[0.08em] uppercase mb-[24px] font-['DM_Mono']"
                        >
                            E-commerce & DTC
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-['Syne'] text-[clamp(2.5rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-[var(--color-white)] mb-[24px]"
                        >
                            Landing Pages<br />para <span className="text-[var(--blue2)]">Shopify</span>.
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-[1rem] text-[var(--text2)] leading-[1.7] mb-[40px] max-w-[500px]"
                        >
                            Desarrollo <strong>páginas de aterrizaje de alto rendimiento</strong> integradas directamente en el ecosistema de Shopify.
                        </motion.p>

                        <motion.ul
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="list-none p-0 m-0 mb-[40px] flex flex-col gap-[16px]"
                        >
                            <li className="flex items-start gap-[12px]">
                                <span className="flex-shrink-0 w-[24px] h-[24px] rounded-full bg-[var(--bg3)] border border-[var(--border)] flex items-center justify-center text-[var(--blue3)] mt-[2px]">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                <span className="text-[0.95rem] text-[var(--text2)]">Estructura pensada para <strong className="text-[var(--color-white)] font-medium">optimización de tasa de conversión (CRO)</strong>.</span>
                            </li>
                            <li className="flex items-start gap-[12px]">
                                <span className="flex-shrink-0 w-[24px] h-[24px] rounded-full bg-[var(--bg3)] border border-[var(--border)] flex items-center justify-center text-[var(--blue3)] mt-[2px]">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                <span className="text-[0.95rem] text-[var(--text2)]">Experiencia <strong className="text-[var(--color-white)] font-medium">mobile-first</strong>, donde ocurre la mayoría del tráfico DTC.</span>
                            </li>
                            <li className="flex items-start gap-[12px]">
                                <span className="flex-shrink-0 w-[24px] h-[24px] rounded-full bg-[var(--bg3)] border border-[var(--border)] flex items-center justify-center text-[var(--blue3)] mt-[2px]">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                <span className="text-[0.95rem] text-[var(--text2)]">Liquid/HTML/CSS personalizados sin depender de apps pesadas.</span>
                            </li>
                        </motion.ul>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <a href="#contacto" className="inline-flex items-center gap-2 border border-[var(--border2)] text-[var(--color-white)] bg-[var(--bg)] px-[28px] py-[14px] rounded-[6px] font-['DM_Mono'] text-[0.82rem] uppercase tracking-[0.05em] transition-all duration-300 hover:bg-[var(--color-white)] hover:text-[var(--bg)] group">
                                Cotizar Landing Page
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="transition-transform group-hover:translate-x-1">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </motion.div>
                    </div>

                    {/* Visual Element */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full relative"
                    >
                        <div className="relative w-full aspect-[4/3] rounded-[16px] border border-[var(--border)] bg-[var(--bg)] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                            {/* Browser Header Mock */}
                            <div className="h-[40px] border-b border-[var(--border)] bg-[var(--bg3)] flex items-center px-[16px] gap-[6px]">
                                <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f56]"></div>
                                <div className="w-[10px] h-[10px] rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-[10px] h-[10px] rounded-full bg-[#27c93f]"></div>
                                <div className="mx-auto h-[24px] w-[60%] bg-[var(--bg)] border border-[var(--border)] rounded-[4px] flex items-center justify-center">
                                    <span className="text-[0.6rem] text-[var(--text3)] font-['DM_Mono'] flex items-center gap-2">
                                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                                        tu-tienda.myshopify.com
                                    </span>
                                </div>
                            </div>
                            {/* Content Mock */}
                            <div className="p-[20px] h-[calc(100%-40px)] overflow-hidden relative opacity-60">
                                <div className="w-1/2 h-[30px] bg-[var(--border)] rounded-[4px] mb-[30px]"></div>
                                <div className="flex gap-[20px] mb-[30px]">
                                    <div className="w-1/2 aspect-square bg-[var(--border)] rounded-[8px]"></div>
                                    <div className="w-1/2 flex flex-col gap-[12px]">
                                        <div className="w-[80%] h-[20px] bg-[var(--border)] rounded-[4px]"></div>
                                        <div className="w-[60%] h-[16px] bg-[var(--border)] rounded-[4px]"></div>
                                        <div className="w-full h-[48px] bg-[var(--blue)]/50 rounded-[6px] mt-auto"></div>
                                    </div>
                                </div>
                                <div className="w-full h-[60px] bg-[var(--border)] rounded-[8px]"></div>

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-transparent to-transparent"></div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -bottom-4 left-4 md:-bottom-[20px] md:-left-[20px] bg-[var(--bg2)] border border-[var(--border)] p-[16px] rounded-[12px] shadow-xl flex items-center gap-[12px] animate-[float_6s_ease-in-out_infinite] z-20">
                            <div className="w-[40px] h-[40px] rounded-full bg-[#95BF47]/20 flex items-center justify-center text-[#95BF47]">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19.1 11.2a2.3 2.3 0 0 0-1.8-1.5l-6-1a1.9 1.9 0 0 1-1.3-1c-.4-.7-.2-1.6.4-2.1.8-.6 1.8-.5 2.5 0 .4.2.7.7.9 1.1l2.3-.9A4.1 4.1 0 0 0 14.1 3a4 4 0 0 0-3.6.5 4 4 0 0 0-1.5 2.7l-4.2-1a2 2 0 0 0-2.3 2l.7 6.6c.1.9.9 1.6 1.8 1.4l5.2-.6c1.1-1.3 2.8-1.9 4.6-1.5l2.4.4a2.3 2.3 0 0 0 1.9-2.3zM5.3 12.5l-.6-5.4 3.7.8c0 1.9.8 3.5 1.9 4.7l-5 1zm13.1 8A4 4 0 0 1 14.8 24a4 4 0 0 1-3.6-.5 4 4 0 0 1-1.5-2.7l-4.2-1a2 2 0 0 1-2.3 2l.7 6.6c.1.9.9 1.6 1.8 1.4l5.2-.6c1-1.3 2.6-2 4.3-1.8L17 21c-1.3.1-2.3-.9-2.6-2.2z" /></svg>
                            </div>
                            <div>
                                <div className="text-[0.75rem] text-[var(--text3)] uppercase tracking-[0.05em] mb-[2px]">Conversion Rate</div>
                                <div className="font-['Syne'] text-[1.2rem] font-bold text-[var(--color-white)]">+42%</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            {/* Embedded styles for keyframes not supported directly by inline Tailwind easily */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(2deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
            `}} />
        </section>
    );
}
