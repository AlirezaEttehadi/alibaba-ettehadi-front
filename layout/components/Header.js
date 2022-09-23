import { useContext } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useTheme } from "@emotion/react";
import { IconButton, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

import { ColorContext } from "../../contexts/ColorContext";

export default function Header() {
  const colorMode = useContext(ColorContext);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <AppBar position="static">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        bgcolor={theme.palette.primary.main}
        padding={isDesktop ? "12px 52px" : "32px 20px"}
      >
        <Typography variant="h6" fontWeight="800">
          Where in the world?
        </Typography>
        <Box display="flex" alignItems="center">
          <IconButton
            sx={{ mr: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <DarkModeIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>
          {theme.palette.mode} mode
        </Box>
      </Box>
    </AppBar>
  );
}
