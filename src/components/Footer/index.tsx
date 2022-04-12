import { AppBar, BottomNavigation, makeStyles } from "@material-ui/core";
import {
    Home as HomeIcon,
    Notifications as NotificationsIcon,
    Person as PersonIcon
} from "@material-ui/icons";
import { useCallback, useMemo, useState } from "react";
import DialogMyAccount from "../DialogMyAccount";
import FooterItem from "./FooterItem";
import { createBrowserHistory } from "history";
import routes from "../../routes";
import { matchPath } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: theme.palette.background.default,
        bottom: 0,
        top: "auto",
        borderTop: `1px solid ${theme.palette.text.secondary}`,
        height: "48px",
    },
    bottomNavigation: {
        backgroundColor: "inherit",
    }
}));

const Footer: React.FunctionComponent = () => {
    const classes = useStyles();

    const [openDialogAccount, setOpenDialogAccount] = useState(false);
    const history = createBrowserHistory();
    const pathName = history.location.pathname;

    const currentRoute = useMemo(() =>
        routes.find((r) => matchPath(pathName, r.path!))?.name,
        [pathName]
    );

    console.log("CURRENTROUTE", currentRoute);

    const goHome = useCallback(() => {
        history.push("/");
    }, [history])

    const goMyAccount = useCallback(() => {
        setOpenDialogAccount(true);
    }, []);

    const onDialogAccountClose = useCallback(() => {
        setOpenDialogAccount(false);
    }, []);

    return (
        <div className={classes.root}>
            <AppBar
                classes={{
                    root: classes.appBar,
                }}
                position="fixed"
                color="primary"
            >
                <BottomNavigation
                    className={classes.bottomNavigation}
                    showLabels
                    value={currentRoute}
                >
                    <FooterItem
                        label="Home"
                        value="home"
                        icon={<HomeIcon />}
                        onClick={goHome}
                    />
                    <FooterItem
                        label="Categorias"
                        value="categories"
                        icon={<HomeIcon />} />
                    <FooterItem
                        label="Notificações"
                        icon={<NotificationsIcon />}
                    />
                    <FooterItem
                        label="Conta"
                        icon={<PersonIcon />}
                        onClick={goMyAccount}
                    />
                </BottomNavigation>
            </AppBar>
            <DialogMyAccount
                open={openDialogAccount}
                onClose={onDialogAccountClose}
            />
        </div>
    );
};

export default Footer;