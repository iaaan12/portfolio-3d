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

function App() {
  const [view, setView] = useState(null); // null = welcome screen, 'portfolio', or 'rpg'

  return (
    <>
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
    </>
  );
}

export default App;
