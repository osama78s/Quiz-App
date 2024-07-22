/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '600px',
      md: '768px',
      lg: '1200px',
      xl: '1400px'
    },
    container: {
      padding: '20',
      center: true
    },
    extend: {
      height: {
        1: '1px'
      },
      backgroundColor: {
        hr: '#707070',
        next: '#553f9a',
      },
      colors: {
        title: '#262626',
        border: '#686868',
      },
      width: {
        640: '640px',
        80: '80%'
      },
      margin: {
        top: '100px'
      },
    },
  },
  plugins: [],
}

