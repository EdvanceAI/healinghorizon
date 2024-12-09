/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      black: '#12372e',
      primary: {
        50: '#F4F4F4',    // Lightest
        100: '#F4F4F4',   // Lighter
        200: '#a7d4c2',   // Light
        300: '#82c2a7',   // Medium light
        400: '#56a986',   // Neutral light
        500: '#2b8f65',   // Base
        600: '#184c3c',   // Slightly darker
        700: '#1c6447',   // Darker
        800: '#184c3c',   // Second darkest
        900: '#12372e',   // Darkest
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.75rem'],
      lg: ['1.125rem', '2rem'],
      xl: ['1.25rem', '2.125rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.375rem'],
      '4xl': ['2.25rem', '2.75rem'],
      '5xl': ['3rem', '3.5rem'],
      '6xl': ['3.75rem', '4.25rem'],
    },
  },
};
