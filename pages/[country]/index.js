import { Button, Grid, Typography } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { Box } from "@mui/system";
import axios from "axios";

export default function Country({ country }) {
  const _country = country?.[0];
  return (
    <>
      <Button variant="contained" startIcon={<KeyboardBackspaceRoundedIcon />}>
        Back
      </Button>
      <Grid container spacing={2} mt={5}>
        <Grid item xs={12} md={6}>
          asdfasdfasdf
        </Grid>
        <Grid item xs={12} md={6}>
          <Box mb={4}>
            <Typography gutterBottom variant="h5" component="div">
              {_country.name}
            </Typography>
          </Box>
          <Grid container spacing={2} mb={4}>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Native Name:
                </Typography>
                <Typography variant="body2">{_country.nativeName}</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Population:
                </Typography>
                <Typography variant="body2">{_country.population}</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Region:
                </Typography>
                <Typography variant="body2">{_country.region}</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Sub Region:
                </Typography>
                <Typography variant="body2">{_country.subregion}</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Capital:
                </Typography>
                <Typography variant="body2">{_country.capital}</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Top Level Domain:
                </Typography>
                {_country.topLevelDomain.map((domain) => {
                  return (
                    <Typography key={domain} variant="body2">
                      {domain}
                    </Typography>
                  );
                })}
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Currencies:
                </Typography>
                {_country.currencies.map((currency) => {
                  return (
                    <Typography key={currency.name} variant="body2">
                      {currency.name}
                    </Typography>
                  );
                })}
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Languages:
                </Typography>
                {_country.languages.map((language) => {
                  return (
                    <Typography
                      key={language.name}
                      variant="body2"
                      sx={{ marginRight: 1 }}
                    >
                      {language.name}
                    </Typography>
                  );
                })}
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2} display="flex" alignItems="center">
            <Grid item xs={12} md={3}>
              <Typography variant="body1" mr={0.5}>
                Border Countries:
              </Typography>
            </Grid>
            <Grid item xs={12} md={9}>
              {_country.borders.map((border) => {
                return (
                  <Button
                    key={border}
                    variant="contained"
                    sx={{ marginRight: 1 }}
                  >
                    {border}
                  </Button>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export async function getServerSideProps({ params }) {
  const { data: country } = await axios.get(
    `https://restcountries.com/v2/name/${params.country}`
  );
  return {
    props: {
      country,
    },
  };
}
