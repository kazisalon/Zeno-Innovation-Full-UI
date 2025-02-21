<template>
  <footer class="bg-gray-900">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="(section, index) in footerSections" :key="index">
          <h3 class="text-sm font-semibold text-gray-400 tracking-wider uppercase">
            {{ section.title }}
          </h3>
          <ul class="mt-4 space-y-4">
            <li v-for="(item, itemIndex) in section.items" :key="itemIndex">
              <a :href="item.href" class="text-base text-gray-300 hover:text-white">
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-700 pt-8">
        <p class="text-base text-gray-400 text-center">
          © {{ currentYear }} Zeno Innovation. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      footerSections: [
        {
          title: 'Solutions',
          items: [
            { name: 'Software Development', href: '#' },
            { name: 'AI Solutions', href: '#' },
            { name: 'Cloud Services', href: '#' }
          ]
        },
        {
          title: 'Company',
          items: [
            { name: 'About', href: '#about' },
            { name: 'Careers', href: '#' },
            { name: 'Contact', href: '#contact' }
          ]
        },
        {
          title: 'Resources',
          items: [
            { name: 'Documentation', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Support', href: '#' }
          ]
        },
        {
          title: 'Legal',
          items: [
            { name: 'Privacy', href: '#' },
            { name: 'Terms', href: '#' },
            { name: 'Security', href: '#' }
          ]
        }
      ]
    }
  }
}
</script>

