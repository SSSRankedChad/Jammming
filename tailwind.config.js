/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  purge: [
    './src/**/*.html',

     './src/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

