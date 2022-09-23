import { useState, useEffect } from "react";

import { useTheme } from "@emotion/react";
import { Grid, useMediaQuery } from "@mui/material";
import axios from "axios";

import CountryCard from "./components/CountryCard";
import SearchInput from "./components/SearchInput";
import SelectInput from "./components/SelectInput";

const filterCountriesByRegion = async (region) => {
  const { data } = await axios.get(
    `https://restcountries.com/v2/region/${region}`
  );
  return data;
};

const filterCountriesBySearch = async (search) => {
  const { data } = await axios.get(
    `https://restcountries.com/v2/name/${search}`
  );
  return data;
};

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
