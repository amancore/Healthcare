/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f2ff',
          100: '#b3dcff', 
          200: '#80c6ff',
          300: '#4db0ff',
          400: '#1a9aff',
          500: '#0084ff', 
          600: '#0070db',
          700: '#005cb3',
          800: '#00488c',
          900: '#003366'
        },
        medical: {
          background: '#f4f7fa',
          text: '#2c3e50',
          muted: '#7f8c8d'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        'medical-card': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'medical-hover': '0 10px 15px rgba(0, 0, 0, 0.15)'
      }
    },
  },
  plugins: [],
}