const plugin =  require("tailwindcss/plugin")

const MyclassName = plugin(function ({addUtilities}) {
  addUtilities({
".my-rotate-y-180":{
  transform:"rotateY(180deg)"
},
".my-preserve-3d":{
  transformStyle:"preserve-3d"
},
".perspective":{
  perspective:"100opx"
},
".backface-hidden":{
  backfaceVisibility :"hidden",

}
  })
})
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [MyclassName],
}






