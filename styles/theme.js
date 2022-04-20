import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { createIcon } from '@chakra-ui/icons'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  sizes: {
    container: {
      '2xl': '1560px',
    }
  },
  fonts: {
    heading: 'Raleway, sans-serif',
    body: 'Roboto, sans-serif',
  },
  // fontSizes: {
  //   xs: '1.3rem',
  //   sm: '1.4rem',
  //   md: '1.6rem',
  //   lg: '1.8rem',
  //   xl: '2rem',
  //   '2xl': '2.6rem',
  //   '3xl': '3rem',
  //   '4xl': '3.6rem',
  //   '5xl': '4rem',
  //   '6xl': '4.6rem',
  //   '7xl': '5rem',
  //   '8xl': '6rem',
  //   '9xl': '7rem',
  // },
  colors: {
    blue: {
      50: '#E6EFFE',
      100: '#BAD3FC',
      200: '#8EB6FB',
      300: '#6299F9',
      400: '#4E8CF9',
      500: '#357DF8',
      600: '#074DC5',
      700: '#053A94',
      800: '#042662',
      900: '#021331'
    },
    purple: {
      50: '#EFE7FD',
      100: '#D3BCFB',
      200: '#B791F8',
      300: '#9B66F5',
      400: '#7F3BF2',
      500: '#6210EF',
      600: '#4F0DBF',
      700: '#3B0990',
      800: '#270660',
      900: '#140330'
    },
    pink: {
      50: '#FCE8F2',
      100: '#F7C0DA',
      200: '#F297C3',
      300: '#EC6FAB',
      400: '#E74694',
      500: '#E21D7C',
      600: '#B51764',
      700: '#87124B',
      800: '#5A0C32',
      900: '#2D0619'
    }
  },
  styles: {
    global: (props) => ({
      // html: {
      //   fontSize: '62.5%',
      // },
      body: {
        bg: mode('#fff', '#091227')(props),
        color: mode('#080808', '#fff')(props),
        fontSize: '1rem',
        letterSpacing: '0.02rem',
      },
      a: {
        color: 'gray.900',
        fontWeight: '500',
        textDecoration: 'none',
        transition: 'all 0.3s ease-in-out',
        _hover: {
          color: 'blue.400',
          textDecoration: 'none',
        }
      },
      h1: {
        fontWeight: 'bold',
      },
      h2: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
      h3: {
        fontWeight: 'bold',
      },
      h4: {
        fontWeight: 'bold',
      },
      label: {
        fontWeight: mode('500', '400')(props),
      },
    }
  )},
  components: {
    Link: {
      variants: {
        'menu-link': (props) => ({
          fontWeight: mode('500', '400')(props),
          _hover: {
            textDecoration: 'none',
            outline: 'none',
          }
        }),
      },
    },
    Button: {
      baseStyle: {
        fontWeight: '500',
        cursor: 'pointer',
        transition: 'all 0.3s ease-out',
      },
      sizes: {
        'xl': {
          w: '100%',
          h: '48px',
          px: '16px',
          fontSize: 'xl',
        },
        '2xl': {
          w: '100%',
          h: '56px',
          fontSize: '3xl',
          px: '16px',
        },
      },
      variants: {
        'dark-mode': {
          bg: 'rgba(0,0,0,0)',
        },
        'sb-btn': (props) => ({
          w: '100%',
          h: '40px',
          fontSize: '1rem',
          p: '10px 0',
          bg: 'white',
          borderRadius: '5px',
          border: '2px solid #e5e7eb',
          color: mode('#080808', '#080808')(props),
          _hover: {
            color: 'blue.400',
            bg: '#e5e7eb',
          },
          _active: {
            color: 'blue.400',
            bg: '#e5e7eb',
          }
        }),
        'menu-button': (props) => ({
          height: '40px',
          fontSize: '1rem',
          p: '15px 25px',
          bgGradient: 'linear-gradient(to bottom right, #7F3BF2, #357DF8)',
          borderRadius: '10px',
          color: 'white',
          _hover: {
            bgGradient: 'linear-gradient(to bottom left, #7F3BF2, #357DF8)',
          },
          _active: {
            bgGradient: 'linear-gradient(to bottom right, #7F3BF2, #357DF8)',
          }
        }),
        solid: (props) => ({
          bgGradient: 'linear-gradient(to bottom right, #7F3BF2, #357DF8)',
          borderRadius: '10px',
          color: 'white',
          _hover: {
            bgGradient: 'linear-gradient(to bottom left, #7F3BF2, #357DF8)',
          },
          _active: {
            bgGradient: 'linear-gradient(to bottom right, #7F3BF2, #357DF8)',
          }
        }),
        outline: {
          border: '2px',
        },
        'outline-blue': (props) => ({
          w: '100%',
          h: '48px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          bg: mode('#fff', '#091227')(props),
          color: mode('#080808', '#fff')(props),
          fontWeight: mode('500', '400')(props),
          p: '10px 20px',
          borderRadius: '0',
          _hover: {
            color: '#fff',
            bgGradient: 'linear-gradient(to bottom right, #7F3BF2, #357DF8)',
          },
          _active: {
            bgGradient: 'linear-gradient(to bottom right, #7F3BF2, #357DF8)',
          }
        }),
      },
    }
  },
})

export default theme

export const GoogleIcon = createIcon({
  displayName: 'GoogleIcon',
  viewBox: '0 0 533.5 544.3',
  path: (
    <g>
      <path
        d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
        fill="#4285f4"
      />
      <path
        d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
        fill="#34a853"
      />
      <path
        d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
        fill="#fbbc04"
      />
      <path
        d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
        fill="#ea4335"
      />
    </g>
  ),
})

export const GitHubIcon = createIcon({
  displayName: 'GitHubIcon',
  viewBox: '0 0 24 24',
  path: (
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  ),
})