import { motion } from 'framer-motion';
import { CardContainer, CardBody, CardItem } from './ui/3d-card';
import { ExternalLink } from 'lucide-react';

const projects = [
    {
        title: 'Facturas Arg',
        description: 'Plataforma integral de facturación con conexión a Mercado Pago, base de datos, validación por ARCA y control de accesos.',
        image: '/assets/projects/facturas.png',
        stack: ['React', 'JS (ES6+)', 'Vite', 'Netlify'],
        links: [
            { label: 'Ver Proyecto', url: 'https://facturasarg.netlify.app/' }
        ]
    },
    {
        title: 'Lumiere Fashion Boutique',
        description: 'E-commerce DTC de alto rendimiento (SPA). Catálogo responsivo y pasarela de pagos integrada para maximizar conversiones.',
        image: '/assets/projects/lumiere.png',
        stack: ['React', 'Vite', 'SQL', 'Netlify'],
        links: [
            { label: 'Ver Proyecto', url: 'https://lumiere-fashion-boutique-2026.netlify.app/' }
        ]
    },
    {
        title: 'Landing Pages Shopify (CRO)',
        description: 'Desarrollo y estructuración visual de páginas de aterrizaje optimizadas para conversión DTC de productos físicos.',
        image: '/assets/projects/shopify.png',
        stack: ['Shopify', 'HTML/CSS', 'JS'],
        links: [
            { label: 'Caso: MagicPro 2.0', url: 'https://orelvie.co/products/magicpro-2-0', isMobile: true },
            { label: 'Caso: Uro', url: 'https://orelvie.co/products/uro-supositorio-vaginal-de-acido-borico', isMobile: true }
        ]
    }
];

export default function Portfolio() {
    return (
        <section id="proyectos">
            <div className="wrap border-t border-[var(--border)] pt-[120px] pb-[80px]">
                <motion.p
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="section-label"
                >
                    // portfolio
                </motion.p>
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-[60px] gap-[20px]">
                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="section-title !mb-0"
                    >
                        Proyectos<span>.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-[var(--text2)] max-w-[400px] text-[0.9rem]"
                    >
                        Una selección de mis trabajos más recientes. E-commerce, web apps y sitios optimizados para conversión.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="h-full"
                        >
                            <CardContainer className="inter-var w-full h-full">
                                <CardBody className="project-card block bg-[var(--bg2)] border border-[var(--border)] rounded-[12px] overflow-hidden no-underline transition-all duration-300 hover:-translate-y-[8px] hover:border-[var(--border2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] h-auto min-h-full w-full group/card flex flex-col">
                                    <CardItem
                                        translateZ="100"
                                        className="w-full project-img-wrap h-[180px] md:h-[220px] overflow-hidden relative border-b border-[var(--border)] shrink-0"
                                    >
                                        <div className="absolute inset-0 bg-[var(--blue)]/20 z-10 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                                        <img
                                            src={project.image}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-[1.05]"
                                            alt={project.title}
                                        />
                                    </CardItem>

                                    <div className="project-info p-[16px] md:p-[24px] flex flex-col flex-1">
                                        <CardItem
                                            translateZ="50"
                                            className="font-['Syne'] text-[1.2rem] md:text-[1.4rem] font-bold text-[var(--color-white)] tracking-[-0.02em] mb-[8px] md:mb-[12px] transition-colors duration-200 group-hover/card:text-[var(--blue2)]"
                                        >
                                            {project.title}
                                        </CardItem>

                                        <CardItem
                                            as="p"
                                            translateZ="60"
                                            className="text-[0.85rem] md:text-[0.9rem] text-[var(--text2)] leading-[1.5] md:leading-[1.6] mb-[16px] md:mb-[20px] flex-1"
                                        >
                                            {project.description}
                                        </CardItem>

                                        <CardItem translateZ="40" className="flex flex-wrap gap-[6px] md:gap-[8px] mb-[20px] md:mb-[24px]">
                                            {project.stack.map(tech => (
                                                <span
                                                    key={tech}
                                                    className="inline-block px-[8px] py-[3px] md:px-[10px] md:py-[4px] bg-[var(--bg3)] border border-[var(--border)] text-[var(--text3)] text-[0.65rem] md:text-[0.7rem] font-['DM_Mono'] rounded-[4px] uppercase tracking-[0.05em]"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </CardItem>

                                        <div className="flex flex-col gap-2 mt-auto">
                                            {project.links.map(link => (
                                                <CardItem
                                                    key={link.label}
                                                    translateZ="30"
                                                    className="w-full"
                                                >
                                                    <a
                                                        href={link.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={(e) => {
                                                            if (link.isMobile && window.innerWidth > 768) {
                                                                e.preventDefault();
                                                                window.open(link.url, '_blank', 'width=375,height=812,scrollbars=yes,resizable=yes');
                                                            }
                                                        }}
                                                        className="flex items-center justify-between text-[0.8rem] md:text-[0.85rem] font-medium text-[var(--color-white)] no-underline group/link py-2 px-2 md:px-3 rounded-lg hover:bg-[var(--bg3)] transition-colors border-t border-transparent hover:border-[var(--border)] w-full"
                                                    >
                                                        <span className="flex flex-col">
                                                            <span>{link.label}</span>
                                                            {link.isMobile && <span className="text-[0.6rem] md:text-[0.65rem] text-[var(--blue3)] uppercase tracking-wider mt-0.5">Vista Móvil</span>}
                                                        </span>
                                                        <span className="w-[28px] h-[28px] md:w-[32px] md:h-[32px] shrink-0 rounded-full border border-[var(--border2)] flex items-center justify-center text-[var(--color-white)] transition-all duration-200 group-hover/link:bg-[var(--color-white)] group-hover/link:text-[var(--bg)] group-hover/link:-rotate-45 ml-2">
                                                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                                            </svg>
                                                        </span>
                                                    </a>
                                                </CardItem>
                                            ))}
                                        </div>
                                    </div>
                                </CardBody>
                            </CardContainer>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
