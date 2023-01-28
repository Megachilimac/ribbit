import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Hero from "./components/Hero";
import About from "./components/About";
import AppMenu from "./components/Menu";
import GetInvolved from "./components/GetInvolved";
import Learn from "./components/Learn";

const theme = createTheme({
  background: {
    default: "#509512",
  },
});

function App() {
  const home = React.useRef(null);
  const about = React.useRef(null);
  const involved = React.useRef(null);
  const learn = React.useRef(null);
  const sections = [
    { displayName: "Home", sectionRef: home },
    { displayName: "About", sectionRef: about },
    { displayName: "Learn", sectionRef: learn },
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
        <div ref={learn}>
          <Learn />
        </div>
        <div ref={involved}>
          <GetInvolved />
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
