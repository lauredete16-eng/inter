/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: { 900: '#0a1b33', 800: '#0f2747', 700: '#16365f' },
        inst: { 600: '#1d4f91', 500: '#2a63ac', 100: '#e3ecf7' },
        notice: { 600: '#c8102e', 50: '#fdecef' },
        paper: '#f3f5f8',
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'system-ui', '-apple-system', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Cambria', '"Times New Roman"', 'serif'],
      },
    },
  },
  plugins: [],
}
