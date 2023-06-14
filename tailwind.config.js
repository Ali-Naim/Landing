/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'sm':'0px',
      },
      backgroundImage:{
        'bgcard':'url(/images/bg.jpg)',
      },
      height:{
        "imgxl":"506px",
        "imgmd":"397",
      },
      width:{
        "imgxl":"800px",
        "imgmd":"600px",
      }, 
      
      
    },
    colors:{
      "black":"#000",
      "white":"#fff",
      "navyb":"#8dc3ea",
    },
  },
  plugins: [],
}

