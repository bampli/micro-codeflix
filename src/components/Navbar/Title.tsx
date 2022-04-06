import logo from '../../static/img/logo.png';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
//import theme from '../../theme';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignItems: "center",
    },
    logo: {
        [theme.breakpoints.down("sm")]: {
            width: 100
        },
        
        [theme.breakpoints.between("sm", "md")]: {
            width: 130
        },

        [theme.breakpoints.up("md")]: {
            width: 170
        },
    }
}));

const Title: React.FunctionComponent = () => {
    const classes = useStyles();
    
    return (
        <Typography className={classes.root}>
            <img src={logo} alt="Codeflix" className={classes.logo} />
        </Typography>
    );
};

export default Title;