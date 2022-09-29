import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
    <div style={{ width: "100%" }}>
      <Box sx={{ bgcolor: "#00276c" }}>
        <Typography
          variant="h3"
          align="center"
          color="white"
          paragraph
          sx={{ pt: 4 }}
        >
          What Is Ribbit?
        </Typography>
        <Box
          sx={{
            display: "grid",
            bgcolor: "#00276C",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          <Item>
            Ribbit is a novel digital text messaging mode for VHF/UHF
            communications for recreational and emergency use which radically
            increases the density of information transmitted by spectrum used.
          </Item>
          <Item>
            It leverages the computing power of the modern smartphone to
            increase the capabilities of any Handy Talkie without requiring any
            additional hardware.
          </Item>
          <Item>
            Its redundant distributed nature allows it to function even when
            internet connectivity is lost during emergencies.
          </Item>
          <Item>
            Ribbit is open source and currently in its early stages of
            development.
          </Item>
        </Box>
      </Box>
    </div>
  );
}
