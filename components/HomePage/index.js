import { useState, useEffect } from "react";

import { useTheme } from "@emotion/react";
import { Grid, useMediaQuery } from "@mui/material";

import CountryCard from "./components/CountryCard";
import SearchInput from "./components/SearchInput";
import SelectInput from "./components/SelectInput";
import {
  filterCountriesByRegion,
  filterCountriesBySearch,
  getAllCountries,
} from "../../services/countries";

export default function HomePage({ countries }) {
  const [_countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  const [region, setRegion] = useState("");

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  useEffect(() => {
    setCountries(countries);
  }, [countries]);

  useEffect(() => {
    if (region !== "") {
      filterCountriesByRegion(region).then((res) => setCountries(res));
    }
  }, [region]);
  useEffect(() => {
    if (search !== "") {
      filterCountriesBySearch(search).then((res) => setCountries(res));
    } else if (search === "") {
      getAllCountries().then((res) => setCountries(res));
    }
  }, [search]);

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
          <SearchInput setSearch={setSearch} />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          display="flex"
          justifyContent={isDesktop ? "flex-end" : "flex-start"}
        >
          <SelectInput
            region={region}
            handleRegionChange={handleRegionChange}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {_countries?.map((country) => {
          return <CountryCard key={country.name} country={country} />;
        })}
      </Grid>
    </>
  );
}
