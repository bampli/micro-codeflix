import { ThemeProvider, Menu, MenuItem } from "@material-ui/core";
import { Movie as MovieIcon } from "@material-ui/icons";
import FooterItem, { FooterItemProps } from "./FooterItem";
import { Link } from "react-router-dom";
import useMenu from "../../hooks/useMenu";
import menuTheme from "../../theme";

interface FooterCategoriesItemProps extends FooterItemProps {
    currentRoute: string | undefined;
};

const FooterCategoriesItem: React.FunctionComponent<FooterCategoriesItemProps> = (props) => {
    const { open, anchorEl, handleOpen, handleClose } = useMenu();
    const { currentRoute, ...other } = props;

    return (
        <>
            <FooterItem
                {...other}
                label="Conteúdos"
                icon={<MovieIcon />}
                onClick={handleOpen}
                selected={currentRoute === 'video.by-category'}
            />
            <ThemeProvider theme={menuTheme} >
                <Menu
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                    transformOrigin={{ vertical: "bottom", horizontal: "center" }}
                    getContentAnchorEl={null}
                >
                    <MenuItem
                        component={Link}
                        to={`/categories/film-id`}
                        onClick={handleClose}
                    >
                        Filmes
                    </MenuItem>
                    <MenuItem
                        component={Link}
                        to={`/categories/documentary-id`}
                        onClick={handleClose}
                    >
                        Documentários
                    </MenuItem>
                </Menu>
            </ThemeProvider>
        </>
    );
};

export default FooterCategoriesItem;