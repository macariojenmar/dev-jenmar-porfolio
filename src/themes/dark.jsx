import { createTheme } from "@mui/material";
import { DARK, SHARED_STYLED_COMPONENTS } from "../enums/themeEnums";

export const dark = createTheme({
  palette: {
    mode: DARK,
    primary: {
      main: '#cb887e',
    },
    secondary: {
      main: '#45b39d',
    }
  },
  typography: {
    fontFamily: 'Poppins'
  },
  components: {
    ...SHARED_STYLED_COMPONENTS
  }
});