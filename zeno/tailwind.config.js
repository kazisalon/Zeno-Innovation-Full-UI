/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0A0F1C',
        'accent-light': '#60A5FA',    // Bright blue
        accent: '#2563EB',            // Rich blue
        secondary: '#10B981',         // Emerald green
        'secondary-light': '#34D399', // Light emerald
        background: '#030712',
        'gradient-1': '#3B82F6',     // Blue
        'gradient-2': '#06B6D4',     // Cyan
        'gradient-3': '#0EA5E9',     // Sky
        'gradient-4': '#38BDF8',     // Light Sky
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(96, 165, 250, 0.7)' },
          '50%': { opacity: '0.7', boxShadow: '0 0 35px rgba(96, 165, 250, 0.9)' },
        },
      },
    },
  },
  plugins: [],
}