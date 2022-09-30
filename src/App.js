import * as React from "react";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import { MenuItem, Typography } from "@mui/material";
import Hero from "./components/Hero";
import About from "./components/About";

const theme = createTheme();

const scrollDown = (ref) => {
  ref.current?.scrollIntoView({ behavior: "smooth" });
};

function App() {
  const about = React.useRef(null);
  const contact = React.useRef(null);
  const section = [
    { displayName: "About", sectionRef: about },
    { displayName: "Contact Us", sectionRef: contact },
  ];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative" sx={{ bgcolor: "#010638" }}>
        <Toolbar>
          {section.map((page) => (
            <MenuItem key={page} onClick={() => scrollDown(page.sectionRef)}>
              <Typography textAlign="center">{page.displayName}</Typography>
            </MenuItem>
          ))}
        </Toolbar>
      </AppBar>
      <main>
        <Hero />
        <div ref={about}>
          <About />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
