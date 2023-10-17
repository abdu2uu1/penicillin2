// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Vuetify
import { createVuetify } from 'vuetify'

export default createVuetify({
    theme: {
    defaultTheme: 'myCustomTheme',
    themes: {
      myCustomTheme: {
        dark: false,
        colors: { 
          ColorGray: '#EBEBEB',
          ColorTextGray:'#8F8F8F',
          ColorBlue: '#3284BB',
          mainColor: '#3284BB',
          ColorBgCard: '#3284bb41',
          Pending: '#FFCE30',
          Canceled: '#E82845',
          Rejected: '#FF0000',
          Accepted: '	#008000',
          OnTheWay: '	#800080',
          Delivered: '#cccccc',
          Paid:'Paid',
          // ColorGray:'#000000'
        },
      },
    },
  },
})
