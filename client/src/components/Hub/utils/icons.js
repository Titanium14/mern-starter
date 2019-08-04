// Icons used for collapsible drawer
import Menu from '@material-ui/icons/Menu';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';

// Icons used for nav
import Home from '@material-ui/icons/Home';
import Add from '@material-ui/icons/Add';
import Account from '@material-ui/icons/AccountCircle';
import Logout from '@material-ui/icons/ExitToApp';

// Variables containing all drawer nav options
const authIcons = [Account, Logout];
const authList = ['Profile', 'Logout'];
const authRefs = ['/Dashboard', ''];

const guestIcons = [Account];
const guestList = ['Sign In'];
const guestRefs = ['/Auth/login'];

// Icons for drawer
export const MenuIcon = Menu;
export const ChevronLeftIcon = ChevronLeft;
export const ChevronRightIcon = ChevronRight;

// Icons for drawer nav options
export const HomeIcon = Home;
export const AddIcon = Add;
export const AccountIcon = Account;
export const LogoutIcon = Logout;

// Drawer page navigation
export const navIcons = [Home, Add];
export const navList = ['Home', 'Add option'];
export const navRefs = ['/', '#'];

export const condIcons = [authIcons, guestIcons];
export const condList = [authList, guestList];
export const condRefs = [authRefs, guestRefs];
