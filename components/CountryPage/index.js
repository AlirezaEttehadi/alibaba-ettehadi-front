import { useRouter } from "next/router";

import { Button, CardMedia, Grid } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

import CountryDetails from "./components/CountryDetails";

export default function CountryPage({ country }) {
  const router = useRouter();
  return (
    <>
      <Button
        variant="contained"
        startIcon={<KeyboardBackspaceRoundedIcon />}
        onClick={() => router.back()}
      >
        Back
      </Button>
      <Grid container spacing={2} mt={5}>
        <Grid item xs={12} md={6}>
          <CardMedia
            component="img"
            image={country.flags.svg}
            alt={`The falg of${country.name}`}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <CountryDetails country={country} />
        </Grid>
      </Grid>
    </>
  );
}
