import { motion } from 'framer-motion';

const features = [
  {
    title: "Innovative Solutions",
    description: "Cutting-edge technology solutions tailored to your business needs",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: "Expert Team",
    description: "Skilled professionals with years of industry experience",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "24/7 Support    import { motion } from 'framer-motion';
    
    const features = [
      {
        title: "Innovative Solutions",
        description: "Cutting-edge technology solutions tailored to your business needs",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
      },
      {
        title: "Expert Team",
        description: "Skilled professionals with years of industry experience",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        ),
      },
      {
        title: "24/7 Support",
        description: "Round-the-clock assistance for all your technical needs",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        ),
      },
      {
        title: "Scalable Architecture",
        description: "Future-proof solutions that grow with your business",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
        ),
      },
      {
        title: "Custom Integrations",
        description: "Seamlessly integrate with your existing systems and workflows",
        icon: (
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v4m0-4h4m-4 0H8" />
          </svg>
        ),
      },
    ];
    
    const Features = () => {
      return (
        <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-primary to-background">
          {/* Background Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.15)_0%,transparent_75%)]" />
            <motion.div
              className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
          
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mx-auto max-w-2xl text-center"
            >
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Why Choose Us
              </h2>
              <p className="mt-6 text-xl leading-8 text-gray-100 max-w-2xl mx-auto font-medium">
                We combine innovation with expertise to deliver exceptional results for your business
              </p>
            </motion.div>
    
            {/* Features Grid */}
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                    whileHover={{ scale: 1.02 }}
                  >
                    {/* Card Background */}
                    <div className="absolute -inset-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-blue-500/30 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
                    </div>
                    
                    {/* Content */}
                    <div className="relative p-6">
                      <div className="flex items-center gap-x-4 mb-4">
                        <motion.div
                          className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-all duration-300"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          {feature.icon}
                        </motion.div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                          {feature.title}
                        </h3>
                      </div>
                      <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                        {feature.description}
                      </p>
                      
                      {/* Progress Bar */}
                      <motion.div
                        className="mt-6 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
    
            {/* Call to Action */}            import { motion } from 'framer-motion';
            
            const features = [
              {
                title: "Innovative Solutions",
                description: "Cutting-edge technology solutions tailored to your business needs",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: "Expert Team",
                description: "Skilled professionals with years of industry experience",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                ),
              },
              {
                title: "24/7 Support",
                description: "Round-the-clock assistance for all your technical needs",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
              {
                title: "Scalable Architecture",
                description: "Future-proof solutions that grow with your business",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
              },
              {
                title: "Custom Integrations",
                description: "Seamlessly integrate with your existing systems and workflows",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v4m0-4h4m-4 0H8" />
                  </svg>
                ),
              },
            ];
            
            const Features = () => {
              return (
                <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-primary to-background">
                  {/* Background Effects */}
                  <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.15)_0%,transparent_75%)]" />
                    <motion.div
                      className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{                      import { motion } from 'framer-motion';
                      
                      const features = [
                        {
                          title: "Innovative Solutions",
                          description: "Cutting-edge technology solutions tailored to your business needs",
                          icon: (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                          ),
                        },
                        {
                          title: "Expert Team",
                          description: "Skilled professionals with years of industry experience",
                          icon: (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          ),
                        },
                        {
                          title: "24/7 Support",
                          description: "Round-the-clock assistance for all your technical needs",
                          icon: (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          ),
                        },
                        {
                          title: "Scalable Architecture",
                          description: "Future-proof solutions that grow with your business",
                          icon: (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                            </svg>
                          ),
                        },
                        {
                          title: "Custom Integrations",
                          description: "Seamlessly integrate with your existing systems and workflows",
                          icon: (
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 8v4m0-4h4m-4 0H8" />
                            </svg>
                          ),
                        },
                      ];
                      
                      const Features = () => {
                        return (
                          <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-primary to-background">
                            {/* Background Effects */}
                            <div className="absolute inset-0 -z-10">
                              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.15)_0%,transparent_75%)]" />
                              <motion.div
                                className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
                                animate={{
                                  scale: [1, 1.2, 1],
                                  opacity: [0.3, 0.5, 0.3],
                                }}
                                transition={{
                                  duration: 8,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              />
                              <motion.div
                                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
                                animate={{
                                  scale: [1.2, 1, 1.2],
                                  opacity: [0.4, 0.6, 0.4],
                                }}
                                transition={{
                                  duration: 10,
                                  repeat: Infinity,
                                  ease: "easeInOut",
                                }}
                              />
                            </div>
                      
                            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                              {/* Header */}
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="mx-auto max-w-2xl text-center"
                              >
                                <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                                  Why Choose Us
                                </h2>
                                <p className="mt-6 text-xl leading-8 text-gray-100 max-w-2xl mx-auto font-medium">
                                  We combine innovation with expertise to deliver exceptional results for your business
                                </p>
                              </motion.div>
                      
                              {/* Features Grid */}
                              <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                                <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                                  {features.map((feature, index) => (
                                    <motion.div
                                      key={feature.title}
                                      initial={{ opacity: 0, y: 20 }}
                                      whileInView={{ opacity: 1, y: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ duration: 0.5, delay: index * 0.1 }}
                                      className="relative group"
                                      whileHover={{ scale: 1.02 }}
                                    >
                                      {/* Card Background */}
                                      <div className="absolute -inset-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-blue-500/30 transition-all duration-500">
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
                                      </div>
                      
                                      {/* Content */}
                                      <div className="relative p-6">
                                        <div className="flex items-center gap-x-4 mb-4">
                                          <motion.div
                                            className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-all duration-300"
                                            whileHover={{ rotate: 360 }}
                                            transition={{ duration: 0.5 }}
                                          >
                                            {feature.icon}
                                          </motion.div>
                                          <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                                            {feature.title}
                                          </h3>
                                        </div>
                                        <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                                          {feature.description}
                                        </p>
                      
                                        {/* Progress Bar */}
                                        <motion.div
                                          className="mt-6 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                                          initial={{ width: 0 }}
                                          whileInView={{ width: "100%" }}
                                          viewport={{ once: true }}
                                          transition={{ duration: 0.8, delay: index * 0.1 }}
                                        />
                                      </div>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                      
                              {/* Call to Action */}
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="mt-16 text-center"
                              >
                                <motion.button
                                  whileHover={{ scale: 1.05 }}
                                  whileTap={{ scale: 0.95 }}
                                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                                >
                                  Learn More About Our Process
                                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                  </svg>
                                </motion.button>
                              </motion.div>
                            </div>
                          </section>
                        );
                      };
                      
                      export default Features;
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
                      animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.4, 0.6, 0.4],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </div>
            
                  <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    {/* Header */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8 }}
                      className="mx-auto max-w-2xl text-center"
                    >
                      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                        Why Choose Us
                      </h2>
                      <p className="mt-6 text-xl leading-8 text-gray-100 max-w-2xl mx-auto font-medium">
                        We combine innovation with expertise to deliver exceptional results for your business
                      </p>
                    </motion.div>
            
                    {/* Features Grid */}
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                      <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
                        {features.map((feature, index) => (
                          <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative group"
                            whileHover={{ scale: 1.02 }}
                          >
                            {/* Card Background */}
                            <div className="absolute -inset-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-blue-500/30 transition-all duration-500">
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
                            </div>
            
                            {/* Content */}
                            <div className="relative p-6">
                              <div className="flex items-center gap-x-4 mb-4">
                                <motion.div
                                  className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-all duration-300"
                                  whileHover={{ rotate: 360 }}
                                  transition={{ duration: 0.5 }}
                                >
                                  {feature.icon}
                                </motion.div>
                                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                                  {feature.title}
                                </h3>
                              </div>
                              <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                                {feature.description}
                              </p>
            
                              {/* Progress Bar */}
                              <motion.div
                                className="mt-6 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: index * 0.1 }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
            
                    {/* Call to Action */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="mt-16 text-center"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Learn More About Our Process
                        <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </motion.button>
                    </motion.div>
                  </div>
                </section>
              );
            };
            
            export default Features;
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-16 text-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Learn More About Our Process
                <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.button>
            </motion.div>
          </div>
        </section>
      );
    };
    
    export default Features;",
    description: "Round-the-clock assistance for all your technical needs",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your technical needs",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Scalable Architecture",
    description: "Future-proof solutions that grow with your business",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-primary to-background">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(96,165,250,0.15)_0%,transparent_75%)]" />
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-100 max-w-2xl mx-auto font-medium">
            We combine innovation with expertise to deliver exceptional results for your business
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
                whileHover={{ scale: 1.02 }}
              >
                {/* Card Background */}
                <div className="absolute -inset-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 group-hover:border-blue-500/30 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl" />
                </div>
                
                {/* Content */}
                <div className="relative p-6">
                  <div className="flex items-center gap-x-4 mb-4">
                    <motion.div
                      className="h-12 w-12 flex items-center justify-center rounded-xl bg-blue-500/20 text-blue-400 group-hover:bg-blue-500/30 transition-all duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Progress Bar */}
                  <motion.div
                    className="mt-6 h-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Learn More About Our Process
            <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;