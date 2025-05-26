import { BrowserRouter as Router } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import Services from './components/sections/Services';
import Features from './components/sections/Features';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-primary relative">
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--accent-light-rgb),0.08)_0%,transparent_100%)] pointer-events-none" />
        <div className="fixed inset-0 bg-[linear-gradient(to_right,rgba(var(--accent-light-rgb),0.02)_1px,transparent_1px)] bg-[size:3rem_100%] pointer-events-none blur-[1px]" />
        
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />
            <main className="relative z-10">
              <Hero />
              <Services />
              <Features />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App
