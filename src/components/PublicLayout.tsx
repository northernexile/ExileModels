import { ThemeProvider } from '@mui/material/styles';
import { DefaultTheme } from './theme/DefaultTheme';
import PublicPage from './PublicPage';
import Confirm from './dialog/Confirm';

const PublicLayout = ({children} :any) => {

      const defaultTheme = DefaultTheme;

    return(
        <ThemeProvider theme={defaultTheme}>
          <Confirm />
          <PublicPage>
            {children}
          </PublicPage>
        </ThemeProvider>
    )
}

export default PublicLayout;