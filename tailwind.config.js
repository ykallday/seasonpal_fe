module.exports = {
  mode:'jit',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'mygreen':'#007A07',
        'mylime':'#b6d10c',
        'lightblue':'#CCDEFF'
      },
      fontSize:{
        xs: '.6rem',
        s: '.7rem'
      },
      fontFamily: {
        'ms-sans-serif': ['microsoft sans serif'],
        'didot': ['Didot'],
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
