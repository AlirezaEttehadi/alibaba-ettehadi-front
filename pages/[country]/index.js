import { Button } from "@mui/material";
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded";

export default function Country() {
  return (
    <Button variant="contained" startIcon={<KeyboardBackspaceRoundedIcon />}>
      Back
    </Button>
  );
}
