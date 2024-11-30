/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'custom-navbar':
          "linear-gradient(to right, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0)), url('/public/alumnos.jpg')",
      },
      colors: {
        primary: '#001f45',
        secondary: '#c47c04',
        hover: '#007acc',
      },
    },
  },
  plugins: [],
};
