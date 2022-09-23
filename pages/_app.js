import { useState, useMemo, useEffect } from "react";

import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme } from "@mui/system";

import { lightTheme, darkTheme } from "../helper/themeHelper";
import Layout from "../layout";
import { ColorContext } from "../contexts/ColorContext";
import "../styles/main.scss";

function MyApp({ Component, pageProps }) {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const localStorageTheme = localStorage.getItem("theme");
    if (localStorageTheme) {
      setMode(localStorageTheme);
    }
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
        localStorage.setItem("theme", mode === "light" ? "dark" : "light");
      },
    }),
    [mode]
  );

  const theme = useMemo(
    () => createTheme(mode === "light" ? lightTheme : darkTheme),
    [mode]
  );

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}

export default MyApp;
