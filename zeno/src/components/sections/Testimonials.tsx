import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useState, useRef } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const testimonials = [
  {
    content: "Zeno transformed our digital presence with their innovative solutions. The team's expertise and dedication were exceptional.",
    author: "Sarah Johnson",
    role: "CTO, TechVision Inc.",
    gradient: "from-blue-400 to-accent",
  },
  {
    content: "The attention to detail and technical excellence displayed by Zeno's team exceeded our expectations. A truly remarkable partnership.",
    author: "Michael Chen",
    role: "Founder, InnovateLab",
    gradient: "from-purple-400 to-accent",
  },
  {
    content: "Working with Zeno was a game-changer for our business. Their solutions are not just innovative but also highly scalable.",
    author: "Emily Rodriguez",
    role: "Product Director, FutureScale",
    gradient: "from-green-400 to-accent",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div ref={containerRef} className="py-24 sm:py-32 bg-primary/80 relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(var(--accent-light-rgb),0.2)_0%,transparent_70%)] animate-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-accent/5 to-transparent animate-shimmer" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(var(--accent-light-rgb),0.1)_0%,transparent_50%)] animate-glow" />

      <motion.div 
        style={{ y, opacity }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="mx-auto max-w-xl text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-accent-light to-blue-600 bg-clip-text text-transparent animate-gradient hover-scale [text-shadow:0_4px_8px_rgba(var(--accent-light-rgb),0.2),0_8px_16px_rgba(var(--accent-light-rgb),0.1)]">
            Client Success Stories
          </motion.h2>
        </motion.div>

        <div className="mx-auto mt-16 flow-root sm:mt-20">
          <div className="relative rounded-2xl glass-effect p-2 gradient-border lg:p-4">
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                  className="relative rounded-2xl glass-effect p-6 sm:p-10 hover:animate-glow">
                  <div className={`absolute inset-0 bg-gradient-to-r ${testimonials[currentIndex].gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500`} />
                  <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="relative hover-lift">
                    <p className="text-xl font-semibold leading-8 tracking-tight text-white sm:text-2xl sm:leading-9 animate-gradient">
                      {testimonials[currentIndex].content}
                    </p>
                    <div className="mt-8 flex items-center gap-x-4">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`w-14 h-14 rounded-full bg-gradient-to-r ${testimonials[currentIndex].gradient} flex items-center justify-center text-2xl font-bold text-white shadow-lg hover:shadow-accent/50 transition-all duration-300`}>
                        {testimonials[currentIndex].author[0]}
                      </motion.div>
                      <div className="hover-lift">
                        <div className={`font-semibold text-white bg-gradient-to-r ${testimonials[currentIndex].gradient} bg-clip-text text-transparent`}>
                          {testimonials[currentIndex].author}
                        </div>
                        <div className="text-sm leading-6 text-gray-400">{testimonials[currentIndex].role}</div>
                      </div>
                    </div>
                  </motion.blockquote>
                </motion.div>
              </AnimatePresence>

              {/* Navigation buttons */}
              <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-between w-full px-4">
                <motion.button
                  whileHover={{ scale: 1.1, x: -2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevTestimonial}
                  className="rounded-full p-3 text-gray-400 hover:text-white glass-effect hover:bg-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30">
                  <ChevronLeftIcon className="h-6 w-6" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1, x: 2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextTestimonial}
                  className="rounded-full p-3 text-gray-400 hover:text-white glass-effect hover:bg-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/30">
                  <ChevronRightIcon className="h-6 w-6" />
                </motion.button>
              </div>

              {/* Progress indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-accent-light scale-125' : 'bg-gray-600'
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent-light/20"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;