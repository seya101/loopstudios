/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('/src/images/image-hero.jpg')",
        'hero-mobile': "url('/src/images/mobile-image-hero.jpg')",
      }
    },
  },
  plugins: [],
}
