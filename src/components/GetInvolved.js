import { Box, Grid, Typography, List, ListItemText } from "@mui/material";
import PropTypes from "prop-types";

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "#fff",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        p: 1,
        m: 1,
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        minHeight: "10vw",
        ...sx,
      }}
      {...other}
    />
  );
}

Item.propTypes = {
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function GetInvolved() {
  return (
    <Box sx={{ bgcolor: "#509512", minHeight: "75vh" }}>
      <Typography
        variant="h3"
        align="center"
        color="white"
        paragraph
        sx={{ pt: 8 }}
      >
        Get Involved
      </Typography>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} md={8}>
          <Item>
            <ListItemText>
              <Typography>
                <h2>Want to stay informed?</h2>
                <Typography>
                  Subscribe to the{" "}
                  <a href="http://lists.openresearch.institute/listinfo.cgi/Ribbit-Announcements-openresearch.institute">
                    Ribbit-Announcements
                  </a>{" "}
                  mailing list where we announce major feature releases and app
                  updates.
                </Typography>
              </Typography>
            </ListItemText>
          </Item>
        </Grid>
        <Grid item xs={12} md={8}>
          <Item>
            <List
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 6,
              }}
            >
              <Typography>
                <h2> Want to test the technology?</h2>
                <ListItemText>
                  <Typography>
                    Download Tech Demo 'Rattlegram' on Google Play Store
                    <a href="https://play.google.com/store/apps/details?id=com.aicodix.rattlegram&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
                      <img
                        alt="Get it on Google Play"
                        height={"auto"}
                        width={"153px"}
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                      />
                    </a>
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography>
                    <h4>
                      {" "}
                      Note: Tech demo is called rattlegram - Ribbit name will be
                      used when we reach Alpha release{" "}
                    </h4>
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography>
                    Test your reception with the{" "}
                    <a href="https://youtube.com/shorts/PbRfXTfnlf8">
                      Test Signal
                    </a>{" "}
                    on YouTube
                  </Typography>
                </ListItemText>
                <ListItemText>
                  <Typography>
                    Subscribe to the
                    <a href="http://lists.openresearch.institute/listinfo.cgi/Ribbit-Users-openresearch.institute">
                      Ribbit-Users
                    </a>
                    discussion mailing list where users can discuss the use of
                    the app, report success and help each other.
                  </Typography>
                </ListItemText>
              </Typography>
            </List>
          </Item>
        </Grid>
        <Grid item xs={12} md={8}>
          <Item>
            <Typography>
              <h2>Are you a developer?</h2>
              <Typography>
                Download and view the source on
                <a href="https://github.com/aicodix/rattlegram">GitHub</a>
              </Typography>
              <Typography>
                Subscribe to the{" "}
                <a href="http://lists.openresearch.institute/listinfo.cgi/Ribbit-Developers-openresearch.institute">
                  Ribbit-Developers
                </a>{" "}
                mailing list where we discuss the code.
              </Typography>
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} md={8}>
          <Item>
            <Typography>
              <h2>Join the user community?</h2>
              <Typography>
                Subscribe to the{" "}
                <a href="http://lists.openresearch.institute/listinfo.cgi/Ribbit-Users-openresearch.institute">
                  Ribbit-Users
                </a>{" "}
                discussion mailing list where users can discuss the use of the
                app, report success and help each other.
              </Typography>
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
