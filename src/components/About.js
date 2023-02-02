import * as React from "react";
import PropTypes from "prop-types";
import { Grid, Box, Typography } from "@mui/material";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsPhoneVibrate } from "react-icons/bs";
import { FaConnectdevelop, FaUsers } from "react-icons/fa";
import { GoBeaker } from "react-icons/go";

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

export default function About() {
  return (
    <Box sx={{ bgcolor: "#509512", minHeight: "75vh" }}>
      <Typography
        variant="h3"
        align="center"
        color="white"
        paragraph
        sx={{ pt: 8 }}
      >
        About
      </Typography>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "50px",
              }}
            >
              <FaUsers />
            </div>
            <Typography
              textAlign={"center"}
              fontSize={"0.875rem"}
              fontWeight={"700"}
              marginTop={"20px"}
            >
              Ribbit is a project of the{" "}
              <a href="https://www.openresearch.institute/about-open-research-institute/">
                Open Research Institute
              </a>
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "50px",
              }}
            >
              <BiMessageAltDetail />
            </div>
            <Typography
              textAlign={"center"}
              fontSize={"0.875rem"}
              fontWeight={"700"}
              marginTop={"20px"}
            >
              Ribbit is a novel digital text messaging mode for VHF/UHF
              communications for recreational and emergency use which radically
              increases the density of information transmitted by spectrum used.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "50px",
              }}
            >
              <BsPhoneVibrate />
            </div>
            <Typography
              textAlign={"center"}
              fontSize={"0.875rem"}
              fontWeight={"700"}
              marginTop={"20px"}
            >
              It leverages the computing power of the modern smartphone to
              increase the capabilities of any Handy Talkie without requiring
              any additional hardware.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "50px",
              }}
            >
              <FaConnectdevelop />
            </div>
            <Typography
              textAlign={"center"}
              fontSize={"0.875rem"}
              fontWeight={"700"}
              marginTop={"20px"}
            >
              Its redundant distributed nature allows it to function even when
              internet connectivity is lost during emergencies.
            </Typography>
          </Item>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Item>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "50px",
              }}
            >
              <GoBeaker />
            </div>
            <Typography
              textAlign={"center"}
              fontSize={"0.875rem"}
              fontWeight={"700"}
              marginTop={"20px"}
            >
              Ribbit is open source and currently in its early stages of
              development.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
