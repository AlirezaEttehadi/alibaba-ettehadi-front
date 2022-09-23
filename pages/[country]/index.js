import { Button, Grid } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

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
          asdfasdf
        </Grid>
      </Grid>
    </>
  );
}
