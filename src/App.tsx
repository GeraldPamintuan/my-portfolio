import About from './pages/About';
import { AnimatePresence } from 'framer-motion';
import Background from './components/Background';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import WelcomeScreen from './pages/WelcomeScreen/WelcomeScreen';
import { useState } from 'react';

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <Background />
          <section id="home" className="min-h-screen">
            <Home />
          </section>

          <section id="about" className="min-h-screen">
            <About />
          </section>

          <section id="projects" className="min-h-screen">
            <Projects />
          </section>

          <section id="contact" className="min-h-screen">
            <Contact />
          </section>

          <Footer />
        </>
      )}
    </>
  );
}

export default App;
