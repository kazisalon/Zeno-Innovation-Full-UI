import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-primary/30 backdrop-blur-3xl border-b border-white/10 shadow-[0_0_40px_rgba(59,130,246,0.4)] animate-gradient cyberpunk-border">

      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120, duration: 0.6 }}
          className="flex lg:flex-1"
        >
          <Link to="/" className="-m-1.5 p-1.5 group">
            <motion.span 
              whileHover={{ scale: 1.1, rotate: 3 }}
              className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 bg-clip-text text-transparent glow-effect neon-text animate-float"
            >
              ZENO
            </motion.span>
          </Link>
        </motion.div>
        <div className="flex lg:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2.5 text-gray-300 hover:text-cyan-400 transition-colors duration-300 bg-white/5 hover:bg-white/10"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-7 w-7" aria-hidden="true" />
          </motion.button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 120, duration: 0.6, delay: 0.3 }}
          className="hidden lg:flex lg:gap-x-14"
        >
          {navigation.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <Link
                to={item.href}
                className="nav-link text-lg font-semibold text-white hover:text-cyan-300 transition-all duration-300 relative group px-5 py-3 rounded-xl glass-effect hover:bg-white/20 hover:shadow-[0_0_40px_rgba(34,211,238,0.7)] border border-white/10 hover:border-cyan-400/50 pulse-glow"
              >
                {item.name}
                <span className="absolute inset-x-2 bottom-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 glow-effect shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hidden lg:flex lg:flex-1 lg:justify-end"
        >
          <Link
            to="/contact"
            className="relative overflow-hidden group px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold text-base shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:shadow-[0_0_45px_rgba(59,130,246,0.8)] transition-all duration-300 border border-white/20 hover:border-white/40 animate-gradient pulse-glow"
          >
            <span className="relative z-10">Get Started</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-700 opacity-0 group-hover:opacity-100"
              transition={{ duration: 0.4 }}
            />
          </Link>
        </motion.div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        />
        <Dialog.Panel className="fixed Inset-y-0 right-0 z-50 w-full sm:w-3/4 max-w-sm overflow-y-auto bg-primary/95 backdrop-blur-xl px-6 py-6 border-l border-cyan-500/30 shadow-[0_0_40px_rgba(59,130,246,0.4)] glass-effect cyberpunk-border">
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex items-center justify-between"
          >
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 bg-clip-text text-transparent neon-text animate-float">
                ZENO
              </span>
            </Link>
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="button"
              className="rounded-full p-2.5 text-gray-300 hover:text-cyan-400 bg-white/10 hover:bg-white/20 transition-all duration-300 pulse-glow"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-7 w-7" aria-hidden="true" />
            </motion.button>
          </motion.div>
          <div className="mt-8 flow-root">
            <div className="space-y-4">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Link
                    to={item.href}
                    className="block rounded-xl px-5 py-4 text-xl font-semibold text-white hover:text-cyan-300 glass-effect hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] relative group overflow-hidden hover:scale-[1.02] hover:-translate-y-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="absolute -inset-1 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 }}
                className="mt-6"
              >
                <Link
                  to="/contact"
                  className="block text-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-[0_0_30px_rgba(59,130,246,0.6)] hover:shadow-[0_0_45px_rgba(59,130,246,0.8)] border border-white/20 hover:border-white/40 animate-gradient pulse-glow hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}