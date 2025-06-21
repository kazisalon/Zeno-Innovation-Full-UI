import { useState, useEffect, useRef } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Services', href: '/services', notification: 2 },
  { name: 'Projects', href: '/projects', notification: 0 },
  { name: 'About', href: '/about', notification: 0 },
  { name: 'Contact', href: '/contact', notification: 1 },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Mock search suggestions
  const mockSuggestions = [
    'Web Development', 'Mobile Apps', 'UI/UX Design', 'Cloud Solutions',
    'AI Integration', 'E-commerce', 'API Development', 'Consulting'
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchOpen(false);
        setShowSuggestions(false);
      }
    };

    // Swipe to close mobile menu
    const handleTouchStart = (e: TouchEvent) => {
      if (mobileMenuRef.current && mobileMenuOpen) {
        const touch = e.touches[0];
        const startX = touch.clientX;
        
        const handleTouchMove = (e: TouchEvent) => {
          const touch = e.touches[0];
          const currentX = touch.clientX;
          const diffX = startX - currentX;
          
          if (diffX > 50) { // Swipe left to close
            setMobileMenuOpen(false);
            document.removeEventListener('touchmove', handleTouchMove);
          }
        };
        
        document.addEventListener('touchmove', handleTouchMove, { passive: true });
      }
    };

    // Search suggestions
    if (searchQuery.length > 2) {
      const filtered = mockSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleTouchStart);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [scrolled, searchQuery, mobileMenuOpen]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-primary/80 backdrop-blur-2xl shadow-lg border-b border-white/10' 
        : 'bg-primary/30 backdrop-blur-3xl border-b border-white/10'
    }`}>
      {/* Enhanced Scroll Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 origin-left"
        style={{ scaleX }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 blur-sm"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", stiffness: 120, duration: 0.6 }}
          className="flex lg:flex-1"
        >
          <Link to="/" className="-m-1.5 p-1.5 group relative" 
                onMouseEnter={() => setLogoHovered(true)}
                onMouseLeave={() => setLogoHovered(false)}>
            {/* Enhanced Particle Effect */}
            <div className="absolute inset-0 -z-10">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-cyan-400"
                  animate={{
                    x: logoHovered ? [0, Math.random() * 40 - 20] : [0, Math.random() * 20 - 10],
                    y: logoHovered ? [0, Math.random() * 40 - 20] : [0, Math.random() * 20 - 10],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1.5, 0],
                  }}
                  transition={{
                    duration: logoHovered ? 1.5 : 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
            <motion.span 
              whileHover={{ scale: 1.1, rotate: 3 }}
              animate={{ 
                filter: logoHovered ? 'drop-shadow(0 0 20px rgba(34, 211, 238, 0.8))' : 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.4))'
              }}
              className="text-3xl font-extrabold bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 bg-clip-text text-transparent glow-effect neon-text animate-float relative"
            >
              ZENO
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-700 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                style={{ filter: 'blur(8px)' }}
              />
            </motion.span>
          </Link>
        </motion.div>

        <div className="flex items-center gap-4 lg:hidden">
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2.5 text-gray-300 hover:text-cyan-400 transition-colors duration-300 bg-white/5 hover:bg-white/10"
            onClick={() => setSearchOpen(true)}
          >
            <span className="sr-only">Search</span>
            <MagnifyingGlassIcon className="h-7 w-7" aria-hidden="true" />
          </motion.button>
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
              className="relative"
            >
              <Link
                to={item.href}
                className="nav-link text-lg font-semibold text-white hover:text-cyan-300 transition-all duration-300 relative group px-5 py-3 rounded-xl glass-effect hover:bg-white/20 hover:shadow-[0_0_40px_rgba(34,211,238,0.7)] border border-white/10 hover:border-cyan-400/50 pulse-glow"
              >
                {item.name}
                <span className="absolute inset-x-2 bottom-0 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 glow-effect shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/30 to-blue-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute -inset-1 rounded-xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-300" />
                {item.notification > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.2 }}
                    className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white"
                  >
                    <motion.span
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.8, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {item.notification}
                    </motion.span>
                  </motion.span>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4"
        >
          <motion.button
            whileTap={{ scale: 0.9 }}
            type="button"
            className="inline-flex items-center justify-center rounded-full p-2.5 text-gray-300 hover:text-cyan-400 transition-colors duration-300 bg-white/5 hover:bg-white/10"
            onClick={() => setSearchOpen(true)}
          >
            <span className="sr-only">Search</span>
            <MagnifyingGlassIcon className="h-6 w-6" aria-hidden="true" />
          </motion.button>
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

      {/* Search Overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            onClick={() => setSearchOpen(false)}
          >
            <motion.div
              ref={searchRef}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="absolute top-20 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-6 py-4 rounded-2xl bg-primary/80 backdrop-blur-xl border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-transparent shadow-lg"
                  aria-label="Search"
                  aria-expanded={showSuggestions}
                  aria-haspopup="listbox"
                />
                <MagnifyingGlassIcon className="absolute right-6 top-1/2 -translate-y-1/2 h-6 w-6 text-gray-400" />
                
                {/* Search Suggestions */}
                {showSuggestions && searchSuggestions.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-primary/90 backdrop-blur-xl border border-white/10 rounded-xl shadow-lg overflow-hidden"
                    role="listbox"
                  >
                    {searchSuggestions.map((suggestion, index) => (
                      <motion.button
                        key={suggestion}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="w-full px-4 py-3 text-left text-white hover:bg-white/10 transition-colors duration-200 focus:bg-white/10 focus:outline-none"
                        onClick={() => {
                          setSearchQuery(suggestion);
                          setShowSuggestions(false);
                        }}
                        role="option"
                      >
                        {suggestion}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Enhanced Mobile Menu */}
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
        />
        <Dialog.Panel 
          ref={mobileMenuRef}
          className="fixed inset-y-0 right-0 z-50 w-full sm:w-3/4 max-w-sm overflow-y-auto bg-primary/95 backdrop-blur-xl px-6 py-6 border-l border-cyan-500/30 shadow-[0_0_40px_rgba(59,130,246,0.4)] glass-effect cyberpunk-border"
        >
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-6 flow-root"
          >
            <div className="space-y-4">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative"
                >
                  <Link
                    to={item.href}
                    className="block rounded-xl px-5 py-4 text-xl font-semibold text-white hover:text-cyan-300 glass-effect hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-cyan-400/50 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_50px_rgba(34,211,238,0.6)] relative group overflow-hidden hover:scale-[1.02] hover:-translate-y-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="relative z-10 flex items-center justify-between">
                      {item.name}
                      {item.notification > 0 && (
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          whileHover={{ scale: 1.2 }}
                          className="flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs text-white"
                        >
                          <motion.span
                            animate={{ 
                              scale: [1, 1.2, 1],
                              opacity: [1, 0.8, 1]
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              ease: "easeInOut"
                            }}
                          >
                            {item.notification}
                          </motion.span>
                        </motion.span>
                      )}
                    </span>
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
                
                {/* Back to Top Button */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="mt-4 w-full text-center px-6 py-3 rounded-full bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setMobileMenuOpen(false);
                  }}
                >
                  Back to Top
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}