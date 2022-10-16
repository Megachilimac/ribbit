import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import mascot from "../images/ribbit-logo.png";
import Image from "mui-image";

export default function Hero() {
  return (
    <Box
      sx={{
        pt: 8,
        pb: 14,
        bgcolor: "#509512",
      }}
    >
      <Container maxWidth="sm">
        <Image src={mascot} alt="Mascot" width="500" height="600" />
        <Typography
          variant="h5"
          align="center"
          color="white"
          paragraph
          sx={{ pt: 8 }}
        >
          A new digital text messaging mode for VHF/UHF emergency communications
        </Typography>
      </Container>
    </Box>
  );
}
