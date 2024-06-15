
import { Box, CssBaseline } from "@mui/material"
import ExileAppBar from "./ExileAppBar"
import ExileAppFooter from "./ExileAppFooter"
import AdminMainMenu from "../models/menu/admin.main.menu"
import AdminSettingsMenu from "../models/menu/admin.settings.menu"

const AdminPage = ({children}:any) => {

    const props = {
        mainMenu: AdminMainMenu,
        settingsMenu:AdminSettingsMenu
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
        }}>
            <CssBaseline />
            <ExileAppBar {...props}  />
            {children}
            <ExileAppFooter />
        </Box>
    )
}

export default AdminPage;