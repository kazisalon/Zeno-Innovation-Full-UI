import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { CodeBracketIcon, DevicePhoneMobileIcon, GlobeAltIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import { useRef, useState, useEffect } from 'react';
import '../../styles/animations.css';

const services = [
  {
    name: 'Web Applications',
    description: 'Custom web applications built with modern technologies and frameworks, designed for scalability and performance.',
    icon: GlobeAltIcon,
    gradient: 'from-blue-400 to-accent',
    features: ['React & Next.js', 'Node.js Backend', 'Cloud Integration', 'Real-time Updates'],
  },
  {
    name: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    icon: DevicePhoneMobileIcon,
    gradient: 'from-purple-400 to-accent',
    features: ['iOS & Android', 'React Native', 'Flutter', 'Native APIs'],
  },
  {
    name: 'Custom Software',
    description: 'Tailored software solutions that automate processes and solve complex business challenges.',
    icon: CodeBracketIcon,
    gradient: 'from-green-400 to-accent',
    features: ['Process Automation', 'API Integration', 'Data Analytics', 'Custom Workflows'],
  },
  {
    name: 'Digital Innovation',
    description: 'Cutting-edge solutions leveraging the latest technologies in AI, IoT, and cloud computing.',
    icon: RocketLaunchIcon,
    gradient: 'from-red-400 to-accent',
    features: ['AI/ML Solutions', 'IoT Integration', 'Cloud Architecture', 'Blockchain'],
  },
];

const Services = () => {
  const containerRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
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
    <div ref={containerRef} className="section-padding bg-primary relative overflow-hidden">
      {/* Enhanced cyberpunk background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/40 to-transparent animate-gradient" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--accent-light-rgb),0.45)_0%,transparent_75%)] animate-shimmer" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(var(--accent-light-rgb),0.3)_0%,transparent_50%)] animate-glow" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAiIHN0cm9rZT0icmdiYSg1OSwxMzAsMjQ2LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-10" />
      
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
        className="mx-auto max-w-7xl relative px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-accent-light to-blue-600 bg-clip-text text-transparent animate-gradient hover-scale [text-shadow:0_4px_8px_rgba(var(--accent-light-rgb),0.2),0_8px_16px_rgba(var(--accent-light-rgb),0.1)]"
            style={{
              transform: `perspective(1000px) rotateX(${mousePosition.y * 2}deg) rotateY(${mousePosition.x * 2}deg)`,
            }}
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-300 hover-lift"
          >
            Comprehensive software solutions tailored to your business needs
          </motion.p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer relative animate-float"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-90`} />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(var(--accent-light-rgb),0.2)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl animate-pulse" />
              <div className="relative glass-effect rounded-xl p-6 border border-white/25 group-hover:border-accent/60 transition-all duration-500 cyberpunk-border shadow-lg group-hover:shadow-[0_8px_32px_rgba(var(--accent-light-rgb),0.3),0_0_16px_rgba(var(--accent-light-rgb),0.5)]">
                <div className={`absolute inset-0 bg-gradient-to-tr ${service.gradient} opacity-0 group-hover:opacity-30 transition-all duration-500 rounded-xl`} />
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center group-hover:opacity-80 transition-all duration-300 pulse-glow shadow-lg group-hover:shadow-[0_4px_16px_rgba(var(--accent-light-rgb),0.4),0_0_8px_rgba(var(--accent-light-rgb),0.6)]`}
                  >
                    <service.icon className="h-6 w-6 text-white group-hover:text-white transition-all duration-300 transform group-hover:scale-110" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className={`mt-6 text-xl font-semibold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent animate-gradient [text-shadow:0_2px_4px_rgba(var(--accent-light-rgb),0.1)]`}
                  >
                    {service.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="mt-4 text-gray-300 group-hover:text-gray-200 transition-colors duration-300"
                  >
                    {service.description}
                  </motion.p>
                  
                  {/* Feature list */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hoveredIndex === index ? 1 : 0,
                      height: hoveredIndex === index ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 overflow-hidden"
                  >
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          className="flex items-center text-sm text-gray-300"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent-light mr-2" />
                          {feature}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Enhanced floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-accent-light/20"
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
    </div>
  );
};

export default Services;