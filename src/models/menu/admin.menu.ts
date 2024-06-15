import AdminMainMenu from "./admin.main.menu";
import AdminSettingsMenu from "./admin.settings.menu";
import { MenusInterface } from "./menus.interface";

const AdminMenu:MenusInterface = {
    mainMenu:AdminMainMenu,
    settingsMenu:AdminSettingsMenu
}

export default AdminMenu;