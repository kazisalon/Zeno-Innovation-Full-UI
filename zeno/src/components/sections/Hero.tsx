import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative isolate overflow-hidden pt-14">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(var(--accent-light-rgb),0.15)_0%,transparent_70%)] animate-gradient" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/10 via-accent/5 to-transparent animate-shimmer" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(45deg,rgba(var(--accent-light-rgb),0.1)_0%,transparent_40%)] animate-glow" />
      
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", stiffness: 100 }}
          className="mx-auto max-w-2xl text-center relative group"
        >
          <div className="absolute -inset-x-20 -inset-y-10 glass-effect rounded-3xl -z-10 gradient-border group-hover:animate-glow transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-r from-accent-light/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl" />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              type: "spring",
              stiffness: 100
            }}
            className="text-4xl font-bold tracking-tight sm:text-6xl bg-gradient-to-r from-blue-400 via-accent-light to-blue-600 bg-clip-text text-transparent animate-gradient hover-scale"
          >
            Building the Future of Digital Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              stiffness: 50
            }}
            className="mt-6 text-lg leading-8 text-gray-300 hover-lift"
          >
            We craft cutting-edge software solutions that transform businesses and elevate user experiences. From web applications to mobile platforms, we bring your digital vision to life.
          </motion.p>
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
              className="relative overflow-hidden group px-8 py-3 rounded-full bg-gradient-to-r from-accent-light to-accent text-white font-semibold shadow-lg hover:shadow-accent/50 transition-all duration-300"
            >
              <span className="relative z-10 flex items-center">
                Start Your Project
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light opacity-0 group-hover:opacity-100 transition-all duration-300" />
            </motion.a>
            <motion.a
              whileHover={{ x: 5, y: -2 }}
              href="/services"
              className="text-sm font-semibold leading-6 text-gray-300 hover:text-accent-light transition-all duration-300 flex items-center group"
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
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent to-blue-600 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
};

export default Hero;