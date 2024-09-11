import React from "react";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import { dark } from "../themes/dark";
import { useThemeStore } from "../hooks/useStore";
import { LIGHT } from "../enums/themeEnums";
import { light } from "../themes/light";

const MuiThemeProvider = ({ children }) => {
  const { themeType } = useThemeStore()
  return (
    <ThemeProvider theme={themeType === LIGHT ? light : dark}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default MuiThemeProvider;