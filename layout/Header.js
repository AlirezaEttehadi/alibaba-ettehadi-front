import { useContext } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import { useTheme } from "@emotion/react";
import { IconButton } from "@mui/material";

import { ColorContext } from "../contexts/ColorContext";

export default function Header() {
  const colorMode = useContext(ColorContext);
  const theme = useTheme();
  return (
    <AppBar position="static">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <span>Where in the world?</span>
        <Box display="flex" alignItems="center">
          <IconButton
            sx={{ ml: 1 }}
            onClick={colorMode.toggleColorMode}
            color="inherit"
          >
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
          {theme.palette.mode} mode
        </Box>
      </Box>
    </AppBar>
  );
}
