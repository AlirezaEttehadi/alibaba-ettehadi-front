import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useTheme } from "@emotion/react";

export default function SelectInput({ region, handleRegionChange }) {
  const theme = useTheme();
  return (
    <FormControl
      sx={{
        backgroundColor: theme.palette.primary.main,
        minWidth: 200,
      }}
      size="small"
    >
      <InputLabel id="filter-by-region-label">Filter by Region</InputLabel>
      <Select
        labelId="filter-by-region-label"
        id="filter-by-region"
        value={region}
        label="Filter by Region"
        onChange={handleRegionChange}
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
  );
}
