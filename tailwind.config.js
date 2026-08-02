/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary = violet (#7C3AED), Secondary = blue (#2563EB), Accent = cyan (#06B6D4)
        primary: {
          50: '#f3ebff', 100: '#e6d6ff', 200: '#cdadff', 300: '#b083ff',
          400: '#9757f6', 500: '#7C3AED', 600: '#6d28d9', 700: '#5b21b6',
          800: '#4c1d95', 900: '#3b1878',
        },
        secondary: {
          400: '#3b82f6', 500: '#2563EB', 600: '#1d4ed8', 700: '#1e40af',
        },
        accent: {
          400: '#22d3ee', 500: '#06B6D4', 600: '#0891b2',
        },
        surface: {
          DEFAULT: '#0F172A',
          light: '#1a2744',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        blob: 'blob 12s infinite',
        'spin-slow': 'spin 8s linear infinite',
        float: 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-16px)' },
        },
        'gradient-x': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
      },
      backgroundSize: {
        '300%': '300% 300%',
      },
      boxShadow: {
        glow: '0 0 25px -5px rgba(124, 58, 237, 0.5)',
      },
    },
  },
  plugins: [],
}
