import { useEffect, useRef } from 'react';

const stats = [
  { label: 'Projects Completed', value: 120 },
  { label: 'Happy Clients', value: 85 },
  { label: 'Awards Won', value: 15 },
  { label: 'Years Experience', value: 7 },
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
    <section className="w-full py-16 bg-gradient-to-r from-blue-50 via-cyan-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Our Achievements</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => {
            const ref = useCountUp(stat.value);
            return (
              <div key={stat.label} className="flex flex-col items-center">
                <span ref={ref} className="text-4xl font-extrabold text-cyan-600 dark:text-cyan-400" />
                <span className="mt-2 text-lg text-gray-700 dark:text-gray-300">{stat.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 