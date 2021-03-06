//import { makeStyles } from '@material-ui/core';
import { BottomNavigation, BottomNavigationAction, makeStyles, useMediaQuery, useTheme } from "@material-ui/core";
import { AddCircleOutline, PlayCircleOutline } from "@material-ui/icons";
import InfoIcon from "@material-ui/icons/Info";
import { BANNER_VIDEO_ACTIONS_MEDIA_QUERY } from "../../../../theme";

const useStyles = makeStyles(theme => ({
    // root: {
    //     flexGrow: 1,
    // },
    navigationAction: {
        color: theme.palette.text.primary,
    },
    bottomNavigation: {
        backgroundColor: "inherit",
    }
}));

interface VideoActionsMobileProps { }

const VideoActionsMobile: React.FunctionComponent<VideoActionsMobileProps> = (props) => {
    const classes = useStyles(props);
    //const isSmallWindow = useIsSmallWindow();
    const theme = useTheme();
    const isDown700 = useMediaQuery(theme.breakpoints.down(BANNER_VIDEO_ACTIONS_MEDIA_QUERY));

    return isDown700 ? (
        <BottomNavigation
            className={classes.bottomNavigation}
            showLabels
            value="Play"
        >
            <BottomNavigationAction
                className={classes.navigationAction}
                label="Play"
                icon={<PlayCircleOutline />}
            />
            <BottomNavigationAction
                className={classes.navigationAction}
                label="Minha Lista"
                icon={<AddCircleOutline />}
            />
            <BottomNavigationAction
                className={classes.navigationAction}
                label="Info"
                icon={<InfoIcon />}
            />
        </BottomNavigation>
    ) : null;
}

export default VideoActionsMobile;