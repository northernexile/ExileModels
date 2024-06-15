import { ThemeOptions, createTheme } from "@mui/material";

const themeOptions: ThemeOptions = {
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

  export const DefaultTheme = createTheme(themeOptions)