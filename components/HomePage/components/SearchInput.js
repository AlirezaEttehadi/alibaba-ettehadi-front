import { useTheme } from "@emotion/react";
import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchInput() {
  const theme = useTheme();
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
      />
    </Paper>
  );
}
