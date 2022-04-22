import VideoLink from "../../../../components/Video/VideoLink";
import { makeStyles } from "@material-ui/core";
import { AddCircleOutline, PlayCircleOutline } from "@material-ui/icons";
import InfoIcon from "@material-ui/icons/Info";

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

export interface VideoActionsProps { }

const VideoActions: React.FunctionComponent<VideoActionsProps> = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <VideoLink>
                <PlayCircleOutline />
                Play
            </VideoLink>
            <VideoLink>
                <AddCircleOutline />
                Minha lista
            </VideoLink>
            <VideoLink>
                <InfoIcon />
                Info
            </VideoLink>
        </div>
    );
};

export default VideoActions;

