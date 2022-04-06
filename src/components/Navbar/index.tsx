import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
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
                    {/* Menu categorias */}
                    <Title />
                    <Notifications />
                    {/* Busca, notificações e menu conta */}
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Navbar;