import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { MenuItem, Typography } from "@mui/material";
import Hero from "./components/Hero";
import About from "./components/About";

const theme = createTheme();

function App() {
  const section = ["About Ribbit", "Benefits", "Contact Us"];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" sx={{ bgcolor: "#010638" }}>
        <Toolbar>
          {section.map((page) => (
            <MenuItem key={page}>
              <Typography textAlign="center">{page}</Typography>
            </MenuItem>
          ))}
        </Toolbar>
      </AppBar>
      <main>
        <Hero />
        <About />
      </main>
    </ThemeProvider>
  );
}

export default App;
