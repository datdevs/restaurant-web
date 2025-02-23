/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'serif'],
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1130px',
        xl: '12840px',
      },
    },
  },
  plugins: [],
};
