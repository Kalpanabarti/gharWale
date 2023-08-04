import { extendTheme, theme as base, withDefaultVariant } from "@chakra-ui/react"

const breakpoints = {
  sm: '500px',
  md: '700px',
  lg: '920px',
  xl: '1060px',
  '2xl': '1200px',
}

export const theme = extendTheme({
  breakpoints, 
  fonts: {
    heading: `'Roboto Slab', ${base.fonts.heading}`,
    body: `'Montserrat', sans-serif`,
  },
  styles: {
    global: {
        body: {
            bg: 'white.50'
        }
    }
  },
  components: {
    Button: {
      defaultProps: {
        colorScheme: 'red', // default is gray
      }
    },
    Input:{
      defaultProps: {
        focusBorderColor: 'blue.500'
      }
    },
    Select:{
      baseStyle: {
        _focus: {
          borderColor: 'blue.500'
        }
      }
    },
    Textarea:{
      defaultProps: {
        focusBorderColor: 'blue.500'
      }
    }
  }
});