import { Button, Grid, Typography } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";
import { Box } from "@mui/system";

export default function Country() {
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
              Belgium
            </Typography>
          </Box>
          <Grid container spacing={2} mb={4}>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Native Name:
                </Typography>
                <Typography variant="body2">Belgie</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Population:
                </Typography>
                <Typography variant="body2">11,319,511</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Region:
                </Typography>
                <Typography variant="body2">Europe</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Sub Region:
                </Typography>
                <Typography variant="body2">Western Europe</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Capital:
                </Typography>
                <Typography variant="body2">Brussels</Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Top Level Domain:
                </Typography>
                <Typography variant="body2">.be</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Currencies:
                </Typography>
                <Typography variant="body2">Euro</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <Typography variant="body1" mr={0.5}>
                  Languages:
                </Typography>
                <Typography variant="body2">Dutch, French, German</Typography>
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography variant="body1" mr={0.5}>
                Border Countries:
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <Button variant="contained">France</Button>
              <Button variant="contained" sx={{ marginX: 1 }}>
                Germany
              </Button>
              <Button variant="contained">Netherlands</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
