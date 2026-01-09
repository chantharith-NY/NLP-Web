export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: "#8BAD13",
        header: "#95B814",
        primary: "#1E3A8A", // buttons (blue)
      },
      fontFamily: {
        khmer: ["Noto Sans Khmer", "sans-serif"],
      },
    },
  },
  plugins: [],
}
