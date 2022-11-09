import { Box, Typography } from "@mui/material";

export default function Download() {
  return (
    <Box sx={{ bgcolor: "#509512", minHeight: "100vh" }}>
      <Typography
        variant="h3"
        align="center"
        color="white"
        paragraph
        sx={{ pt: 8 }}
      >
        Download Tech Demo
      </Typography>
      <Typography variant="h4" align="center" color="white" paragraph>
        Try Ribbit today! Transmit text messages over VHF/UHF Tech demo
        published as ‘Rattlegram’ on Google Play Store:
      </Typography>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <a href="https://play.google.com/store/apps/details?id=com.aicodix.rattlegram&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1">
          <img
            width={"100%"}
            height={"auto"}
            alt="Get it on Google Play"
            src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
          />
        </a>
      </div>

      <Typography variant="h4" align="center" color="white">
        Test your app decoding with this
      </Typography>
      <a href="https://www.youtube.com/watch?v=PbRfXTfnlf8">
        <Typography variant="h4" align="center">
          YouTube Test Video
        </Typography>
      </a>
      <p />
      <Typography variant="h4" align="center" color="white">
        Why is app not called ‘Ribbit’? We reserve the ‘ribbit’ name when the
        app will be ready for general release
      </Typography>
    </Box>
  );
}
