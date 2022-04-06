import { Box, ListItemIcon, ListItemText, Menu as MuiMenu, MenuItem } from '@material-ui/core';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Arrow from "@material-ui/icons/KeyboardArrowDown";
import useMenu from '../../../hooks/useMenu';

const MenuAccount: React.FunctionComponent = () => {
    const {open, anchorEl, handleOpen, handleClose} = useMenu();

    return (
        <div>
            <Box
                display="flex"
                alignItems={"center"}
                flexDirection={"row"}
                px={1}                      // 8 px
                onClick={handleOpen}
                style={{ cursor: "pointer" }}
            >
                Nome usuário
                <Arrow />
            </Box>
            <MuiMenu
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
            </MuiMenu>
        </div >
    );
};

export default MenuAccount;