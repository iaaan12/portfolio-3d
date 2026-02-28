import { motion } from 'framer-motion';

export default function RpgGame({ onBack }) {
    return (
        <div className="absolute inset-0 bg-[#091209] overflow-hidden w-full h-[100dvh]">
            {/* Back Button Overlay */}
            <motion.button
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                onClick={() => onBack(null)}
                className="absolute top-4 left-4 z-50 flex items-center justify-center gap-2 bg-[rgba(0,14,0,0.8)] hover:bg-[rgba(20,40,20,0.9)] border border-[#44ff44] text-[#88ff88] px-4 py-2 rounded-md font-['Press_Start_2P'] text-[10px] uppercase tracking-wider transition-colors shadow-[0_0_10px_rgba(68,255,68,0.2)] hover:shadow-[0_0_15px_rgba(68,255,68,0.4)]"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Volver
            </motion.button>

            {/* Hidden Input to pre-load font if not loaded naturally by HTML */}
            <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />

            {/* Iframe loading the standalone HTML game */}
            <iframe
                src="/ian-rpg.html"
                title="Ian Gianera - RPG Portfolio"
                className="w-full h-full border-none m-0 p-0 block"
            />
        </div>
    );
}
