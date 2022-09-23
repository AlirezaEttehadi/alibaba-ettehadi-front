import { useTheme } from "@emotion/react";
import { Grid, useMediaQuery } from "@mui/material";

import CountryCard from "./components/CountryCard";
import SearchInput from "./components/SearchInput";
import SelectInput from "./components/SelectInput";

export default function HomePage({ countries }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

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
          <SearchInput />
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          display="flex"
          justifyContent={isDesktop ? "flex-end" : "flex-start"}
        >
          <SelectInput />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {countries?.map((country) => {
          return <CountryCard key={country.name} country={country} />;
        })}
      </Grid>
    </>
  );
}
