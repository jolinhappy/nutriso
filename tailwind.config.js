/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        800: '#083F49',
        700: '#0E6F81',
        // Main
        600: '#128EA4',
        500: '#17B8D4',
        400: '#4DD4EC',
        300: '#A1E8F5',
        200: '#D0F4FA',
        100: '#EFFBFD',
      },
      error: {
        500: '#961316',
        400: '#961316',
        300: '#E32227',
        200: '#ED7377',
        100: '#F9D2D3',
      },
      text: '#000000',
      white: '#FFFFFF',
      gray: {
        700: '#2C2C2C',
        600: '#575757',
        500: '#787878',
        400: '#A1A1A1',
        300: '#C5C5C5',
        200: '#DEDEDE',
        100: '#EEEEEE',
      },
      blue: {
        500: '#0F4C8A',
        400: '#146AC3',
        300: '#338DEA',
        200: '#7FB8F2',
        100: '#CFE4FA',
      },
    },
    extend: {},
  },
  plugins: [],
};
