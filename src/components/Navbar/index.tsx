import { AppBar, Grid, IconButton, makeStyles, Toolbar } from '@material-ui/core';
import SearchIcon from "@material-ui/icons/Search";
import useIsSmallWindow from '../../hooks/useIsSmallWindow';
import InputSearch from '../InputSearch';
import MenuAccount from './menus/MenuAccount';
import MenuCategories from './menus/MenuCategories';
import Notifications from './Notifications';
import Title from './Title';
import DialogSearchContext from "../DialogSearch/DialogSearchContext";
import { useCallback, useContext } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const Navbar: React.FunctionComponent = () => {
    const classes = useStyles();
    const isSmallWindow = useIsSmallWindow();
    const dialogContext = useContext(DialogSearchContext);

    const handleOpen = useCallback(() => {
        dialogContext.show();
    }, [dialogContext]);

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    {!isSmallWindow && <MenuCategories />}
                    <Title />
                    {!isSmallWindow && (
                        <>
                            <Grid container justifyContent="center">
                                <Grid item xs={8} lg={7}>
                                    <InputSearch />
                                </Grid>
                            </Grid>
                            <Notifications />
                            <MenuAccount />
                        </>
                    )}
                    {isSmallWindow && (
                        <Grid container justifyContent={"flex-end"}>
                            <IconButton onClick={handleOpen}>
                                <SearchIcon />
                            </IconButton>
                        </Grid>
                    )}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;