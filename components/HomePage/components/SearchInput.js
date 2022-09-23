import { useState, useEffect } from "react";

import { useTheme } from "@emotion/react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

let timeoutId = null;

export default function SearchInput({ setSearch }) {
  const theme = useTheme();
  const [localSearch, setLocalSearch] = useState(null);

  useEffect(() => {
    if (localSearch !== null) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setSearch(localSearch);
      }, 500);
    }
  }, [localSearch]);

  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <IconButton type="button" sx={{ p: 1 }}>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, height: "40px" }}
        placeholder="Search for a country..."
        onChange={(event) => setLocalSearch(event.target.value)}
      />
    </Paper>
  );
}
