import { ThemeProvider } from '@mui/material/styles';
import { DefaultTheme } from './theme/DefaultTheme';
import AdminPage from './AdminPage';

const AdminLayout = ({children} :any) => {

      const defaultTheme = DefaultTheme;

    return(
        <ThemeProvider theme={defaultTheme}>
          <AdminPage>
            {children}
          </AdminPage>
        </ThemeProvider>
    )
}

export default AdminLayout;