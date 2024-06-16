import { ThemeProvider } from '@mui/material/styles';
import { DefaultTheme } from './theme/DefaultTheme';
import AdminPage from './AdminPage';
import Confirm from './dialog/Confirm';

const AdminLayout = ({children} :any) => {

      const defaultTheme = DefaultTheme;

    return(
        <ThemeProvider theme={defaultTheme}>
          <Confirm />
          <AdminPage>
            {children}
          </AdminPage>
        </ThemeProvider>
    )
}

export default AdminLayout;