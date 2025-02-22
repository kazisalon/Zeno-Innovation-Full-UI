<template>
	<div class="min-h-screen bg-gray-50">
	  <TheNavbar />
	  <main>
		<HeroSection />
		<ServicesSection />
		<AboutSection />
		<ContactSection />
	  </main>
	  <TheFooter />
	</div>
  </template>
  
  <script>
  import TheNavbar from './components/layout/TheNavbar.vue'
  import TheFooter from './components/layout/TheFooter.vue'
  import HeroSection from './components/sections/HeroSection.vue'
  import ServicesSection from './components/sections/ServicesSection.vue'
  import AboutSection from './components/sections/AboutSection.vue'
  import ContactSection from './components/sections/ContactSection.vue'
  
  export default {
	name: 'App',
	components: {
	  TheNavbar,
	  TheFooter,
	  HeroSection,
	  ServicesSection,
	  AboutSection,
	  ContactSection
	}
  }
  </script>