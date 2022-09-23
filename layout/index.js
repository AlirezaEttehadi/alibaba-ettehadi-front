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
      <Box px={isDesktop ? "52px" : "32px"} py={isDesktop ? "40px" : "44px"}>
        {children}
      </Box>
    </>
  );
}
