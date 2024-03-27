/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
const Myclass = plugin(function({addUtilities}){
  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)",
    },
    ".preserve-3d":{
      transformStyle:"preserve-3d",
    },
    ".perspective":{
      perspective:"1000px",
    },
    ".backface-hidden":{
      backfaceVisibility:"hidden",
    },
   
  });
});

module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors:{
        "myfont1":"#DDA15E",
        "myfont2":"#FEFAE0",
      },
      fontFamily:{
        My1:['Honk', 'system-ui', 'auto'],
        My2:['Young Serif', 'serif'],
        My3:['Protest Riot','sans-serif'],
        My4:['Permanent Marker', 'cursive'],
        my5:["Sansita Swashed", 'system-ui'],
        my6:["Black Ops One", 'system-ui']

      }
    },
  },
  plugins: [Myclass],
}