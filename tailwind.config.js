/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          DEFAULT: '#009164',
          light: '#ffffff',
          // dark: "#33164D",
          // 50: "#ece8ef",
          100: '#00916424',
          // 200: "#a08db0",
          // 300: "#795f90",
          // 400: "#533270",
          // 500: "#3a1856",
          // 600: "#33164d",
          // 700: "#2d1343",
          // 800: "#26103a",
          // 900: "#200e30",
        },
        secondary: {
          DEFAULT: '#000000',
          light: '#12121d99',
          // dark: "#33164D",
          // 50: "#ece8ef",
          // 100: "#00916424",
          // 200: "#a08db0",
          // 300: "#795f90",
          // 400: "#533270",
          // 500: "#3a1856",
          // 600: "#33164d",
          // 700: "#2d1343",
          // 800: "#26103a",
          // 900: "#200e30",
        },
      },
    },
  },
  plugins: [],
};
