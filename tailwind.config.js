/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{njk,md}",
  "./src/**/*.svg", 
  "./11ty/shortcodes/*.js",
  "./node_modules/tw-elements/dist/js/**/*.js",
],
  theme: {
    extend: {
      fontFamily: {
        msgothic: "'ms pgothic'"
      },
      backgroundImage: {
        'main': "url('/assets/images/backgrounds/Nakayoshi.(Source).full.32482.jpg')",

        'content': "url('/assets/images/backgrounds/wnotebook.gif')",
        'rainbow': "linear-gradient(225deg, #f086d2, #ff8d9b, #ffb067, #e5db5d, #91ff97);",
        'rainbow2': "url('/assets/images/backgrounds/eyestrain.jpg')",
        'check': "url('/assets/images/backgrounds/chekdb.png')",

        'lines': "url('/assets/images/backgrounds/tumblr_inline_n25gr04ODc1qhwjx8.png')",
        'grid': "url('/assets/images/backgrounds/con2.png')",
        'pinkgrid': "url('/assets/images/backgrounds/graphpaper3.png')",

        'clouds': "url('/assets/images/backgrounds/sora5.gif')",
        'notebook': "url('/assets/images/backgrounds/wnotebook.gif')",

        'sidenav': "url('/assets/images/backgrounds/bg_purplewindpaper.gif')",

        'flowers': "url('/assets/images/backgrounds/flors2.png')",
        'footer': "url('/assets/images/backgrounds/digi.jpg')"
      },
      listStyleType: {
        decimalZero: 'decimal-leading-zero'
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),
  require("tw-elements/dist/plugin.cjs")],
}

