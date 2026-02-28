import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Environment } from '@react-three/drei';

function Model({ url }) {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
}

export default function CityCanvas() {
    return (
        <Canvas camera={{ position: [15.849, 3.020, -25.891], fov: 40 }}>
            <color attach="background" args={['#0a0a0a']} />
            <ambientLight intensity={0.2} />
            <Suspense fallback={null}>
                {/* Usamos ciudad_jdm.glb ya que es el modelo que tienes en la carpeta public/ */}
                <Model url="/ciudad_jdm.glb" />
                <Environment preset="city" />
            </Suspense>
            <OrbitControls
                makeDefault
                target={[0.0015, -0.0255, -0.0024]}

                // 1. BLOQUEAR ARRASTRE
                enablePan={false}

                // 2. LÍMITES DE ZOOM (Ajustados a tu distancia real de ~30)
                minDistance={15}   // Qué tan cerca pueden hacer zoom
                maxDistance={45}   // Qué tan lejos pueden hacer zoom

                // 3. BLOQUEAR ARRIBA / ABAJO
                // Calculado matemáticamente de tus coordenadas (aprox 84 grados)
                minPolarAngle={1.47}
                maxPolarAngle={1.47}

                // 4. LIMITAR ROTACIÓN ÚNICAMENTE A LA DERECHA
                // 2.589 es tu punto de partida exacto.
                // Al restarle Math.PI / 4, le permitimos girar 45 grados hacia un lado.
                maxAzimuthAngle={2.589 - Math.PI / 4}               // Tope izquierdo (Tu vista inicial, no pasa de aquí)
                minAzimuthAngle={2.589} // Tope derecho (Gira hasta aquí)
            />
        </Canvas>
    );
}

// Preload para que el modelo ya esté en caché cuando se vaya a renderizar
useGLTF.preload('/ciudad_jdm.glb');
