/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      margin: {
        main: '4vw auto',
      },
      minHeight: {
        main: '74rem',
      },
      maxWidth: {
        main: '75rem',
      },
      gridTemplateColumns: {
        addWindow: '1fr 2.8fr',
      },
    },
  },
  plugins: [],
};
