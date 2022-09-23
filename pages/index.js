import { useState } from "react";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@emotion/react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Grid, useMediaQuery } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const [region, seetRegion] = useState("");

  const handleChange = (event) => {
    seetRegion(event.target.value);
  };
  return (
    <Grid
      container
      spacing={2}
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item xs={12} md={4}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            backgroundColor: theme.palette.primary.main,
          }}
        >
          <IconButton type="button" sx={{ p: "10px" }}>
            <SearchIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for a country..."
          />
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        md={8}
        display="flex"
        justifyContent={isDesktop ? "flex-end" : "flex-start"}
      >
        <FormControl
          sx={{
            backgroundColor: theme.palette.primary.main,
            minWidth: 200,
          }}
        >
          <InputLabel id="filter-by-region-label">Filter by Region</InputLabel>
          <Select
            labelId="filter-by-region-label"
            id="filter-by-region"
            value={region}
            label="Filter by Region"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Africa">Africa</MenuItem>
            <MenuItem value="Americas">Americas</MenuItem>
            <MenuItem value="Asia">Asia</MenuItem>
            <MenuItem value="Europe">Europe</MenuItem>
            <MenuItem value="Oceania">Oceania</MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}
