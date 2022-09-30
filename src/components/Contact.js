import { Box, Button, Grid, Typography, TextField } from "@mui/material";

export default function Contact() {
  const handleSubmit = (e) => true;
  return (
    <Box sx={{ bgcolor: "#00276c", minHeight: "100vh" }}>
      <Typography
        variant="h3"
        align="center"
        color="white"
        paragraph
        sx={{ pt: 4 }}
      >
        Contact Us
      </Typography>
      <Box
        m="auto"
        sx={{
          bgcolor: "white",
          border: "1px solid",
          borderRadius: 2,
          display: "flex",
          maxWidth: 400,
          p: 2,
        }}
      >
        <Grid container alignItems="center" justifyContent="center">
          <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
            <TextField
              id="outlined-basic"
              placeholder="Enter your name"
              label="Name"
              variant="outlined"
              required
              type="text"
              sx={{ width: 320, pb: 3 }}
            />

            <TextField
              id="outlined-basic"
              label="Email"
              placeholder="Enter email address"
              variant="outlined"
              required
              type="email"
              sx={{ width: 320, pb: 3 }}
            />
            <TextField
              id="standard-multiline-flexible"
              label="Message"
              placeholder="Enter Message"
              variant="outlined"
              multiline
              rows={4}
              required
              type="text"
              sx={{ width: 320, pb: 3 }}
            />
          </form>
          <Button variant="contained" align="center">
            Submit
          </Button>
        </Grid>
      </Box>
    </Box>
  );
}
