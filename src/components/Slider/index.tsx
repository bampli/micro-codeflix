import { makeStyles } from "@material-ui/styles";
import ReactSlider, { Settings } from "react-slick";
import clsx from "clsx";

export * from "./SliderArrow";
export * from "./SliderArrowBase";

const useStyles = makeStyles({
    root: {
        "&:hover .slick-left, &:hover .slick-right": {
            opacity: 1, // hover over arrows to show them
        }
    }
});

export interface SliderProps extends Settings { };

const Slider: React.FunctionComponent<SliderProps> = (props) => {
    const { children, ...other } = props;
    const classes = useStyles();
    const className = clsx(classes.root, other.className);

    return (
        <ReactSlider {...other} className={className} >
            {children}
        </ReactSlider>
    );
};

export default Slider;