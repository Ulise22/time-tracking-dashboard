/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/page.js",
    "./app/Card.js",
    "./app/objectStyle.js"
  ],
  theme: {
    extend: {
      colors: {
        "screenColor": "#0f1424",
        "darkBlue": "#1c1f4a",
        "jeremyBg": "#5847eb",
        "desaturatedBlue": "#6f76c8",
        "paleBlue": "#bdc1ff",
        "work": "#ff8c66",
        "play": "	#56c2e6",
        "study": "#ff5c7c",
        "exercise":"#4acf81",
        "social": "#7536d3",
        "selfcare": "#f1c65b"
      }
    },
  },
  plugins: [],
}

