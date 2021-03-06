import { IconButton, Menu, MenuItem, MuiThemeProvider } from '@material-ui/core';
import MenuIcon from "@material-ui/icons/Menu";
import routes, { MyRouteProps } from "../../../routes";
import { Link } from "react-router-dom";
import useMenu from '../../../hooks/useMenu';
import { menuTheme } from '../../../theme';

const listRoutes = {
    home: "Início",
};
const menuRoutes = routes.filter((route) =>
    Object.keys(listRoutes).includes(route.name)
);

export const MenuCategories: React.FunctionComponent = () => {
    const { open, anchorEl, handleOpen, handleClose } = useMenu();

    return (
        <MuiThemeProvider theme={menuTheme}>
            <div>
                <IconButton
                    //edge="start"
                    color="inherit"
                    // aria-label="open drawer"
                    // aria-controls="menu-appbar"
                    // aria-haspopup="true"
                    onClick={handleOpen}
                >
                    <MenuIcon />
                </IconButton>

                <Menu
                    // id="menu-appbar"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                    transformOrigin={{ vertical: 'top', horizontal: 'center' }}
                    getContentAnchorEl={null}
                >
                    {Object.keys(listRoutes).map((routeName, key) => {
                        const route = menuRoutes.find(
                            (route) => route.name === routeName
                        ) as MyRouteProps;
                        return (
                            <MenuItem
                                key={key}
                                component={Link}
                                to={route.path as string}
                                onClick={handleClose}
                            >
                                {listRoutes[routeName as keyof typeof listRoutes]}
                            </MenuItem>
                        );
                    })}

                    {
                        // <MenuItem
                        //     component={Link}
                        //     to={'/categories/1'}
                        //     onclick={handleClose}
                        // >
                        //     Categorias
                        // </MenuItem>
                    }
                </Menu>
            </div >
        </MuiThemeProvider>
    );
};

export default MenuCategories;