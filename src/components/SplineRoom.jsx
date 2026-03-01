import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function SplineRoom({ onBack }) {
    const [activePopup, setActivePopup] = useState(null);
    const containerRef = useRef(null);

    useEffect(() => {
        // Carga de script de Spline Viewer si no existe en el DOM
        if (!document.querySelector('script[src="https://unpkg.com/@splinetool/viewer/build/spline-viewer.js"]')) {
            const script = document.createElement('script');
            script.type = 'module';
            script.src = 'https://unpkg.com/@splinetool/viewer/build/spline-viewer.js';
            document.body.appendChild(script);
        }
    }, []);

    useEffect(() => {
        const handleMouseDown = (evento) => {
            // evento.detail.name retorna el nombre del objeto clicado en la escena de Spline
            const nombreObjeto = evento.detail?.name;
            console.log("Tocaste el objeto llamado: '" + nombreObjeto + "'");

            switch (nombreObjeto) {
                case 'skills':
                    setActivePopup('skills');
                    break;
                case 'reloj':
                    setActivePopup('reloj');
                    break;
                case 'silla gamer':
                    setActivePopup('silla');
                    break;
                case 'tv':
                    setActivePopup('tv');
                    break;
                case 'proyectos':
                    setActivePopup('proyectos');
                    break;
                case 'earphone':
                    setActivePopup('earphone');
                    break;
                default:
                    break;
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('mouseDown', handleMouseDown);
        }

        return () => {
            if (container) {
                container.removeEventListener('mouseDown', handleMouseDown);
            }
        };
    }, []);

    const closePopup = () => setActivePopup(null);

    // Fecha y hora local de Salta
    const opcionesHora = { timeZone: 'America/Argentina/Salta', hour: '2-digit', minute: '2-digit' };
    const horaLocal = new Date().toLocaleTimeString('es-AR', opcionesHora);

    return (
        <div className="fixed inset-0 w-full h-full bg-[#121212] overflow-hidden z-50">
            {/* Botón Volver */}
            <button
                onClick={() => onBack(null)}
                className="absolute top-6 left-6 z-[60] bg-[#141419]/80 backdrop-blur-md border border-white/10 text-white px-5 py-2.5 rounded-xl hover:bg-white/10 hover:border-blue-500 transition-all duration-300 flex items-center gap-2 font-medium"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver
            </button>

            {/* Visor Spline */}
            <div ref={containerRef} className="w-full h-full absolute top-0 left-0 z-10">
                <spline-viewer url="https://prod.spline.design/NhkMRgf7HuTe65f6/scene.splinecode"></spline-viewer>
            </div>

            {/* Ventanas Emergentes (Popups) */}
            <AnimatePresence>
                {activePopup === 'skills' && (
                    <Popup title="🛠️ Mis Habilidades" onClose={closePopup}>
                        <ul className="list-disc pl-5 space-y-2 text-[#ccc] text-base leading-relaxed">
                            <li>Desarrollo Web (HTML, CSS, JS, Vercel)</li>
                            <li>Administración de Empresas</li>
                            <li>Gestión de Proyectos Gastronómicos</li>
                            <li>Armado de PC y Hardware</li>
                            <li>Diseño de accesorios 3D (Roblox)</li>
                        </ul>
                    </Popup>
                )}

                {activePopup === 'reloj' && (
                    <Popup title="🕒 Hora Local" onClose={closePopup}>
                        <p className="text-[#ccc] text-base leading-relaxed mb-1">En este momento en Salta son las:</p>
                        <div className="text-[2.5rem] font-bold text-white leading-none">{horaLocal}</div>
                    </Popup>
                )}

                {activePopup === 'silla' && (
                    <Popup title="🎮 ¡Power Up!" onClose={closePopup}>
                        <p className="text-[#ccc] text-base leading-relaxed">Has desbloqueado +50 fps en la vida real. Postura corregida y listo para el próximo desafío.</p>
                    </Popup>
                )}

                {activePopup === 'tv' && (
                    <Popup title="📺 Sobre mí" onClose={closePopup}>
                        <p className="text-[#ccc] text-base leading-relaxed mb-3">¡Hola! Soy Ian Gianera, tengo 19 años. Estudio Administración y dirijo "Delicias Urbanas".</p>
                        <p className="text-[#ccc] text-base leading-relaxed">Me apasiona la tecnología, el hardware y el mercado de los fierros. Cuando me desconecto de los negocios y el código, seguro estoy entrenando en el gym, jugando Clash Royale en la PC, o alentando a San Lorenzo.</p>
                    </Popup>
                )}

                {activePopup === 'proyectos' && (
                    <Popup title="🚀 Mis Proyectos" onClose={closePopup}>
                        <ul className="list-disc pl-5 space-y-2 text-[#ccc] text-base leading-relaxed">
                            <li><strong>Workout App:</strong> Aplicación web para trackear rutinas y objetivos de gimnasio.</li>
                            <li><strong>Web para Agus:</strong> Un sitio especial diseñado y alojado en Vercel.</li>
                            <li><strong>Delicias Urbanas:</strong> Expansión y gestión de mi propio local.</li>
                        </ul>
                    </Popup>
                )}

                {activePopup === 'earphone' && (
                    <Popup title="🎧 Sonando ahora..." onClose={closePopup}>
                        <p className="text-[#ccc] text-base leading-relaxed mb-4">La música que me acompaña a programar y entrenar.</p>
                        <div className="rounded-xl overflow-hidden mt-4">
                            {/* Nota: En el código original tenías el src apuntando de nuevo a la escena de spline. 
                  He puesto un playlist lofi de Spotify como ejemplo, pero podés cambiar esta url! */}
                            <iframe
                                style={{ borderRadius: '12px' }}
                                src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4ZsnsnD?utm_source=generator&theme=0"
                                width="100%"
                                height="152"
                                frameBorder="0"
                                allowFullScreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </Popup>
                )}
            </AnimatePresence>
        </div>
    );
}

// Subcomponente de la ventana emergente
function Popup({ title, children, onClose }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: "-45%", x: "-50%" }}
            animate={{ opacity: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, y: "-45%", x: "-50%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 w-[90%] max-w-[400px] bg-[#141419]/85 backdrop-blur-[10px] border border-white/10 rounded-xl p-6 text-white shadow-[0_10px_30px_rgba(0,0,0,0.5)] z-[20]"
        >
            <h2 className="text-[1.5rem] font-bold border-b-2 border-[#4a90e2] pb-2 mb-4 mt-0">{title}</h2>
            <div className="mb-6">{children}</div>
            <button
                onClick={onClose}
                className="block w-full mt-5 px-3 py-2.5 bg-[#4a90e2] hover:bg-[#357abd] text-white font-bold text-base rounded-md transition-colors cursor-pointer border-none"
            >
                Cerrar
            </button>
        </motion.div>
    );
}
