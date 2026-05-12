/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        aura: {
          dark: '#0A0A0B',
          card: '#16161A',
          border: '#2E2E36',
          primary: '#6C63FF',
          secondary: '#FF6584',
          accent: '#3F3D56',
        }
      }
    },
  },
  plugins: [],
}
