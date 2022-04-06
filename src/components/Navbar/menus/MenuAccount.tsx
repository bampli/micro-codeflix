import { Box, IconButton, ListItemIcon, ListItemText, Menu as MuiMenu, MenuItem } from '@material-ui/core';
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Arrow from "@material-ui/icons/KeyboardArrowDown";
import { MyRouteProps } from "../../../routes";
import { Link } from "react-router-dom";
import { useState } from 'react';

const MenuAccount: React.FunctionComponent = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleOpen = (event: any) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

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