import { ThemeProvider } from '@mui/material/styles';
import { DefaultTheme } from './theme/DefaultTheme';
import PublicPage from './PublicPage';

const PublicLayout = ({children} :any) => {

      const defaultTheme = DefaultTheme;

    return(
        <ThemeProvider theme={defaultTheme}>
          <PublicPage>
            {children}
          </PublicPage>
        </ThemeProvider>
    )
}

export default PublicLayout;