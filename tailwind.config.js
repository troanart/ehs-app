/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        online: '#1976d2',
        offline: '#fdd835',
        corporate: '#00bcd4',
      },
     
      animation: {
        moveForever: "moveForever 15s ease-in-out infinite",
        "spin-slow": "spin 5s linear infinite",
      },
      keyframes: {
        moveForever: {
          "0%, 100%": { backgroundColor: "#2878b8" },
          "25%": { backgroundColor: "#0462d9" },
          "50%": { backgroundColor: "#0665de" },
          "75%": { backgroundColor: "#301196" },
        },
      },
    },
  },
   plugins: [
  ],
};
