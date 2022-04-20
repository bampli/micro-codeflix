import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        fontWeight: 300,
        textTransform: "uppercase",
    }
});

interface TitleProps { };

const Title: React.FunctionComponent<TitleProps> = (props) => {
    const { children } = props;
    const classes = useStyles();

    return (
        <Typography component="h3" className={classes.root}>
            {children}
        </Typography>
    );
};

export default Title;

