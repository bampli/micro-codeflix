import { Box, Menu, MenuItem, MuiThemeProvider } from '@material-ui/core';
import ArrowDown from "@material-ui/icons/KeyboardArrowDown";
//import { Link } from "react-router-dom";
import useMenu from '../hooks/useMenu';
import { menuTheme } from '../theme';

export const MenuGenre: React.FunctionComponent = () => {
    const { open, anchorEl, handleOpen, handleClose } = useMenu();

    return (
        <MuiThemeProvider theme={menuTheme}>
            <div>
                <Box
                    display="flex"
                    alignItems="center"
                    flexDirection="row"
                    style={{cursor: "pointer"}}
                    px={1}
                    onClick={handleOpen}
                >
                    Ação
                    <ArrowDown />
                </Box>

                <Menu
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                    getContentAnchorEl={null}
                >
                    <MenuItem
                        // key={key}
                        // component={Link}
                        // to={route.path as string}
                        onClick={handleClose}
                    >
                        Todos gêneros
                    </MenuItem>
                    <MenuItem
                        // key={key}
                        // component={Link}
                        // to={route.path as string}
                        onClick={handleClose}
                    >
                        Ação
                    </MenuItem>
                </Menu>
            </div >
        </MuiThemeProvider>
    );
};

export default MenuGenre;