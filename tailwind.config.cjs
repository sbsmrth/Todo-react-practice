/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1);',
        'bounce': 'bounce 2s;'
      },
      colors: {
        'primary-blue': '#23304c',
        'secondary-blue': '#0B8D9F'
      }
    }
  },
  plugins: [],
}
