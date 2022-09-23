import { useState } from "react";
import Link from "next/link";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useTheme } from "@emotion/react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  useMediaQuery,
} from "@mui/material";
import axios from "axios";

import { countries } from "../countries";

export default function Home({ countries }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));
  const [region, seetRegion] = useState("");

  const handleChange = (event) => {
    seetRegion(event.target.value);
  };
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={4.5}
      >
        <Grid item xs={12} md={4}>
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
            size="small"
          >
            <InputLabel id="filter-by-region-label">
              Filter by Region
            </InputLabel>
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
      <Grid container spacing={2}>
        {countries?.map((country) => {
          return (
            <Link key={country.name} href={`/${country.name}`}>
              <Grid item xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ backgroundColor: theme.palette.primary.main }}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      image={country.flags.svg}
                      alt={`The falg of${country.name}`}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {country.name}
                      </Typography>
                      <Box display="flex" alignItems="center">
                        <Typography variant="body1" mr={0.5}>
                          Population:
                        </Typography>
                        <Typography variant="body2">
                          {country.population}
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Typography variant="body1" mr={0.5}>
                          Region:
                        </Typography>
                        <Typography variant="body2">
                          {country.region}
                        </Typography>
                      </Box>
                      <Box display="flex" alignItems="center">
                        <Typography variant="body1" mr={0.5}>
                          Capital:
                        </Typography>
                        <Typography variant="body2">
                          {country.capital}
                        </Typography>
                      </Box>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Link>
          );
        })}
      </Grid>
    </>
  );
}

export async function getServerSideProps() {
  // const { data: countries } = await axios.get(
  //   "https://restcountries.com/v2/all"
  // );
  return {
    props: {
      countries,
    },
  };
}
