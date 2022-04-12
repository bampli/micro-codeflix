import {
    AppBar,
    Dialog,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Toolbar,
    Typography
} from "@material-ui/core";
import TransitionSlide from "../components/transitions/TransitionSlide";
import { Close, ExitToApp } from "@material-ui/icons";
import { useCallback } from "react";
import UserInformation from "./UserInformation";

export interface DialogMyAccountProps {
    open: boolean;
    onClose?: () => void;
};

const DialogMyAccount: React.FunctionComponent<DialogMyAccountProps> = (props) => {
    const { open, onClose } = props;

    const handleClose = useCallback(() => {
        onClose && onClose();
    }, [onClose]);

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={handleClose}
            TransitionComponent={TransitionSlide}
        >
            <AppBar position={"static"}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        onClick={handleClose}
                        aria-label="close"
                    >
                        <Close />
                    </IconButton>
                    <Typography variant="h6">Minha conta</Typography>
                </Toolbar>
            </AppBar>
            <List>
                <ListItem>
                    <UserInformation />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItem color={"primary"} >
                        <ExitToApp />
                    </ListItem>
                    <ListItemText primary="Sair" />
                </ListItem>
            </List>
        </Dialog>
    );
}

export default DialogMyAccount;