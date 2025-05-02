import { motion } from 'framer-motion';
import { CodeBracketIcon, CpuChipIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Modern Technology Stack',
    description: 'Built with cutting-edge technologies and frameworks to ensure optimal performance and scalability.',
    icon: CpuChipIcon,
  },
  {
    name: 'Secure by Design',
    description: 'Enterprise-grade security measures implemented at every layer of the application architecture.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Clean Code Architecture',
    description: 'Maintainable and scalable codebase following industry best practices and design patterns.',
    icon: CodeBracketIcon,
  },
  {
    name: 'Innovation First',
    description: 'Continuously integrating emerging technologies and innovative solutions to stay ahead.',
    icon: SparklesIcon,
  },
];

const Features = () => {
  return (
    <div className="py-24 sm:py-32 bg-primary relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--accent-light-rgb),0.15)_0%,transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-accent-light to-blue-600 bg-clip-text text-transparent">
            Cutting-edge Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-300">
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
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-16 group cursor-pointer">
                <motion.dt
                  whileHover={{ scale: 1.02 }}
                  className="text-xl font-semibold leading-7 text-white">
                  <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 border border-accent/20 group-hover:border-accent/40">
                    <feature.icon className="h-8 w-8 text-accent-light group-hover:text-accent transition-colors duration-300" aria-hidden="true" />
                  </div>
                  {feature.name}
                </motion.dt>
                <dd className="mt-2 text-base leading-7 text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </motion.div>
      </div>
    </div>
  );
};

export default Features;