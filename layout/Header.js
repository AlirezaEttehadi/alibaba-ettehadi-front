import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <span>Where in the world?</span>
          <Box display="flex" alignItems="center">
            {darkMode ? (
              <>
                <DarkModeIcon />
                <span>Dark Mode</span>
              </>
            ) : (
              <>
                <DarkModeOutlinedIcon />
                <span>Light Mode</span>
              </>
            )}
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
