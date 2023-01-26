import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Hero from "./components/Hero";
import About from "./components/About";
import AppMenu from "./components/Menu";
import DevTeam from "./components/DevTeam";
import GetInvolved from "./components/GetInvolved";

const theme = createTheme({
  background: {
    default: "#509512",
  },
});

function App() {
  const home = React.useRef(null);
  const about = React.useRef(null);
  const devteam = React.useRef(null);
  const involved = React.useRef(null);
  const sections = [
    { displayName: "Home", sectionRef: home },
    { displayName: "About", sectionRef: about },
    { displayName: "DevTeam", sectionRef: devteam },
    { displayName: "Get Involved", sectionRef: involved },
  ];
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppMenu menuSections={sections} />
      <main>
        <div ref={home}>
          <Hero />
        </div>
        <div ref={about}>
          <About />
        </div>
        <div ref={devteam}>
          <DevTeam />
        </div>
        <div ref={involved}>
          <GetInvolved />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
