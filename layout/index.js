import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";

import Header from "./Header";

export default function Layout({ children }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <>
      <Header />
      <Box px={isDesktop ? 7.5 : 4} py={isDesktop ? 5 : 5.5}>
        {children}
      </Box>
    </>
  );
}
