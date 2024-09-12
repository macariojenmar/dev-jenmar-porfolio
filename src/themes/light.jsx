import { createTheme } from "@mui/material";
import { LIGHT, SHARED_STYLED_COMPONENTS } from "../enums/themeEnums";

export const light = createTheme({
  palette: {
    mode: LIGHT,
    primary: {
      main: '#de724c',
    },
    secondary: {
      main: '#16a085',
    },
    background: {
      default: '#f2f4f4'
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
            backgroundColor: '#a6acaf',
            borderRadius: '3px',
          },
          '::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
          },
        },
      },
    },
    ...SHARED_STYLED_COMPONENTS,
  }
});