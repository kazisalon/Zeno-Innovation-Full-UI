import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const Hero = () => {
  const containerRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useSpring(1, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth - 0.5) * 2;
      const y = (clientY / innerHeight - 0.5) * 2;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="relative isolate overflow-hidden pt-14 min-h-screen">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(var(--accent-light-rgb),0.45)_0%,transparent_75%)] animate-gradient" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/40 via-accent/20 to-transparent animate-shimmer" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(45deg,rgba(var(--accent-light-rgb),0.3)_0%,transparent_50%)] animate-glow" />
      
      {/* Interactive 3D background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{
          background: `radial-gradient(circle at ${50 + mousePosition.x * 10}% ${50 + mousePosition.y * 10}%, rgba(var(--accent-light-rgb),0.15) 0%, transparent 50%)`,
          transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg)`,
        }}
      />
      
      <motion.div
        style={{ y, opacity }}
        className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="mx-auto max-w-2xl text-center relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Enhanced glass effect */}
          <div className="absolute -inset-x-20 -inset-y-10 glass-effect rounded-3xl -z-10 gradient-border group-hover:animate-glow transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light/30 to-accent/30 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--accent-light-rgb),0.2)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl animate-pulse" />
            <div className="absolute inset-0 backdrop-blur-xl bg-white/5 rounded-3xl" />
          </div>

          {/* Enhanced title with 3D effect */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 via-accent-light to-blue-600 bg-clip-text text-transparent animate-gradient hover-scale [text-shadow:0_4px_8px_rgba(var(--accent-light-rgb),0.2),0_8px_16px_rgba(var(--accent-light-rgb),0.1)]"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
            }}
          >
            Building the Future of Digital Innovation
          </motion.h1>

          {/* Enhanced description with animated underline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              stiffness: 50
            }}
            className="mt-6 text-lg leading-8 text-gray-300 hover-lift relative group"
          >
            We craft cutting-edge software solutions that transform businesses and elevate user experiences. From web applications to mobile platforms, we bring your digital vision to life.
            <motion.span
              className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-light to-accent group-hover:w-full transition-all duration-500"
              initial={{ width: 0 }}
              animate={{ width: isHovered ? "100%" : 0 }}
            />
          </motion.p>

          {/* Enhanced CTA buttons with hover effects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              type: "spring",
              stiffness: 100
            }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="relative overflow-hidden group px-8 py-3 rounded-full bg-gradient-to-r from-accent-light to-accent text-white font-semibold shadow-lg hover:shadow-[0_8px_32px_rgba(var(--accent-light-rgb),0.4),0_0_16px_rgba(var(--accent-light-rgb),0.6)] transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Start Your Project
                <motion.svg 
                  className="w-5 h-5 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  animate={{ x: isHovered ? 5 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </motion.svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2)_0%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </motion.a>
            <motion.a
              whileHover={{ x: 5, y: -2 }}
              href="/services"
              className="text-sm font-semibold leading-6 text-gray-200 hover:text-accent-light transition-all duration-300 flex items-center group"
            >
              Learn more
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="ml-2 group-hover:text-accent"
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced decorative elements */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <motion.div
          animate={{
            rotate: [30, 35, 30],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-accent to-blue-600 opacity-25 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-accent-light/30"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 50 - 25],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* New: Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="flex flex-col items-center"
        >
          <span className="text-sm text-gray-400 mb-2">Scroll to explore</span>
          <motion.div
            className="w-6 h-10 border-2 border-accent-light/30 rounded-full flex justify-center"
            initial={{ opacity: 0.5 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            <motion.div
              className="w-1.5 h-3 bg-accent-light rounded-full mt-2"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;