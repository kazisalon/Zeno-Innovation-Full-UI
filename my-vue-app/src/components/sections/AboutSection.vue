<template>
    <section id="about" class="py-20 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div>
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Zeno Innovation
            </h2>
            <p class="mt-3 max-w-3xl text-lg text-gray-600">
              {{ aboutText }}
            </p>
            <div class="mt-8 space-y-6">
              <div v-for="(highlight, index) in highlights" 
                   :key="index" 
                   class="flex">
                <div class="flex-shrink-0">
                  <div class="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg class="h-6 w-6" v-html="highlight.icon"></svg>
                  </div>
                </div>
                <div class="ml-4">
                  <h4 class="text-lg font-medium text-gray-900">{{ highlight.title }}</h4>
                  <p class="mt-2 text-gray-600">{{ highlight.description }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-10 lg:mt-0">
            <img class="rounded-lg shadow-xl" src="/api/placeholder/600/400" alt="Team working">
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'AboutSection',
    data() {
      return {
        aboutText: 'We are a team of passionate technologists dedicated to pushing the boundaries of innovation. With years of experience in software development, AI, and cloud solutions, we help businesses transform their digital presence.',
        highlights: [
          {
            title: 'Proven Expertise',
            description: 'Over a decade of experience in delivering innovative solutions.',
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>'
          },
          {
            title: 'Global Reach',
            description: 'Serving clients across multiple continents with diverse needs.',
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"/>'
          },
          {
            title: 'Innovation First',
            description: 'Constantly exploring new technologies and methodologies.',
            icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
          }
        ]
      }
    }
  }
  </script>