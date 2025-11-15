/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'bounce-short': {
          '0%, 100%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(-20%)' },
          '50%': { transform: 'translateY(-35%)' },
          '75%': { transform: 'translateY(-20%)' },
        },
        'glow-pulse': {
          '0%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.5)' },
          '100%': {opacity: '0', transform: 'scale(1)' },
        }
      },
      animation: {
        'bounce-short': 'bounce-short 0.6s ease-out',
        'glow-pulse': 'glow-pulse 0.6s ease-out',
      },
    },
  },
  plugins: [],
}

