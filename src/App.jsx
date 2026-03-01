import { useState } from 'react';
import AlternativeNavbar from './components/AlternativeNavbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Shopify from './components/Shopify';
import Contact from './components/Contact';
import WelcomeScreen from './components/WelcomeScreen';
import RpgGame from './components/RpgGame';
import { AnimatePresence } from 'framer-motion';

// Global Contexts and UI
import { AudioProvider } from './context/AudioContext';
import AudioController from './components/ui/AudioController';
import { Loader } from '@react-three/drei';

function App() {
  const [view, setView] = useState(null); // null = welcome screen, 'portfolio', or 'rpg'

  return (
    <AudioProvider>
      {/* Global Loading overlay for 3D assets/Suspense */}
      <Loader
        containerStyles={{ background: '#000000', zIndex: 99999 }}
        innerStyles={{ background: 'rgba(255, 255, 255, 0.1)', height: '2px', width: '200px' }}
        barStyles={{ background: '#ffffff', height: '2px' }}
        dataInterpolation={(p) => `Cargando Recursos ${p.toFixed(0)}%`}
      />

      <AnimatePresence mode="wait">
        {!view && <WelcomeScreen key="welcome" onSelect={setView} />}
      </AnimatePresence>

      {view === 'portfolio' && (
        <>
          <AlternativeNavbar />
          <Hero />
          <About />
          <Portfolio />
          <Shopify />
          <Contact />
        </>
      )}

      {view === 'rpg' && <RpgGame onBack={setView} />}

      {/* Global Mute/Unmute Toggle Button */}
      <AudioController />
    </AudioProvider>
  );
}

export default App;
