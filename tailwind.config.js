/** @type {import('tailwindcss').Config} */
module.exports = {
    theme: {
      extend: {
        colors: {
            uplbmaroon: '#8D1436',
            uplbgreen: '#00563F',
            uplbyellow: 'FFB61C'
          }
      }
    },
    content: [
      './components/**/*.{vue,js,ts}',
      './layouts/**/*.vue',
      './pages/**/*.vue',
      // './vueform.config.js', // or where `vueform.config.js` is located. Change `.js` to `.ts` if required.
      // './node_modules/@vueform/vueform/themes/tailwind/**/*.vue',
      // './node_modules/@vueform/vueform/themes/tailwind/**/*.js',
    ],
    plugins: [
      // require('@vueform/vueform/tailwind'),
    ]
  }