<template>
    <section id="contact" class="py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Contact Us
          </h2>
          <p class="mt-4 text-xl text-gray-600">
            Let's discuss how we can help your business grow
          </p>
        </div>
        <div class="mt-12 max-w-lg mx-auto">
          <form @submit.prevent="handleSubmit" class="grid grid-cols-1 gap-6">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="formData.name"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              >
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="formData.email"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              >
            </div>
            <div>
              <label for="subject" class="block text-sm font-medium text-gray-700">Subject</label>
              <select 
                id="subject" 
                v-model="formData.subject"
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              >
                <option v-for="option in subjectOptions" 
                        :key="option.value" 
                        :value="option.value">
                  {{ option.label }}
                </option>
              </select>
            </div>
            <div>
              <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
              <textarea 
                id="message" 
                v-model="formData.message"
                rows="4" 
                class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                required
              ></textarea>
            </div>
            <div>
              <button 
                type="submit"
                class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                :disabled="isSubmitting"
              >
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'ContactSection',
    data() {
      return {
        isSubmitting: false,
        formData: {
          name: '',
          email: '',
          subject: 'general',
          message: ''
        },
        subjectOptions: [
          { value: 'general', label: 'General Inquiry' },
          { value: 'software', label: 'Software Development' },
          { value: 'ai', label: 'AI Solutions' },
          { value: 'cloud', label: 'Cloud Services' },
          { value: 'other', label: 'Other' }
        ]
      }
    },
    methods: {
      async handleSubmit() {
        this.isSubmitting = true
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000))
          console.log('Form submitted:', this.formData)
          // Reset form
          this.formData = {
            name: '',
            email: '',
            subject: 'general',
            message: ''
          }
          alert('Message sent successfully!')
        } catch (error) {
          console.error('Error submitting form:', error)
          alert('Error sending message. Please try again.')
        } finally {
          this.isSubmitting = false
        }
      }
    }
  }
  </script>
  