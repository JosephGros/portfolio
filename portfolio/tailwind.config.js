/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bahama: {
          '50': '#f2f9fd',
          '100': '#e5f0f9',
          '200': '#c4e2f3',
          '300': '#90c9e9',
          '400': '#55aedb',
          '500': '#2f95c8',
          '600': '#2077a9',
          '700': '#1d6795',
          '800': '#1a5072',
          '900': '#1b445f',
          '950': '#122c3f',
      },  
      purp: {
        '50': '#fbf5fe',
        '100': '#f8eafd',
        '200': '#f0d5f9',
        '300': '#e6b3f4',
        '400': '#d886ec',
        '500': '#c458dd',
        '600': '#aa38c1',
        '700': '#8e2ba0',
        '800': '#762583',
        '900': '#6a2673',
        '950': '#3f0c46',
    },
    
      }
    },
  },
  plugins: [],
}