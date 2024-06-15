import { MenusInterface } from "./menus.interface";
import MainMenu from './main.menu';
import ProfileMenu from './profile.menu';

const WebMenu:MenusInterface = {
    mainMenu:MainMenu,
    settingsMenu: ProfileMenu
}

export default WebMenu;