import React from 'react';
import {Box, CssBaseline} from '@mui/material';
import ExileAppBar from './components/ExileAppBar';
import Home from './pages/Home';
import ExileAppFooter from './components/ExileAppFooter';

import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#25555c',
    },
    secondary: {
      main: '#f50057',
    },
  },
};

const defaultTheme = createTheme(themeOptions)

const MyApp = () => {
  return(
    <ThemeProvider theme={defaultTheme}>
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  }}>
    <CssBaseline />
    <ExileAppBar />
    <Home />
    <ExileAppFooter />
  </Box>
  </ThemeProvider>
  )
}

export default MyApp