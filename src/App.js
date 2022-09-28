import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Hero from './components/Hero';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar position="relative">
      <Toolbar>
        <Typography variant="h6" color="inherit" noWrap>
          Album layout
        </Typography>
      </Toolbar>
    </AppBar>
    <main>
      <Hero />
    </main>
    </ThemeProvider>
  );
}

export default App;
