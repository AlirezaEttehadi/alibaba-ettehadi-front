import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    text: {
      primary: "hsl(200, 15%, 8%)",
    },
    background: {
      default: "hsl(0, 0%, 98%)",
    },
    primary: {
      main: "hsl(0, 0%, 100%)",
    },
  },
  typography: {
    fontFamily: "Nunito Sans",
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    text: {
      primary: "hsl(0, 0%, 100%)",
    },
    background: {
      default: "hsl(207, 26%, 17%)",
    },
    primary: {
      main: "hsl(209, 23%, 22%)",
    },
  },
  typography: {
    fontFamily: "Nunito Sans",
  },
});
