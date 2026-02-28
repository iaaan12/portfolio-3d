import { motion } from 'framer-motion';
import { PinContainer } from './ui/3d-pin';
import OrbitingSkills from './ui/orbiting-skills';

export default function About() {
    return (
        <section id="sobre-mi">
            <div className="wrap border-t border-[var(--border)] pt-24 -mt-24">
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-label"
                >
                    // sobre mí
                </motion.p>

                <motion.h2
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="section-title"
                >
                    Quién soy<span>.</span>
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[60px] items-start">
                    {/* Text Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="about-text"
                    >
                        <p className="text-[var(--text2)] leading-[1.8] mb-[20px] text-[0.9rem]">
                            Soy <strong className="text-[var(--blue3)] font-medium">Ian Gianera</strong>, desarrollador fullstack con base en Argentina. Me especializo en construir productos digitales que combinan buen diseño con código sólido y escalable.
                        </p>
                        <p className="text-[var(--text2)] leading-[1.8] mb-[20px] text-[0.9rem]">
                            Tengo conocimientos en <strong className="text-[var(--blue3)] font-medium">CRO y DTC</strong>, lo que me permite entender no solo el lado técnico sino también el impacto que el producto tiene en el negocio.
                        </p>
                        <p className="text-[var(--text2)] leading-[1.8] mb-[20px] text-[0.9rem]">
                            Me interesa construir cosas que funcionen bien, se vean bien y sean fáciles de usar. Desde sistemas internos hasta tiendas online con pasarela de pagos.
                        </p>

                        <div className="mt-12 flex justify-center lg:justify-start w-full relative min-h-[450px] md:min-h-[600px]">
                            {/* Injecting our animated React component instead of static tags */}
                            <div className="flex items-center justify-center w-full">
                                <OrbitingSkills />
                            </div>
                        </div>
                    </motion.div>

                    {/* Stats and 3D Pin Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col gap-12"
                    >
                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-[20px]">
                            <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[8px] p-[24px] transition-all duration-200 hover:border-[var(--border2)] hover:-translate-y-[4px]">
                                <div className="font-['Syne'] text-[2.5rem] font-extrabold text-[var(--color-white)] tracking-[-0.04em] leading-none mb-[4px]">
                                    3<span className="text-[var(--blue2)]">+</span>
                                </div>
                                <div className="text-[0.72rem] color-[var(--text3)] tracking-[0.05em] uppercase text-[var(--text3)]">Proyectos publicados</div>
                            </div>
                            <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[8px] p-[24px] transition-all duration-200 hover:border-[var(--border2)] hover:-translate-y-[4px]">
                                <div className="font-['Syne'] text-[2.5rem] font-extrabold text-[var(--color-white)] tracking-[-0.04em] leading-none mb-[4px]">
                                    2<span className="text-[var(--blue2)]">+</span>
                                </div>
                                <div className="text-[0.72rem] color-[var(--text3)] tracking-[0.05em] uppercase text-[var(--text3)]">Años de experiencia</div>
                            </div>
                            <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[8px] p-[24px] transition-all duration-200 hover:border-[var(--border2)] hover:-translate-y-[4px]">
                                <div className="font-['Syne'] text-[2.5rem] font-extrabold text-[var(--color-white)] tracking-[-0.04em] leading-none mb-[4px]">
                                    100<span className="text-[var(--blue2)]">%</span>
                                </div>
                                <div className="text-[0.72rem] color-[var(--text3)] tracking-[0.05em] uppercase text-[var(--text3)]">Enfoque fullstack</div>
                            </div>
                            <div className="bg-[var(--bg2)] border border-[var(--border)] rounded-[8px] p-[24px] transition-all duration-200 hover:border-[var(--border2)] hover:-translate-y-[4px]">
                                <div className="font-['Syne'] text-[2.5rem] font-extrabold text-[var(--color-white)] tracking-[-0.04em] leading-none mb-[4px]">
                                    ∞
                                </div>
                                <div className="text-[0.72rem] color-[var(--text3)] tracking-[0.05em] uppercase text-[var(--text3)]">Ganas de construir</div>
                            </div>
                        </div>

                        {/* Preserved 3D Pin Animation */}
                        <div className="flex w-full relative items-center justify-center min-h-[400px]">
                            <PinContainer title="Optimizar Conversión" href="#portfolio">
                                <div className="aspect-square w-64 md:w-80 glass-card rounded-3xl p-8 relative overflow-hidden group border border-[var(--border)] bg-[rgba(8,12,20,0.5)]">
                                    <div className="absolute inset-0 bg-gradient-to-tr from-[var(--blue2)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="h-full w-full rounded-2xl border border-[var(--border2)] bg-[var(--bg2)]/90 flex flex-col justify-center items-center gap-4 relative z-10">
                                        <div className="w-16 h-16 rounded-xl bg-[var(--bg3)] border border-[var(--border)] flex items-center justify-center rotate-3 hover:rotate-6 transition-transform">
                                            <span className="text-3xl">💻</span>
                                        </div>
                                        <div className="w-16 h-16 rounded-xl bg-[var(--bg3)] border border-[var(--border)] flex items-center justify-center -rotate-6 hover:-rotate-12 transition-transform shadow-xl absolute -bottom-6 -right-4 blur-[2px]">
                                            <span className="text-3xl">📈</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-[var(--color-white)] mt-4 font-['Syne']">UI/UX & CRO</h3>
                                        <p className="text-sm text-[var(--text2)] text-center px-6">Optimizando la intersección entre diseño y conversión</p>
                                    </div>
                                </div>
                            </PinContainer>
                        </div>

                    </motion.div>
                </div>
            </div>
        </section>
    );
}
