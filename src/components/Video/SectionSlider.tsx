import { makeStyles, Typography } from "@material-ui/core";
import { Video } from "../../util/model";

const useSectionTitleStyles = makeStyles(theme => ({
    root: {
        fontSize: "1.4em",
        fontWeight: 600,
        textTransform: "uppercase",
        borderBottom: `1px solid ${theme.palette.text.secondary}`,
        margin: theme.spacing(3, 3),

        [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
            margin: theme.spacing(2, 1),
        }
    }
}));

export const SectionTitle: React.FunctionComponent = (props) => {
    const classes = useSectionTitleStyles();
    return (
        <Typography
            className={classes.root}
            component="h2"
            color={"textSecondary"}
        >
            {props.children}
        </Typography>
    );
};

interface SectionSliderProps {
    title: string;
    videos: Video[];
};

const SectionSlider: React.FunctionComponent<SectionSliderProps> = (props) => {
    const { title } = props;

    return (
        <div>
            <SectionTitle>{title}</SectionTitle>
        </div>
    );
};

export default SectionSlider;