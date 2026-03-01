import React from 'react';
import { useAudio } from '../../context/AudioContext';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioController() {
    const { isMuted, toggleMute } = useAudio();

    return (
        <button
            onClick={toggleMute}
            className="fixed top-4 right-4 md:top-auto md:bottom-6 md:right-6 z-[9999] p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 transition-colors shadow-lg group"
            aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        >
            {isMuted ? (
                <VolumeX className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
            ) : (
                <Volume2 className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity" />
            )}
        </button>
    );
}
