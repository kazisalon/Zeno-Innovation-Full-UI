import { motion } from 'framer-motion';
import { CodeBracketIcon, DevicePhoneMobileIcon, GlobeAltIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';
import '../../styles/animations.css';

const services = [
  {
    name: 'Web Applications',
    description: 'Custom web applications built with modern technologies and frameworks, designed for scalability and performance.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Mobile Development',
    description: 'Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: 'Custom Software',
    description: 'Tailored software solutions that automate processes and solve complex business challenges.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Digital Innovation',
    description: 'Cutting-edge solutions leveraging the latest technologies in AI, IoT, and cloud computing.',
    icon: RocketLaunchIcon,
  },
];

const Services = () => {
  return (
    <div className="section-padding bg-primary relative overflow-hidden">
      {/* Enhanced background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/10 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--accent-light-rgb),0.15)_0%,transparent_70%)] animate-gradient" />
      <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(var(--accent-light-rgb),0.05)_0%,transparent_40%)] animate-shimmer" />
      
      <div className="mx-auto max-w-7xl relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-accent-light to-blue-600 bg-clip-text text-transparent"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-lg text-gray-300"
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
              whileHover={{ y: -8, scale: 1.03, rotateX: 5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group cursor-pointer backdrop-blur-sm bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-accent/5 transform-gpu hover:shadow-[0_0_30px_rgba(var(--accent-light-rgb),0.2)] transition-all duration-500 ease-out"
            >
              <div className="relative p-6">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-accent-light to-accent opacity-0 group-hover:opacity-20 transition-all duration-500 blur-xl animate-pulse" style={{ animationDuration: '2s' }} />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-tr from-accent-light/20 to-transparent opacity-0 group-hover:opacity-10 transition-all duration-500" />
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  >
                    <service.icon className="h-12 w-12 text-accent-light group-hover:text-accent transition-colors duration-300" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="mt-6 text-xl font-semibold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-accent-light group-hover:to-accent"
                  >
                    {service.name}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="mt-4 text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                  >
                    {service.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;