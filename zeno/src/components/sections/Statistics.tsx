import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Completed', value: 120, icon: (
    <svg className="w-8 h-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2a4 4 0 014-4h4V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2h2z" /></svg>
  ) },
  { label: 'Happy Clients', value: 85, icon: (
    <svg className="w-8 h-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  ) },
  { label: 'Awards Won', value: 15, icon: (
    <svg className="w-8 h-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3zm0 0V4m0 7v7m0 0l-3 3m3-3l3 3" /></svg>
  ) },
  { label: 'Years Experience', value: 7, icon: (
    <svg className="w-8 h-8 text-cyan-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ) },
];

function useCountUp(end: number, duration = 2000) {
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    let current = start;
    const el = ref.current;
    if (!el) return;
    el.textContent = '0';
    const step = () => {
      current += increment;
      if (current < end) {
        el.textContent = Math.floor(current).toString();
        requestAnimationFrame(step);
      } else {
        el.textContent = end.toString();
      }
    };
    step();
  }, [end, duration]);
  return ref;
}

export default function Statistics() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute -z-10 top-1/3 left-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -z-10 bottom-1/4 right-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="max-w-5xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-gray-800 dark:text-white"
        >
          Our Achievements
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const ref = useCountUp(stat.value);
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white/60 dark:bg-gray-800/60 rounded-2xl shadow-lg p-6 group transition-all duration-300 hover:shadow-2xl"
              >
                <div className="mb-2">{stat.icon}</div>
                <span ref={ref} className="text-4xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent group-hover:from-cyan-400 group-hover:to-blue-400 transition-colors duration-300" />
                <span className="mt-2 text-lg text-gray-700 dark:text-gray-300">{stat.label}</span>
                <motion.div
                  className="mt-3 h-1 w-0 bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:w-full transition-all duration-500 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 