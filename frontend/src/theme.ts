import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#004F56',
    },
    secondary: {
      main: '#00497b',
    },
    error: {
      main: red.A400,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  typography: {
    fontFamily: '"Noto Sans", sans-serif',
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          fontFamily: 'Lato, sans-serif',
          textTransform: 'none',
          "&.Mui-focusVisible":{
            boxShadow: '0 0 0 2px #ffffff, 0 0 3px 5px #004f56',
          }
        }
      },
    },
    MuiButtonBase:{
      defaultProps:{
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          "&.Mui-focusVisible":{
            boxShadow: '0 0 0 2px #ffffff, 0 0 3px 5px #004f56',
          }
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          "&:focus-within": {
            boxShadow: '0 0 0 2px #ffffff, 0 0 3px 5px #004f56',
          },
          "& .MuiCardActionArea-focusHighlight": {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiLink: {
      defaultProps: {
        color: 'secondary',
      },
    },
    MuiListItemButton:{
      styleOverrides:{
        root:{
          "&:focus-within": {
            backgroundColor: 'transparent',
          },
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontFamily: 'Lato, sans-serif',
          textTransform: 'none',
          fontWeight: 'bold',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          fontFamily: 'Lato, sans-serif',
          textTransform: 'none',
        },
      },
    },
  },
})

export default theme