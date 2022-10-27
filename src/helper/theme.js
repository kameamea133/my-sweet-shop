import { createTheme } from "@mui/material/styles";

export const colors = {
  primary: "#5fd3fb",
  secondary: "#ed708e",
  secondaryDark: "#db5677",
  third: "#0E2E3B",
  white: "#fffcff",
};

const theme = createTheme({
  palette: {
    primary: {
      light: colors.primary,
      main: colors.primary,
      dark: colors.primary,
      contrastText: colors.white,
    },
    secondary: {
      light: colors.secondary,
      main: colors.secondary,
      dark: colors.secondary,
      contrastText: colors.white,
    },
    third: {
      light: colors.third,
      main: colors.third,
      dark: colors.third,
      contrastText: colors.white,
    },
    white: {
      light: colors.white,
      main: colors.white,
      dark: colors.white,
      contrastText: colors.white,
    },
  },
});

export default theme;
