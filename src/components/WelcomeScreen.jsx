import React, { useState, useEffect, useMemo, Suspense, lazy } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import useSound from 'use-sound';
import { useAudio } from '../context/AudioContext';

// Lazy Load heavy visual components
const Particles = lazy(() => import("@tsparticles/react"));
const Portfolio3D = lazy(() => import("./ui/3d/Portfolio3D"));
const RPG3D = lazy(() => import("./ui/3d/RPG3D"));

export default function WelcomeScreen({ onSelect }) {
    const [selectedMode, setSelectedMode] = useState(null);
    const [init, setInit] = useState(false);

    // Global Audio Context
    const { isMuted } = useAudio();

    // Sound Hooks
    const [playHover] = useSound('/assets/sounds/hover.wav', { volume: 0.2, interrupt: true });
    const [playTechClick] = useSound('/assets/sounds/click-tech.wav', { volume: 0.6 });
    const [playRetroClick] = useSound('/assets/sounds/click-retro.mp3', { volume: 0.5 });

    // Initialize Particles
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const handleSelect = (mode) => {
        if (selectedMode) return;

        // Play distinct sounds if not muted
        if (!isMuted) {
            if (mode === 'portfolio') {
                playTechClick();
            } else {
                playRetroClick();
            }
        }

        setSelectedMode(mode);
        // Wait for cinematic fade animation
        setTimeout(() => {
            onSelect(mode);
        }, 1200);
    };

    const handleHover = () => {
        if (!isMuted) {
            playHover();
        }
    };

    // Particles config for Portfolio (Tech, Clean, Geometric)
    const portfolioParticlesOptions = useMemo(() => ({
        fullScreen: { enable: false, zIndex: 1 },
        fpsLimit: 60,
        interactivity: {
            events: { onHover: { enable: true, mode: "grab" } },
            modes: { grab: { distance: 150, links: { opacity: 0.5 } } }
        },
        particles: {
            color: { value: "#ffffff" },
            links: { color: "#ffffff", distance: 150, enable: true, opacity: 0.2, width: 1 },
            move: { enable: true, speed: 1, direction: "none", random: true, outModes: { default: "bounce" } },
            number: { density: { enable: true, area: 800 }, value: 40 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } }
        },
        detectRetina: true,
    }), []);

    // Particles config for RPG (Embers, Fire, Retro boxes)
    const rpgParticlesOptions = useMemo(() => ({
        fullScreen: { enable: false, zIndex: 1 },
        fpsLimit: 60,
        interactivity: {
            events: { onHover: { enable: true, mode: "repulse" } },
            modes: { repulse: { distance: 100, duration: 0.4 } }
        },
        particles: {
            color: { value: ["#ff5e00", "#ff0000", "#ffaa00"] },
            move: { enable: true, speed: 2, direction: "top", random: false, straight: false, outModes: { default: "out" } },
            number: { density: { enable: true, area: 800 }, value: 60 },
            opacity: { value: { min: 0.1, max: 0.6 }, animation: { enable: true, speed: 1, sync: false } },
            shape: { type: "square" },
            size: { value: { min: 2, max: 6 } }
        },
        detectRetina: true,
    }), []);

    return (
        <div className="fixed inset-0 z-50 flex flex-col md:flex-row bg-black overflow-hidden font-sans">
            {/* Custom Styles for Glitch & Cursors */}
            <style dangerouslySetInnerHTML={{
                __html: `
                .glitch-hover:hover {
                    animation: glitch-anim 0.3s cubic-bezier(.25, .46, .45, .94) both infinite;
                }
                @keyframes glitch-anim {
                    0% { transform: translate(0) }
                    20% { transform: translate(-2px, 2px) text-shadow: 2px 0 #0ff, -2px 0 #f00; }
                    40% { transform: translate(-2px, -2px) text-shadow: -2px 0 #0ff, 2px 0 #f00; }
                    60% { transform: translate(2px, 2px) text-shadow: 2px 0 #0ff, -2px 0 #f00; }
                    80% { transform: translate(2px, -2px) text-shadow: -2px 0 #0ff, 2px 0 #f00; }
                    100% { transform: translate(0) }
                }
                .cursor-portfolio { cursor: crosshair; }
                .cursor-rpg { cursor: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill:white;"><path d="M11 2h2v4h-2zm0 16h2v4h-2zm-8-6h4v2H3zm14 0h4v2h-4zm-6-4h2v6h-2z"/></svg>') 12 12, auto; }
            `}} />

            {/* Left Side (Professional) */}
            <motion.div
                className="cursor-portfolio relative group flex-1 border-b-2 md:border-b-0 md:border-r border-white/10 overflow-hidden bg-black flex flex-col justify-end pb-8 md:pb-16"
                onClick={() => handleSelect('portfolio')}
                onMouseEnter={handleHover}
                animate={
                    selectedMode === 'portfolio'
                        ? { flexGrow: 100, scale: 1.05, opacity: 1, zIndex: 50, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }
                        : selectedMode === 'rpg'
                            ? { flexGrow: 0, opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                            : { flexGrow: 1, scale: 1, opacity: 1 }
                }
            >
                {/* Fade to White Transition Overlay */}
                <motion.div
                    className="absolute inset-0 bg-white z-50 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: selectedMode === 'portfolio' ? 1 : 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                />

                {/* Background Image with Ken Burns effect */}
                <motion.img
                    src="/assets/projects/Captura de pantalla 2026-03-01 191520.png"
                    alt="Vista previa Profesional"
                    className="absolute inset-0 w-full h-full object-contain md:object-cover object-center opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ willChange: 'transform' }}
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />

                {/* Background Particles & 3D Interactive Model */}
                {init && !selectedMode && (
                    <>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0">
                            <Suspense fallback={null}>
                                <Particles id="tsparticles-portfolio" options={portfolioParticlesOptions} className="w-full h-full" />
                            </Suspense>
                        </div>
                        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex items-center justify-center pointer-events-none md:group-hover:pointer-events-auto">
                            <div className="w-[300px] h-[300px] md:w-[450px] md:h-[450px]">
                                <Suspense fallback={null}>
                                    <Portfolio3D />
                                </Suspense>
                            </div>
                        </div>
                    </>
                )}

                {/* Dark Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent md:from-black/80 md:via-transparent md:to-transparent opacity-100 group-hover:opacity-60 transition-opacity duration-500 z-10 pointer-events-none"></div>

                {/* Titles and Context */}
                <div className="relative z-20 w-full text-center transform -translate-y-2 md:translate-y-4 md:group-hover:translate-y-[-10px] transition-transform duration-500 ease-out">
                    <h2 className="font-['Syne'] text-4xl md:text-6xl lg:text-7xl font-black tracking-[0.25em] text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 drop-shadow-[0_5px_15px_rgba(0,0,0,1)] md:group-hover:scale-105 transition-transform duration-500">
                        PORTFOLIO
                    </h2>
                    <div className="h-0.5 w-12 md:w-24 bg-white/50 mx-auto mt-4 mb-3 scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-700"></div>
                    <p className="text-white/80 text-xs md:text-sm tracking-[0.4em] uppercase font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Experiencia Profesional
                    </p>
                </div>
            </motion.div>

            {/* Right Side (RPG) */}
            <motion.div
                className="cursor-rpg relative group flex-1 md:border-l border-white/10 overflow-hidden bg-black flex flex-col justify-end pb-12 md:pb-24"
                onClick={() => handleSelect('rpg')}
                onMouseEnter={handleHover}
                animate={
                    selectedMode === 'rpg'
                        ? { flexGrow: 100, scale: 1.05, opacity: 1, zIndex: 50, transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] } }
                        : selectedMode === 'portfolio'
                            ? { flexGrow: 0, opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } }
                            : { flexGrow: 1, scale: 1, opacity: 1 }
                }
            >
                {/* Fade to Black Transition Overlay (CRT off effect) */}
                <motion.div
                    className="absolute inset-0 bg-black z-50 pointer-events-none"
                    initial={{ scaleY: 1, opacity: 0 }}
                    animate={
                        selectedMode === 'rpg'
                            ? { opacity: 1, scaleY: [0, 0.01, 1], filter: ['brightness(1)', 'brightness(10)', 'brightness(1)'] }
                            : { opacity: 0 }
                    }
                    transition={{ duration: 0.8, delay: 0.2 }}
                />

                {/* Background Image with alternating Ken Burns effect */}
                <motion.img
                    src="/assets/projects/brave_screenshot_localhost.png"
                    alt="Vista previa RPG"
                    className="absolute inset-0 w-full h-full object-contain md:object-cover object-center opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                    style={{ willChange: 'transform' }}
                    animate={{ scale: [1.05, 1, 1.05] }}
                    transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                />

                {/* Background Particles & 3D Interactive Model */}
                {init && !selectedMode && (
                    <>
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none z-0">
                            <Suspense fallback={null}>
                                <Particles id="tsparticles-rpg" options={rpgParticlesOptions} className="w-full h-full" />
                            </Suspense>
                        </div>
                        <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 flex items-center justify-center pointer-events-none md:group-hover:pointer-events-auto">
                            <div className="w-[250px] h-[250px] md:w-[400px] md:h-[400px]">
                                <Suspense fallback={null}>
                                    <RPG3D />
                                </Suspense>
                            </div>
                        </div>
                    </>
                )}

                {/* Scanline Effect Overlay (Retro feel) */}
                <div className="absolute inset-0 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAADCAYAAABS3WWCAAAAEUlEQVQIW2NkYGD4z8DAwMgAI0AMCQEAAAAASUVORK5CYII=')] opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none z-10"></div>

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent md:from-black/90 md:via-black/20 md:to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>

                {/* Titles and Context */}
                <div className="relative z-20 w-full text-center transform -translate-y-2 md:translate-y-4 md:group-hover:translate-y-[-10px] transition-transform duration-500 ease-out">
                    <h2 className="glitch-hover text-red-200 md:group-hover:text-red-500 font-['Press_Start_2P',_monospace] font-sans text-2xl md:text-5xl lg:text-6xl tracking-[0.1em] drop-shadow-[0_5px_15px_rgba(200,0,0,0.8)] md:group-hover:drop-shadow-[0_0_30px_rgba(255,0,0,1)] md:group-hover:scale-105 transition-all duration-500">
                        RETRO RPG
                    </h2>
                    <div className="h-0.5 w-12 md:w-24 bg-red-500/50 mx-auto mt-6 mb-4 scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-700"></div>
                    <p className="text-red-100/80 text-xs md:text-sm tracking-[0.4em] uppercase font-light drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-700 delay-100">
                        Aventura Interactiva
                    </p>
                </div>
            </motion.div>

            {/* Overarching Center Title */}
            <AnimatePresence>
                {!selectedMode && (
                    <motion.div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 pointer-events-none text-center bg-black/80 md:bg-black/60 px-8 py-4 md:px-12 md:py-6 rounded-2xl md:rounded-[40px] backdrop-blur-xl border border-white/10 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.5, filter: 'blur(10px)' }}
                        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                        <h1 className="font-['Syne'] font-extrabold text-lg md:text-2xl text-white tracking-[0.2em] drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)] uppercase whitespace-nowrap">
                            Elige tu Camino
                        </h1>
                        <p className="text-white/50 text-[10px] md:text-xs mt-2 uppercase tracking-[0.2em]">
                            Toca un lado para entrar
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
