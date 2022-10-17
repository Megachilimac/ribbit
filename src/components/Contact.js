import { Box, Button, Grid, Typography, TextField } from "@mui/material";
import { useForm, Controller } from "react-hook-form";

export default function Contact() {
  const { handleSubmit, control, reset } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

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
        display="grid"
        m="auto"
        sx={{
          bgcolor: "white",
          border: "1px solid",
          borderRadius: 2,
          maxWidth: 400,
          p: 2,
        }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12}>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="First Name*"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    sx={{ width: 350 }}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: "First name required" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Last Name*"
                    variant="filled"
                    sx={{ width: 350 }}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                  />
                )}
                rules={{ required: "Last name required" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="callsign"
                control={control}
                defaultValue=""
                render={({ field: { onChange, value } }) => (
                  <TextField
                    label="Callsign"
                    variant="filled"
                    value={value}
                    onChange={onChange}
                    sx={{ width: 350 }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Email*"
                    variant="filled"
                    value={value}
                    sx={{ width: 350 }}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    type="email"
                  />
                )}
                rules={{ required: "Email required" }}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="message"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <TextField
                    label="Message*"
                    variant="filled"
                    multiline
                    rows={4}
                    sx={{ width: 350 }}
                    value={value}
                    onChange={onChange}
                    error={!!error}
                    helperText={error ? error.message : null}
                    type="text"
                  />
                )}
                rules={{ required: "Please enter a message" }}
              />
            </Grid>
            <Box textAlign="center">
              <Button
                type="submit"
                sx={{ marginTop: "10px" }}
                variant="contained"
                color="primary"
              >
                Send
              </Button>
            </Box>
          </Grid>
        </form>
      </Box>
    </Box>
  );
}
