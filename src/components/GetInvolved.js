import {
  Box,
  Grid,
  Table,
  Typography,
  TableRow,
  TableBody,
} from "@mui/material";

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
        <Grid item>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableBody>
              <TableRow>
                <Typography>
                  <h2>Want to stay informed?</h2>
                  <Typography>
                    Subscribe to the{" "}
                    <a href="http://lists.openresearch.institute/listinfo.cgi/Ribbit-Announcements-openresearch.institute">
                      Ribbit-Announcements
                    </a>{" "}
                    mailing list where we announce major feature releases and
                    app updates.
                  </Typography>
                </Typography>
              </TableRow>
              <TableRow>
                <Typography>
                  <h2> Want to test the technology?</h2>
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
                </Typography>
              </TableRow>
              <TableRow>
                <Typography>
                  Note: Tech demo is called rattlegram - Ribbit name will be
                  used when we reach Alpha release
                </Typography>
              </TableRow>
              <TableRow>
                <Typography>
                  <h2>Are you a developer and want to contribute?</h2>
                  <Typography>
                    See the code{" "}
                    <a href="https://github.com/aicodix/rattlegram">
                      GitHub Repo
                    </a>
                  </Typography>
                </Typography>
              </TableRow>
              <TableRow>
                <Typography>
                  Subscribe to the{" "}
                  <a href="http://lists.openresearch.institute/listinfo.cgi/Ribbit-Developers-openresearch.institute">
                    Ribbit-Developers
                  </a>{" "}
                  mailing list where we discuss the code.
                </Typography>
              </TableRow>
              <TableRow>
                <Typography>
                  <h2>Join the user community?</h2>
                  <Typography>
                    Subscribe to the{" "}
                    <a href="http://lists.openresearch.institute/listinfo.cgi/Ribbit-Users-openresearch.institute">
                      Ribbit-Users
                    </a>{" "}
                    discussion mailing list where users can discuss the use of
                    the app, report success and help each other.
                  </Typography>
                </Typography>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </Box>
  );
}
