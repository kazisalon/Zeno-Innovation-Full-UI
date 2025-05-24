import { motion, useScroll, useTransform } from 'framer-motion';
import { CodeBracketIcon, CpuChipIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { useRef } from 'react';

const features = [
  {
    name: 'Modern Technology Stack',
    description: 'Built with cutting-edge technologies and frameworks to ensure optimal performance and scalability.',
    icon: CpuChipIcon,
    gradient: 'from-blue-400 to-accent',
  },
  {
    name: 'Secure by Design',
    description: 'Enterprise-grade security measures implemented at every layer of the application architecture.',
    icon: ShieldCheckIcon,
    gradient: 'from-green-400 to-accent',
  },
  {
    name: 'Clean Code Architecture',
    description: 'Maintainable and scalable codebase following industry best practices and design patterns.',
    icon: CodeBracketIcon,
    gradient: 'from-purple-400 to-accent',
  },
  {
    name: 'Innovation First',
    description: 'Continuously integrating emerging technologies and innovative solutions to stay ahead.',
    icon: SparklesIcon,
    gradient: 'from-red-400 to-accent',
  },
];

const Features = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <div ref={containerRef} className="py-24 sm:py-32 bg-primary relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--accent-light-rgb),0.15)_0%,transparent_70%)] animate-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent animate-shimmer" />
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
          className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-accent-light to-blue-600 bg-clip-text text-transparent animate-gradient hover-scale [text-shadow:0_4px_8px_rgba(var(--accent-light-rgb),0.2),0_8px_16px_rgba(var(--accent-light-rgb),0.1)]">
            Cutting-edge Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-300 hover-lift">
            Discover why our solutions stand out in the digital landscape
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -5, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-70`} />
                <div className="relative glass-effect rounded-xl p-6 border border-white/10 group-hover:border-accent/30 transition-all duration-500 shadow-lg group-hover:shadow-[0_8px_32px_rgba(var(--accent-light-rgb),0.3),0_0_16px_rgba(var(--accent-light-rgb),0.5)]">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${feature.gradient} opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl`} />
                  <div className="relative flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className={`flex-shrink-0 h-12 w-12 rounded-lg bg-gradient-to-r ${feature.gradient} flex items-center justify-center group-hover:opacity-80 transition-all duration-300 shadow-lg group-hover:shadow-[0_4px_16px_rgba(var(--accent-light-rgb),0.4),0_0_8px_rgba(var(--accent-light-rgb),0.6)]`}>
                      <feature.icon className="h-6 w-6 text-white group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className={`text-xl font-semibold leading-7 bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent animate-gradient [text-shadow:0_2px_4px_rgba(var(--accent-light-rgb),0.1)]`}>
                        {feature.name}
                      </motion.h3>
                      <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 }}
                        className="mt-2 text-base leading-7 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {feature.description}
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
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

export default Features;