import Link from "next/link";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { useTheme } from "@emotion/react";

export default function CountryCard({ country }) {
  const theme = useTheme();
  return (
    <Link href={`/${country.name}/`} passHref>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <Card sx={{ backgroundColor: theme.palette.primary.main }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={country.flags.svg}
              alt={`The falg of${country.name}`}
              loading="lazy"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {country.name}
              </Typography>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Population:
                </Typography>
                <Typography variant="body2">{country.population}</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Region:
                </Typography>
                <Typography variant="body2">{country.region}</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Capital:
                </Typography>
                <Typography variant="body2">{country.capital}</Typography>
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Link>
  );
}
