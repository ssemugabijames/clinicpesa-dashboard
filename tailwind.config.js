/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        clinicBlue: "#0f5d6f",
        clinicTeal: "#007a8a",
        clinicYellow: "#ffd057",
        cardBg: "#ffffff",
        lightGray: "#f4f5f6",
        textMuted: "#6b7280"
      },
      borderRadius: {
        xl: "18px"
      },
      boxShadow: {
        card: "0 10px 30px rgba(16,24,40,0.08)"
      }
    }
  },
  plugins: [],
};
