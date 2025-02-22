<template>
    <section id="home" class="pt-24 bg-gradient-to-r from-indigo-500 to-purple-600">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
            {{ title }}
            <span class="block text-indigo-200">{{ subtitle }}</span>
          </h1>
          <p class="mt-3 max-w-md mx-auto text-lg text-gray-200 sm:text-xl md:mt-5 md:max-w-3xl">
            {{ description }}
          </p>
          <div class="mt-10 flex justify-center gap-4">
            <a href="#contact" 
               class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50">
              Get Started
            </a>
            <a href="#services" 
               class="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-indigo-400 hover:bg-opacity-20">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'HeroSection',
    data() {
      return {
        title: 'Innovating the Future',
        subtitle: 'With Cutting-Edge Technology',
        description: 'Transform your business with our innovative solutions. We combine expertise in software development, AI, and cloud technologies to deliver exceptional results.'
      }
    }
  }
  </script>
  
  