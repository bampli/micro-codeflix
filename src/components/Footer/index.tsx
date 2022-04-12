import { AppBar, BottomNavigation, makeStyles } from "@material-ui/core";
import { Home, Notifications, Person } from "@material-ui/icons";
import { useCallback, useState } from "react";
import DialogMyAccount from "../DialogMyAccount";
import FooterItem from "./FooterItem";

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

    const onClickMyAccount = useCallback(() => {
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
                <BottomNavigation className={classes.bottomNavigation} showLabels>
                    <FooterItem label="Home" value="home" icon={<Home />} />
                    <FooterItem
                        label="Categories"
                        value="categories"
                        icon={<Home />} />
                    <FooterItem label="Notificações" icon={<Notifications />} />
                    <FooterItem
                        label="Conta"
                        icon={<Person />}
                        onClick={onClickMyAccount}
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