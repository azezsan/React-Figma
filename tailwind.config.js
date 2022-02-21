module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: { open: ['Open Sans'], work: ['Work Sans'] },
    },
  },
  variants: {
    display: ['group-hover'],
  },
  plugins: [],
};
