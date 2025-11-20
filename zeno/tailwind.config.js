/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0B1220',
        'accent-light': '#A5B4FC',    // Indigo 300
        accent: '#6366F1',            // Indigo 500
        secondary: '#10B981',
        'secondary-light': '#34D399',
        background: '#0B1220',
        'gradient-1': '#818CF8',      // Indigo 400
        'gradient-2': '#60A5FA',      // Sky 400
        'gradient-3': '#4F46E5',      // Indigo 600
        'gradient-4': '#93C5FD',      // Sky 300
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
          '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(165, 180, 252, 0.7)' },
          '50%':      { opacity: '0.7', boxShadow: '0 0 35px rgba(165, 180, 252, 0.9)' },
        },
      },
    },
  },
  plugins: [],
}