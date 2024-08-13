const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#2c5896',
        'light-blue' : '#1182c4',
        'gray-text' : '#777',
        'footer-bg' : '#e0e0e0',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}