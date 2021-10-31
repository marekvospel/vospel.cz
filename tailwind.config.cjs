const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.svelte'],
  theme: {
    colors: {
      cyan: {
        50: 'hsl(189, 79%, 96%)',
        100: 'hsl(189, 79%, 86%)',
        200: 'hsl(189, 79%, 76%)',
        300: 'hsl(189, 79%, 66%)',
        400: 'hsl(189, 79%, 56%)',
        500: '#19b4d1',
        600: 'hsl(189, 79%, 36%)',
        700: 'hsl(189, 79%, 26%)',
        800: 'hsl(189, 79%, 16%)',
        900: 'hsl(189, 79%, 6%)',
      },
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
    }
  }
}
