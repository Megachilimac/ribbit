import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import mascot from '../images/mascot.png'
import background from '../images/line-background.jpg'

export default function Hero() {

    return (
        <Box
        sx={{
          bgcolor: 'background.paper',
          pt: 8,
          pb: 6,
        }}
        style={{
            backgroundImage: `url(${background})`,
            backgroundSize: "cover",
        }}
      >
        <Container maxWidth="sm">
          <img src={mascot} alt="Mascot" />
          <Typography variant="h5" align="center" color="green" paragraph>
          A new digital text messaging mode for VHF/UHF emergency communications
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="contained">Main call to action</Button>
            <Button variant="outlined">Secondary action</Button>
          </Stack>
        </Container>
      </Box>
    )
}