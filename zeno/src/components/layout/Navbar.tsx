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
    <header className="fixed inset-x-0 top-0 z-50 bg-primary/20 backdrop-blur-xl border-b border-white/5 shadow-[0_0_20px_rgba(59,130,246,0.2)]">
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
              className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 bg-clip-text text-transparent glow-effect"
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
                className="text-base font-medium text-gray-200 hover:text-cyan-400 transition-all duration-300 relative group px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10"
              >
                {item.name}
                <span className="absolute inset-x-2 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 glow-effect" />
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
            className="relative overflow-hidden group px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-base shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-300"
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
        <Dialog.Panel className="fixed	Inset-y-0 right-0 z-50 w-full sm:w-3/4 max-w-sm overflow-y-auto bg-primary/95 backdrop-blur-xl px-6 py-6 border-l border-cyan-500/30 shadow-[0_0_30px_rgba(59,130,246,0.3)]">
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="flex items-center justify-between"
          >
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                ZENO
              </span>
            </Link>
            <motion.button
              whileTap={{ scale: 0.9 }}
              type="button"
              className="rounded-full p-2.5 text-gray-300 hover:text-cyan-400 bg-white/10"
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
                    className="block rounded-xl px-4 py-3 text-lg font-medium text-gray-200 hover:text-cyan-400 bg-white/5 hover:bg-white/10 transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
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
                  className="block text-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
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