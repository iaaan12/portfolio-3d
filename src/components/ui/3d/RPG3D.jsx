import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PresentationControls } from '@react-three/drei';

function RPGScene() {
    const meshRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.5;
            // Slight tilt for dynamic floating
            meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime()) * 0.1;
            meshRef.current.rotation.z = Math.cos(state.clock.getElapsedTime()) * 0.1;
        }
    });

    return (
        <>
            <ambientLight intensity={2} color="#ffffff" />
            <directionalLight position={[5, 10, 5]} intensity={2.5} castShadow />
            {/* Warm bottom light to simulate lava/retro glow */}
            <pointLight position={[0, -5, 0]} intensity={2} color="#ffaa00" distance={10} />

            <PresentationControls
                global={false}
                cursor={true}
                snap={true}
                speed={1}
                zoom={1}
                rotation={[Math.PI / 6, Math.PI / 4, 0]} // Isometric-ish starting angle
                polar={[-Math.PI / 3, Math.PI / 3]}
                azimuth={[-Math.PI, Math.PI]}
            >
                <Float speed={2} rotationIntensity={0.2} floatIntensity={1}>
                    <mesh ref={meshRef} scale={1.8}>
                        {/* Main Dirt Body (All sides) */}
                        <mesh>
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial color="#5a3825" roughness={1} />
                        </mesh>

                        {/* Main Grass Top (Overrides the top of the dirt) */}
                        <mesh position={[0, 0.46, 0]}>
                            <boxGeometry args={[1.02, 0.1, 1.02]} />
                            <meshStandardMaterial color="#55a832" roughness={0.8} />
                        </mesh>

                        {/* Grass dripping down the sides randomly */}
                        <mesh position={[0.5, 0.3, 0]}>
                            <boxGeometry args={[0.06, 0.3, 0.7]} />
                            <meshStandardMaterial color="#55a832" roughness={0.8} />
                        </mesh>
                        <mesh position={[-0.5, 0.35, 0]}>
                            <boxGeometry args={[0.06, 0.2, 0.8]} />
                            <meshStandardMaterial color="#55a832" roughness={0.8} />
                        </mesh>
                        <mesh position={[0, 0.3, 0.5]}>
                            <boxGeometry args={[0.6, 0.3, 0.06]} />
                            <meshStandardMaterial color="#55a832" roughness={0.8} />
                        </mesh>
                        <mesh position={[0, 0.25, -0.5]}>
                            <boxGeometry args={[0.5, 0.4, 0.06]} />
                            <meshStandardMaterial color="#55a832" roughness={0.8} />
                        </mesh>
                    </mesh>
                </Float>
            </PresentationControls>
        </>
    );
}

export default function RPG3D() {
    return (
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }} className="pointer-events-auto">
            <RPGScene />
        </Canvas>
    );
}
