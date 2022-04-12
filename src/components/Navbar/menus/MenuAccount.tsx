import { Box, ListItemIcon, ListItemText, Menu, MenuItem, MuiThemeProvider } from '@material-ui/core';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Arrow from "@material-ui/icons/KeyboardArrowDown";
import useMenu from '../../../hooks/useMenu';
import { menuTheme } from '../../../theme';
import UserInformation from '../../UserInformation';

const MenuAccount: React.FunctionComponent = () => {
    const { open, anchorEl, handleOpen, handleClose } = useMenu();

    return (
        <MuiThemeProvider theme={menuTheme}>
            <div>
                <Box
                    display="flex"
                    alignItems={"center"}
                    flexDirection={"row"}
                    px={1}                      // 8 px
                    onClick={handleOpen}
                    style={{ cursor: "pointer" }}
                >
                    <UserInformation />
                    <Arrow />
                </Box>
                <Menu
                    // id="menu-appbar"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                    getContentAnchorEl={null}
                >
                    <MenuItem>
                        <ListItemIcon style={{ color: "inherit" }}>
                            <ExitToAppIcon />
                        </ListItemIcon>
                        <ListItemText primary="sair" />
                    </MenuItem>
                </Menu>
            </div >
        </MuiThemeProvider>
    );
};

export default MenuAccount;