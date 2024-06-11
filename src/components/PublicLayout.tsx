import { Box, CssBaseline } from '@mui/material';
import { ThemeOptions, ThemeProvider, createTheme } from '@mui/material/styles';
import ExileAppBar from './ExileAppBar';
import ExileAppFooter from './ExileAppFooter';

const PublicLayout = ({children} :any) => {

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

      const defaultTheme = createTheme(themeOptions)

    return(
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}>
                <CssBaseline />
                <ExileAppBar />
                {children}
                <ExileAppFooter />
            </Box>
        </ThemeProvider>
    )
}

export default PublicLayout;