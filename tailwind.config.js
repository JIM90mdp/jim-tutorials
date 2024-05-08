/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "album-cover": "url('/panic-panini-album.jpg')",
        "incoming-shows": "url('/coming-shows-bg.jpg')",
        "hero-pattern": "url('/pattern.png')",
      },
      fontFamily: {
        permanentMarker: ["Permanent Marker", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        rockSalt: ["Rock Salt", "sans-serif"],
      },
      colors: {
        "fluo-green": "#43b6ff",
        "yellow-btn-primary": " #0d9eaf",
        "medium-gray": "#bebebe",
        "magenta": " #ff42ff ",
      },
      boxShadow: {
        "centered-shadow": "0px 0px 19px 4px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
