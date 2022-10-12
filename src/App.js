import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Menu from "./components/Menu";

const theme = createTheme();

function App() {
  const home = React.useRef(null);
  const about = React.useRef(null);
  const contact = React.useRef(null);
  const sections = [
    { displayName: "Home", sectionRef: home },
    { displayName: "About", sectionRef: about },
    { displayName: "Contact Us", sectionRef: contact },
  ];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Menu menuSections={sections} />
      <main>
        <div ref={home}>
          <Hero />
        </div>
        <div ref={about}>
          <About />
        </div>
        <div ref={contact}>
          <Contact />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
