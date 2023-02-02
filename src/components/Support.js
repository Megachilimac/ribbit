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

export default function Support() {
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
          Support
        </Typography>
        <Box alignItems="center" justifyContent="center">
          <List
            style={{
              display: "flex",
              flexDirection: "column",
              padding: 12,
            }}
          >
            <ListItemText>
              <Typography
                variant="h4"
                color="white"
                paddingBottom={6}
                align="center"
              >
                <a href="https://www.openresearch.institute/about-open-research-institute/">
                  Donate
                </a>{" "}
                to support iOS & Ribbit development
              </Typography>
            </ListItemText>
            <ListItemText>
              {/* <Box
                display="flex"
                width={500}
                height={80}
                alignItems="center"
                justifyContent="center"
              > */}
              <Typography variant="h4" color="white" align="center">
                Web designers, if you would like to help improve the RibbitRadio
              </Typography>
              <Typography variant="h4" color="white" align="center">
                website, reach out on the{" "}
                <a href="http://lists.openresearch.institute/listinfo.cgi/Ribbit-Developers-openresearch.institute">
                  Developers
                </a>{" "}
                mailing list
              </Typography>
              {/* </Box> */}
            </ListItemText>
          </List>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
