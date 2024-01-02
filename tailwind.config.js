/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        Title:['QuattrocentoSansRegular'],
        Paragraph: ['QuattrocentoRegular'],
      },

      colors: {
        'mustard': {
          '50': '#fefbe8',
          '100': '#fff7c2',
          '200': '#ffec89',
          '300': '#ffdd57',
          '400': '#fdc412',
          '500': '#ecaa06',
          '600': '#cc8202',
          '700': '#a35b05',
          '800': '#86480d',
          '900': '#723b11',
          '950': '#431d05',
      },
      'shakespeare': {
        '50': '#edfdfe',
        '100': '#d0f7fd',
        '200': '#a7eefa',
        '300': '#6bdff5',
        '400': '#27c7e9',
        '500': '#0cb2d8',
        '600': '#0d87ad',
        '700': '#116d8d',
        '800': '#185972',
        '900': '#184a61',
        '950': '#0a3042',
    },
    'anzac': {
      '50': '#faf9ec',
      '100': '#f4f0cd',
      '200': '#ebdf9d',
      '300': '#dfc865',
      '400': '#d4af37',
      '500': '#c59b2d',
      '600': '#aa7a24',
      '700': '#885920',
      '800': '#724921',
      '900': '#623e21',
      '950': '#382010',
  },

      }
    },
  },
  plugins: [],
}

