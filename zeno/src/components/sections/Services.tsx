import { motion } from 'framer-motion';
import { CodeBracketIcon, DevicePhoneMobileIcon, GlobeAltIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

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
    <div className="section-padding bg-primary">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Comprehensive software solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group hover:bg-accent/10 cursor-pointer"
            >
              <div className="relative">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-accent-light to-accent opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative">
                  <service.icon className="h-12 w-12 text-accent-light group-hover:text-accent transition-colors duration-300" />
                  <h3 className="mt-6 text-xl font-semibold text-white">{service.name}</h3>
                  <p className="mt-4 text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                    {service.description}
                  </p>
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