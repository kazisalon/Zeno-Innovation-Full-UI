<!-- src/components/sections/ServicesSection.vue -->
<template>
  <section id="services" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Our Services
        </h2>
        <p class="mt-4 text-xl text-gray-600">
          Comprehensive solutions for your technological needs
        </p>
      </div>

      <div class="mt-20 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div v-for="service in services" 
             :key="service.title" 
             class="bg-gray-50 p-6 rounded-lg hover:shadow-lg transition-shadow duration-300">
          <div class="w-12 h-12 bg-indigo-500 rounded-md flex items-center justify-center">
            <svg class="w-6 h-6 text-white" v-html="service.icon"></svg>
          </div>
          <h3 class="mt-4 text-xl font-medium text-gray-900">{{ service.title }}</h3>
          <p class="mt-2 text-gray-600">{{ service.description }}</p>
          <ul class="mt-4 space-y-2">
            <li v-for="(feature, index) in service.features" 
                :key="index" 
                class="flex items-center text-gray-600">
              <svg class="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ServicesSection',
  data() {
    return {
      services: [
        {
          title: 'Software Development',
          description: 'Custom software solutions tailored to your business needs.',
          icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>`,
          features: [
            'Custom Web Applications',
            'Mobile Apps',
            'Enterprise Software',
            'API Integration'
          ]
        },
        {
          title: 'AI Solutions',
          description: 'Intelligent systems powered by cutting-edge AI technology.',
          icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>`,
          features: [
            'Machine Learning',
            'Natural Language Processing',
            'Computer Vision',
            'Predictive Analytics'
          ]
        },
        {
          title: 'Cloud Services',
          description: 'Scalable cloud infrastructure and solutions.',
          icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/>`,
          features: [
            'Cloud Migration',
            'DevOps',
            'Serverless Architecture',
            'Cloud Security'
          ]
        }
      ]
    }
  }
}
</script>