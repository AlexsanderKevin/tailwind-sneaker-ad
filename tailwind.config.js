/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      },
      backgroundImage: {
        'black-yellow': "url('/src/img/bg.png')"
      },
      keyframes: {
        tilt: {
          "from": { transform: "rotate(0deg)", scale: '1'},
          "to": { transform: "rotate(10deg)", scale: '1.2'},
        },
        sideSlide: {
          '0%': { transform: "translateX(0)" },
          '50%': { transform: "translateX(10px)" },
          '100%': { transform: "translateX(0)" },
        },
        blink: {
          '0%': { opacity: 1 },
          '50%': { opacity: .5 },
          '100%': { opacity: 1 },
        }
      },
      animation: {
        tilt: "tilt 0.3s forwards",
        sideSlide: "sideSlide 2s infinite",
        blink: "blink 1s infinite"
      },
    },
  },
  plugins: [],
}

