const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  purge: [
    './apps/**/*.{html,ts,scss}',
    './libs/**/*.{html,ts,scss}'
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans]
    },
    extend: {}
  },
  variants: {},
  plugins: []
};
