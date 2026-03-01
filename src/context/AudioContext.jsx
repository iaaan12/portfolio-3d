import React, { createContext, useContext, useState, useEffect } from 'react';

const AudioContext = createContext();

export function useAudio() {
    return useContext(AudioContext);
}

export function AudioProvider({ children }) {
    // Initialize from localStorage if available, default to false (not muted)
    const [isMuted, setIsMuted] = useState(() => {
        const saved = localStorage.getItem('globalIsMuted');
        return saved === 'true'; // string to boolean
    });

    // Syncd state to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('globalIsMuted', isMuted);
    }, [isMuted]);

    const toggleMute = () => {
        setIsMuted(prev => !prev);
    };

    const value = {
        isMuted,
        toggleMute,
    };

    return (
        <AudioContext.Provider value={value}>
            {children}
        </AudioContext.Provider>
    );
}
