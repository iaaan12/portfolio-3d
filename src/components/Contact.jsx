import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
    const [errorMessage, setErrorMessage] = useState(''); // Estado para guardar el mensaje de error específico

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);
        setErrorMessage('');

        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok) {
                setSubmitStatus('success');
                e.target.reset();
            } else {
                setSubmitStatus('error');
                // Mostrar el error devuelto por la API (ej: validator o rate limit)
                setErrorMessage(result.error || 'Hubo un problema. Por favor intenta de nuevo.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            setSubmitStatus('error');
            setErrorMessage('Error de red. Verifica tu conexión.');
        } finally {
            setIsSubmitting(false);

            // Clear status after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
                setErrorMessage('');
            }, 6000);
        }
    };

    return (
        <section id="contacto" className="relative overflow-hidden bg-[var(--bg)] border-t border-[var(--border)] pt-[140px] pb-[80px]">
            {/* Background Texture/Text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[60%] w-[120%] text-[clamp(10rem,25vw,30rem)] font-['Syne'] font-extrabold text-[var(--bg2)] whitespace-nowrap opacity-50 pointer-events-none text-center leading-none select-none z-0">
                LET'S TALK
            </div>

            <div className="wrap relative z-10">
                <div className="max-w-[800px] mx-auto bg-[rgba(8,12,20,0.4)] backdrop-blur-[12px] border border-[var(--border)] rounded-[24px] p-[clamp(24px,5vw,60px)] shadow-[0_30px_60px_rgba(0,0,0,0.5)]">
                    <div className="text-center mb-[40px]">
                        <motion.h2
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="font-['Syne'] text-[clamp(2.5rem,5vw,3.5rem)] font-extrabold text-[var(--color-white)] tracking-[-0.03em] mb-[16px] leading-[1.1]"
                        >
                            Iniciemos un <span className="text-[var(--blue2)]">proyecto</span>.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-[1rem] text-[var(--text2)] leading-[1.6] max-w-[500px] mx-auto"
                        >
                            ¿Tienes una idea en mente o necesitas escalar tu plataforma actual? Hablemos de cómo puedo ayudarte.
                        </motion.p>
                    </div>

                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-[20px]"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
                            <div className="flex flex-col gap-[8px]">
                                <label htmlFor="name" className="text-[0.8rem] font-medium text-[var(--text2)] font-['DM_Mono'] uppercase tracking-[0.05em] ml-[4px]">Nombre</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full bg-[var(--bg3)] border border-[var(--border)] text-[var(--color-white)] text-[0.95rem] rounded-[8px] px-[20px] py-[16px] transition-all duration-300 focus:outline-none focus:border-[var(--blue2)] focus:bg-[rgba(37,99,235,0.05)] placeholder:text-[var(--text3)]"
                                    placeholder="Tu nombre"
                                />
                            </div>
                            <div className="flex flex-col gap-[8px]">
                                <label htmlFor="email" className="text-[0.8rem] font-medium text-[var(--text2)] font-['DM_Mono'] uppercase tracking-[0.05em] ml-[4px]">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full bg-[var(--bg3)] border border-[var(--border)] text-[var(--color-white)] text-[0.95rem] rounded-[8px] px-[20px] py-[16px] transition-all duration-300 focus:outline-none focus:border-[var(--blue2)] focus:bg-[rgba(37,99,235,0.05)] placeholder:text-[var(--text3)]"
                                    placeholder="tu@email.com"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col gap-[8px]">
                            <label htmlFor="message" className="text-[0.8rem] font-medium text-[var(--text2)] font-['DM_Mono'] uppercase tracking-[0.05em] ml-[4px]">Mensaje</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="w-full bg-[var(--bg3)] border border-[var(--border)] text-[var(--color-white)] text-[0.95rem] rounded-[8px] px-[20px] py-[16px] transition-all duration-300 focus:outline-none focus:border-[var(--blue2)] focus:bg-[rgba(37,99,235,0.05)] placeholder:text-[var(--text3)] resize-y min-h-[120px]"
                                placeholder="Cuéntame sobre tu proyecto..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`btn-primary mt-[10px] w-full flex justify-center items-center gap-[10px] bg-[var(--blue)] text-[var(--color-white)] px-[32px] py-[18px] rounded-[8px] font-['DM_Mono'] text-[0.9rem] uppercase tracking-[0.05em] font-medium transition-all duration-300 shadow-[0_10px_30px_rgba(37,99,235,0.2)] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-[var(--blue2)] hover:-translate-y-[2px] hover:shadow-[0_15px_40px_rgba(37,99,235,0.4)]'
                                }`}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
                            {!isSubmitting && <Send size={18} />}
                        </button>

                        {/* Status Messages */}
                        {submitStatus === 'success' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center justify-center gap-2 text-green-400 bg-green-500/10 border border-green-500/20 py-3 rounded-lg mt-2"
                            >
                                <CheckCircle size={18} />
                                <span className="font-sans text-sm font-medium">¡Mensaje enviado correctamente! Hablaremos pronto.</span>
                            </motion.div>
                        )}
                        {submitStatus === 'error' && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center justify-center gap-2 text-red-400 bg-red-500/10 border border-red-500/20 py-3 rounded-lg mt-2 px-4 text-center"
                            >
                                <AlertCircle size={18} className="shrink-0" />
                                <span className="font-sans text-sm font-medium">{errorMessage}</span>
                            </motion.div>
                        )}
                    </motion.form>
                </div>
            </div>

            <footer className="mt-[100px] border-t border-[var(--border)] pt-[40px]">
                <div className="wrap flex flex-col md:flex-row justify-between items-center gap-[20px]">
                    <div className="flex items-center gap-[12px]">
                        <div className="w-[8px] h-[8px] bg-[var(--blue2)] rounded-full animate-[pulse_2s_infinite]"></div>
                        <span className="text-[0.85rem] text-[var(--text2)] font-['DM_Mono'] tracking-[0.02em]">Disponible para nuevos proyectos</span>
                    </div>
                    <div className="text-[0.85rem] text-[var(--text3)]">
                        &copy; {new Date().getFullYear()} Ian Gianera. Todos los derechos reservados.
                    </div>
                </div>
            </footer>
        </section>
    );
}
