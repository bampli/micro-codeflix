import VideoLink from "../../../components/Video/VideoLink";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        // position: "absolute",
        // bottom: 0,
        // left: "4",
    }
});

interface VideoActionsProps { }

const VideoActions: React.FunctionComponent<VideoActionsProps> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <VideoLink>Play</VideoLink>
            <VideoLink>Minha lista</VideoLink>
            <VideoLink>Info</VideoLink>
        </div>
    );
};

export default VideoActions;

