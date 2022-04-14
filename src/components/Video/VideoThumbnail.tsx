import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    image: {
        [theme.breakpoints.down(400)]: {
            width: "103px",
            height: "144px",
        },

        [theme.breakpoints.up(400)]: {      // ~(800 x 1184)
            width: "137px",
            height: "182px",
        },

        [theme.breakpoints.up(700)]: {      // ~(1920 x 1080)
            width: "153px",
            height: "212px",
        },

        [theme.breakpoints.up(1200)]: {      // ~(1920 x 1080)
            width: "303px",
            height: "172px",
        },

        [theme.breakpoints.up("xl")]: {      // ~(1920 x 1080)
            width: "393px",
            height: "223px",
        },
    }
}));

export interface VideoThumbnailProps {
    classes?: {
        root?: any;
        image?: any;
    };
    ImgProps: React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
    >;
}

const VideoThumbnail: React.FunctionComponent<VideoThumbnailProps> = (props) => {
    const classes = useStyles();
    const { classes: classesProp = {}, ImgProps } = props;
    const imgAlt = ImgProps.alt || "";

    return (
        <Box className={classesProp.root}>
            <img
                className={classesProp.image || classes.image}
                {...ImgProps}
                alt={imgAlt}
            />
            {props.children}
        </Box>);
};

export default VideoThumbnail;