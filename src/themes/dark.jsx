import { createTheme } from "@mui/material";
import { DARK, SHARED_STYLED_COMPONENTS } from "../enums/themeEnums";

export const dark = createTheme({
  palette: {
    mode: DARK,
    primary: {
      main: '#de724c',
    },
    secondary: {
      main: '#45b39d',
    },
    background: {
      default: '#242424'
    }
  },
  typography: {
    fontFamily: 'Poppins'
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '::-webkit-scrollbar': {
            width: '5px',
            height: '5px',
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: '#464749',
            borderRadius: '3px',
          },
          '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
          },
        },
      },
    },
    ...SHARED_STYLED_COMPONENTS
  }
});