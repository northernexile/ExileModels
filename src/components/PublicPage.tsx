import { Box, CssBaseline } from "@mui/material"
import ExileAppBar from "./ExileAppBar"
import ExileAppFooter from "./ExileAppFooter"
import MainMenu from "../models/menu/main.menu"
import ProfileMenu from "../models/menu/profile.menu"

const PublicPage = ({children}:any) => {

    const props = {
        mainMenu: MainMenu,
        settingsMenu:ProfileMenu
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

export default PublicPage;