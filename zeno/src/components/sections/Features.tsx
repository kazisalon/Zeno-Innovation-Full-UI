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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--accent-light-rgb),0.15)_0%,transparent_70%)] animate-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent animate-shimmer" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
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
            className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 via-accent-light to-blue-600 bg-clip-text text-transparent animate-gradient hover-scale">
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
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-accent-light/20 to-accent/20 rounded-xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-70" />
                <div className="relative glass-effect rounded-xl p-6 border border-white/10 group-hover:border-accent/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent-light/10 to-transparent opacity-0 group-hover:opacity-20 transition-all duration-500 rounded-xl" />
                  <div className="relative flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="flex-shrink-0 h-12 w-12 rounded-lg bg-gradient-to-r from-accent-light/20 to-accent/20 flex items-center justify-center group-hover:from-accent-light/30 group-hover:to-accent/30 transition-all duration-300">
                      <feature.icon className="h-6 w-6 text-accent-light group-hover:text-accent transition-colors duration-300" aria-hidden="true" />
                    </motion.div>
                    <div className="flex-1">
                      <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="text-xl font-semibold leading-7 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-accent-light group-hover:to-accent animate-gradient">
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
      </div>
    </div>
  );
};

export default Features;