/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // Custom fonts
        'poppins': ['"Poppins"', 'sans-serif'],
        'adamina': ['"Adamina"', 'sans-serif'],
      },
      fontSize: {
        // Custom font sizes
        'h1': '3rem',
        'h2': '1.5rem',
        'h3': '1.18rem',


        'buttonSize': '1.1rem',
        'body': '1rem',  

      },
      colors: {
        'primary': '#212121', 
        'secondary': '#ECD8BD', 

        'tertiary':'#9E9E9E', 

        'service-container':'#7D5620'

      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}