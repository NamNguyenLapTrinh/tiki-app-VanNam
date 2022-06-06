module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'primary':'#1A94FF' ,
        'primary2' : 'rgba(255, 255, 255, 0.25)'
      } ,

      colors: {
        'white': '#FFFFFF',
      },
      fontSize: {
        xs: ['13px' , '20px'] 
      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
      }
    },
  },
  plugins: [],
}

