/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sky: {
          50:  '#EAFBFE',
          100: '#D3F3FB',
          200: '#B6E9F6',
          300: '#A6DBF0',
          400: '#86CDE7',
          500: '#7EC8E3',
          600: '#5DB7D6',
          700: '#3E9CC1',
          800: '#2C7FA0',
          900: '#22657F'
        }
      }
    }
  },
  plugins: []
};

