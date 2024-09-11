import { createTheme } from "@mui/material";
import { LIGHT, SHARED_STYLED_COMPONENTS } from "../enums/themeEnums";

export const light = createTheme({
  palette: {
    mode: LIGHT,
    primary: {
      main: '#cb887e',
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
    ...SHARED_STYLED_COMPONENTS,
  }
});