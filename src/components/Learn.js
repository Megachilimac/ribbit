import { Box, List, ListItemText, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

theme.typography.h4 = {
  fontSize: "1.2rem",
  "@media (min-width:600px)": {
    fontSize: "1.5rem",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "2rem",
  },
};

export default function Learn() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "#509512", minHeight: "100vh" }}>
        <Typography
          variant="h3"
          align="center"
          color="white"
          paragraph
          sx={{ pt: 8 }}
        >
          Learn
        </Typography>
        <div
          style={{
            textAlign: "center",
          }}
        >
          <List
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 6,
            }}
          >
            <ListItemText>
              <Typography variant="h4" color="white">
                View the{" "}
                <a href="RibbitPoster-July2022.pdf" download>
                  DEFCON Aug 2022 Poster
                </a>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="h4" color="white">
                View the QSOToday Sept 2022 presentation on{" "}
                <a href="https://youtu.be/_jN4IVccIEw">YouTube</a>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="h4" color="white">
                View the RATPAC Nov 2022 presentation on{" "}
                <a href="https://youtu.be/TGzgIjEt9wA">YouTube</a>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="h4" color="white">
                Understand how it works with HB9BLA presentation on{" "}
                <a href="https://youtu.be/ubPP48ojJ3E">YouTube</a>
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography variant="h4" color="white">
                Rattlegram demo and tutorial by Ahmet on{" "}
                <a href="https://youtu.be/0jtzA3alpuw">YouTube</a>
              </Typography>
            </ListItemText>
          </List>
        </div>
      </Box>
    </ThemeProvider>
  );
}
