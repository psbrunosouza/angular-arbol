/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,ts,component.html, component.ts}',
    './src/**/*.*.{html, ts}'
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'arbol': {
          50: '#c3affc',
          100: '#a586fd',
          200: '#8863ef',
          300: '#7D56ECFF',
          400: '#734CE3',
          500: '#653ed3',
        }
      },
    }
  },
  plugins: [],
}
