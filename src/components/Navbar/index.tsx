import { AppBar, Grid, makeStyles, Toolbar } from '@material-ui/core';
import InputSearch from '../InputSearch';
import MenuAccount from './menus/MenuAccount';
import MenuCategories from './menus/MenuCategories';
import Notifications from './Notifications';
import Title from './Title';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    }
}));

const Navbar: React.FunctionComponent = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="fixed">
                <Toolbar>
                    <MenuCategories />
                    <Title />
                    <Grid container justifyContent="center">
                        <Grid item xs={8} lg={7} xl={7}>
                            <InputSearch />
                        </Grid>
                    </Grid>
                    <Notifications />
                    <MenuAccount />
                    {/* Busca, notificações e menu conta */}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;