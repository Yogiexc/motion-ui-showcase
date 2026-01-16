/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom animation curves
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'snappy': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      // Custom animation durations
      transitionDuration: {
        '400': '400ms',
      },
      // Custom font family
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}