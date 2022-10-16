import { Box, Button, Grid, Typography, TextField } from "@mui/material";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [callsign, setCallsign] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => true;
  return (
    <Box sx={{ bgcolor: "#509512", minHeight: "100vh" }}>
      <Typography
        variant="h3"
        align="center"
        color="white"
        paragraph
        sx={{ pt: 8 }}
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
              sx={{ width: 350, pb: 3 }}
            />
            <TextField
              id="outlined-basic"
              placeholder="Enter your callsign"
              label="Callsign"
              variant="outlined"
              type="text"
              sx={{ width: 350, pb: 3 }}
            />

            <TextField
              id="outlined-basic"
              label="Email"
              placeholder="Enter email address"
              variant="outlined"
              required
              type="email"
              sx={{ width: 350, pb: 3 }}
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
              sx={{ width: 350, pb: 3 }}
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
