"use client"
import React, { useEffect, useState, memo } from 'react';
import {
    SiJavascript, SiTypescript, SiPython, SiC, SiCplusplus,
    SiMysql, SiHtml5, SiCss3, SiJson, SiReact, SiNextdotjs,
    SiAngular, SiVuedotjs, SiTailwindcss, SiGit, SiGithub
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import { BsCursorFill } from 'react-icons/bs';

const skillsConfig = [
    // --- INNER ORBIT (3 items) ---
    { id: 'html', orbitRadius: 90, size: 36, speed: 1.2, Icon: SiHtml5, color: '#E34F26', phaseShift: 0, glowColor: 'cyan', label: 'HTML5' },
    { id: 'css', orbitRadius: 90, size: 36, speed: 1.2, Icon: SiCss3, color: '#1572B6', phaseShift: (2 * Math.PI) / 3, glowColor: 'cyan', label: 'CSS3' },
    { id: 'javascript', orbitRadius: 90, size: 36, speed: 1.2, Icon: SiJavascript, color: '#F7DF1E', phaseShift: (4 * Math.PI) / 3, glowColor: 'cyan', label: 'JavaScript' },

    // --- MIDDLE ORBIT (7 items) ---
    { id: 'typescript', orbitRadius: 155, size: 40, speed: -0.8, Icon: SiTypescript, color: '#3178C6', phaseShift: 0, glowColor: 'purple', label: 'TypeScript' },
    { id: 'react', orbitRadius: 155, size: 40, speed: -0.8, Icon: SiReact, color: '#61DAFB', phaseShift: (1 * 2 * Math.PI) / 7, glowColor: 'purple', label: 'React' },
    { id: 'nextjs', orbitRadius: 155, size: 40, speed: -0.8, Icon: SiNextdotjs, color: '#ffffff', phaseShift: (2 * 2 * Math.PI) / 7, glowColor: 'purple', label: 'Next.js' },
    { id: 'angular', orbitRadius: 155, size: 40, speed: -0.8, Icon: SiAngular, color: '#DD0031', phaseShift: (3 * 2 * Math.PI) / 7, glowColor: 'purple', label: 'Angular' },
    { id: 'vue', orbitRadius: 155, size: 40, speed: -0.8, Icon: SiVuedotjs, color: '#4FC08D', phaseShift: (4 * 2 * Math.PI) / 7, glowColor: 'purple', label: 'Vue' },
    { id: 'tailwindcss', orbitRadius: 155, size: 40, speed: -0.8, Icon: SiTailwindcss, color: '#06B6D4', phaseShift: (5 * 2 * Math.PI) / 7, glowColor: 'purple', label: 'Tailwind CSS' },
    { id: 'json', orbitRadius: 155, size: 40, speed: -0.8, Icon: SiJson, color: '#ffffff', phaseShift: (6 * 2 * Math.PI) / 7, glowColor: 'purple', label: 'JSON' },

    // --- OUTER ORBIT (8 items) ---
    { id: 'python', orbitRadius: 230, size: 44, speed: 0.45, Icon: SiPython, color: '#3776AB', phaseShift: 0, glowColor: 'cyan', label: 'Python' },
    { id: 'c', orbitRadius: 230, size: 44, speed: 0.45, Icon: SiC, color: '#A8B9CC', phaseShift: (1 * 2 * Math.PI) / 8, glowColor: 'cyan', label: 'C' },
    { id: 'cpp', orbitRadius: 230, size: 44, speed: 0.45, Icon: SiCplusplus, color: '#00599C', phaseShift: (2 * 2 * Math.PI) / 8, glowColor: 'cyan', label: 'C++' },
    { id: 'sql', orbitRadius: 230, size: 44, speed: 0.45, Icon: SiMysql, color: '#4479A1', phaseShift: (3 * 2 * Math.PI) / 8, glowColor: 'cyan', label: 'SQL' },
    { id: 'git', orbitRadius: 230, size: 44, speed: 0.45, Icon: SiGit, color: '#F05032', phaseShift: (4 * 2 * Math.PI) / 8, glowColor: 'cyan', label: 'Git' },
    { id: 'github', orbitRadius: 230, size: 44, speed: 0.45, Icon: SiGithub, color: '#ffffff', phaseShift: (5 * 2 * Math.PI) / 8, glowColor: 'cyan', label: 'GitHub' },
    { id: 'vscode', orbitRadius: 230, size: 44, speed: 0.45, Icon: VscVscode, color: '#007ACC', phaseShift: (6 * 2 * Math.PI) / 8, glowColor: 'cyan', label: 'VS Code' },
    { id: 'cursor', orbitRadius: 230, size: 44, speed: 0.45, Icon: BsCursorFill, color: '#ffffff', phaseShift: (7 * 2 * Math.PI) / 8, glowColor: 'cyan', label: 'Cursor' },
];

const OrbitingSkill = memo(({ config, angle }) => {
    const [isHovered, setIsHovered] = useState(false);
    const { orbitRadius, size, Icon, color, label } = config;

    const x = Math.cos(angle) * orbitRadius;
    const y = Math.sin(angle) * orbitRadius;

    return (
        <div
            className="absolute top-1/2 left-1/2"
            style={{
                width: `${size}px`,
                height: `${size}px`,
                transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
                zIndex: isHovered ? 30 : 10,
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className={`
          relative w-full h-full p-[6px] bg-zinc-800/90 backdrop-blur-[2px]
          rounded-full flex items-center justify-center
          transition-all duration-300 cursor-pointer
          ${isHovered ? 'scale-125 shadow-2xl' : 'shadow-lg hover:shadow-xl'}
        `}
                style={{
                    boxShadow: isHovered
                        ? `0 0 30px ${color}40, 0 0 60px ${color}20`
                        : `inset 0 0 10px rgba(0,0,0,0.5)`,
                    color: color
                }}
            >
                <Icon className="w-full h-full object-contain" />
                {isHovered && (
                    <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-zinc-900/95 backdrop-blur-sm rounded text-xs text-zinc-50 whitespace-nowrap pointer-events-none shadow-xl border border-zinc-800">
                        {label}
                    </div>
                )}
            </div>
        </div>
    );
});
OrbitingSkill.displayName = 'OrbitingSkill';

const GlowingOrbitPath = memo(({ radius, glowColor = 'cyan', animationDelay = 0 }) => {
    const glowColors = {
        cyan: { primary: 'rgba(6, 182, 212, 0.3)', secondary: 'rgba(6, 182, 212, 0.1)', border: 'rgba(6, 182, 212, 0.2)' },
        purple: { primary: 'rgba(147, 51, 234, 0.3)', secondary: 'rgba(147, 51, 234, 0.1)', border: 'rgba(147, 51, 234, 0.2)' }
    };
    const colors = glowColors[glowColor] || glowColors.cyan;

    return (
        <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
                width: `${radius * 2}px`,
                height: `${radius * 2}px`,
            }}
        >
            <div
                className="absolute inset-0 rounded-full animate-pulse"
                style={{
                    background: `radial-gradient(circle, transparent 30%, ${colors.secondary} 70%, ${colors.primary} 100%)`,
                    boxShadow: `0 0 40px ${colors.primary}, inset 0 0 40px ${colors.secondary}`,
                    animationDelay: `${animationDelay}s`,
                }}
            />
            <div
                className="absolute inset-0 rounded-full"
                style={{
                    border: `1px dashed ${colors.border}`,
                }}
            />
        </div>
    );
});
GlowingOrbitPath.displayName = 'GlowingOrbitPath';

export default function OrbitingSkills() {
    const [time, setTime] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [scale, setScale] = useState(1);

    // Dynamic scaling for responsiveness
    useEffect(() => {
        const handleResize = () => {
            const w = window.innerWidth;
            if (w < 768) {
                // Ensure it fits within mobile screens (accounting for side paddings and the glow)
                setScale(Math.min(w / 700, 0.5));
            } else if (w < 1024) {
                setScale(0.8);
            } else {
                setScale(1);
            }
        };
        handleResize(); // Initial call
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Animation Loop
    useEffect(() => {
        if (isPaused) return;

        let animationFrameId;
        let lastTime = performance.now();

        const animate = (currentTime) => {
            const deltaTime = (currentTime - lastTime) / 1000;
            lastTime = currentTime;

            setTime(prevTime => prevTime + deltaTime);
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isPaused]);

    const orbitConfigs = [
        { radius: 90, glowColor: 'cyan', delay: 0 },
        { radius: 155, glowColor: 'purple', delay: 1.5 },
        { radius: 230, glowColor: 'cyan', delay: 3 }
    ];

    return (
        <div className="w-full flex items-center justify-center h-[450px] md:h-[600px] relative">

            {/* Scaled container based on screen size */}
            <div
                className="relative w-[500px] h-[500px] flex items-center justify-center transition-transform duration-300"
                style={{ transform: `scale(${scale})` }}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
            >
                {/* Central "Code" Logo */}
                <div className="w-20 h-20 bg-zinc-900 rounded-full flex items-center justify-center z-20 relative shadow-2xl border border-zinc-700">
                    <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl animate-pulse"></div>
                    <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="relative z-10 flex flex-col items-center select-none cursor-default">
                        <span className="text-xl font-bold bg-gradient-to-br from-zinc-100 to-zinc-400 bg-clip-text text-transparent">IG.</span>
                    </div>
                </div>

                {/* Orbit Paths */}
                {orbitConfigs.map((config) => (
                    <GlowingOrbitPath
                        key={`path-${config.radius}`}
                        radius={config.radius}
                        glowColor={config.glowColor}
                        animationDelay={config.delay}
                    />
                ))}

                {/* Render ALL 18 Orbiting Skill Icons */}
                {skillsConfig.map((config) => {
                    const angle = time * config.speed + (config.phaseShift || 0);
                    return (
                        <OrbitingSkill
                            key={config.id}
                            config={config}
                            angle={angle}
                        />
                    );
                })}
            </div>
        </div>
    );
}
