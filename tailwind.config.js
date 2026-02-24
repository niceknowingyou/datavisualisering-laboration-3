/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      backgroundColor: {            
        'background': 'rgb(28, 27, 26)',
      },
      colors: {
        'background': 'rgb(28, 27, 26)',
      },
    },
  },
  plugins: [],
};
