import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PresentationControls } from '@react-three/drei';

function PortfolioScene() {
    const penRef = useRef();
    const groupRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();

        // Rotate the whole desk/paper group slowly
        if (groupRef.current) {
            groupRef.current.rotation.y = Math.sin(time * 0.2) * 0.1;
            groupRef.current.rotation.x = -Math.PI / 8 + Math.cos(time * 0.3) * 0.05;
        }

        // Animate the stylus writing on the paper
        if (penRef.current) {
            // Speed of writing movements
            const writingSpeed = time * 6;
            // Progress down the page: loop every 4 seconds
            const lineProgress = (time * 0.5) % 2; // from 0 to 2

            // X moves left to right rapidly simulating scribbling
            // We use overlapping sine waves for a jittery/organic writing feel
            const xWobble = Math.sin(writingSpeed) * 0.8 + Math.cos(writingSpeed * 2.3) * 0.3;
            penRef.current.position.x = xWobble;

            // Z moves top to bottom depending on `lineProgress` and resets
            // The paper is from roughly Z = -1 to Z = 1
            penRef.current.position.z = -1 + lineProgress * 1.5;

            // Small lifts between words/letters (Y axis) so it bounces slightly
            const lift = Math.abs(Math.sin(writingSpeed * 1.5)) * 0.1;
            penRef.current.position.y = 0.05 + lift;

            // Wiggle the pen rotation slightly to match the writing
            penRef.current.rotation.z = Math.sin(writingSpeed * 2) * 0.2;
            penRef.current.rotation.x = Math.PI / 6 + Math.cos(writingSpeed) * 0.1;
        }
    });

    return (
        <>
            <ambientLight intensity={1.5} />
            <directionalLight position={[5, 10, 5]} intensity={2} />
            <pointLight position={[0, 3, 0]} intensity={2} color="#4fd1c5" distance={10} />

            <PresentationControls
                global={false}
                cursor={true}
                snap={true}
                speed={1}
                zoom={1}
                rotation={[0, 0, 0]}
                polar={[-Math.PI / 3, Math.PI / 3]}
                azimuth={[-Math.PI / 4, Math.PI / 4]}
            >
                <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
                    <group ref={groupRef}>

                        {/* Digital Paper Plane */}
                        <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                            {/* A bit rounded corners visually just by being a plane, but let's use a box for thickness */}
                            <boxGeometry args={[3, 4, 0.05]} />
                            <meshStandardMaterial color="#ffffff" roughness={0.3} metalness={0.1} />
                        </mesh>

                        {/* Lines on the paper to give it a notepad look */}
                        {[...Array(6)].map((_, i) => (
                            <mesh key={i} position={[0, 0.026, -1.2 + i * 0.5]} rotation={[-Math.PI / 2, 0, 0]}>
                                <planeGeometry args={[2.5, 0.02]} />
                                <meshBasicMaterial color="#e2e8f0" />
                            </mesh>
                        ))}

                        {/* Top Margin (Red line) */}
                        <mesh position={[-1.2, 0.026, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                            <planeGeometry args={[0.02, 3.8]} />
                            <meshBasicMaterial color="#fc8181" opacity={0.5} transparent />
                        </mesh>

                        {/* Animated Stylus / Pen Group */}
                        <group ref={penRef} position={[0, 0.2, 0]} rotation={[Math.PI / 6, 0, -Math.PI / 6]}>

                            {/* Glowing Tip */}
                            <mesh position={[0, 0, 0]}>
                                <coneGeometry args={[0.05, 0.3, 16]} />
                                <meshStandardMaterial color="#4fd1c5" emissive="#4fd1c5" emissiveIntensity={2} />
                            </mesh>

                            {/* Pen Body */}
                            <mesh position={[0, 0.75, 0]}>
                                <cylinderGeometry args={[0.08, 0.05, 1.2, 16]} />
                                <meshStandardMaterial color="#1a202c" metalness={0.8} roughness={0.2} />
                            </mesh>

                            {/* Top Cap */}
                            <mesh position={[0, 1.4, 0]}>
                                <sphereGeometry args={[0.08, 16, 16]} />
                                <meshStandardMaterial color="#4fd1c5" metalness={0.5} />
                            </mesh>

                            {/* Small light emitting from the tip painting the paper */}
                            <pointLight position={[0, -0.1, 0]} intensity={2} color="#4fd1c5" distance={2} />
                        </group>
                    </group>
                </Float>
            </PresentationControls>
        </>
    );
}

export default function Portfolio3D() {
    return (
        <Canvas camera={{ position: [0, 4, 6], fov: 45 }} className="pointer-events-auto">
            <PortfolioScene />
        </Canvas>
    );
}
