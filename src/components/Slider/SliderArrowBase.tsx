import { IconButton, IconButtonProps } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";

interface SlideArrowBaseProps {
    dir: "left" | "right",
    IconButtonProps?: IconButtonProps;
    classes?: {
        arrow?: string;
    }
};

const SlideArrowBase: React.FunctionComponent<SlideArrowBaseProps> = (props) => {

    const { dir, IconButtonProps, classes = {} } = props;

    return (
        <IconButton size="small" {...IconButtonProps}>
            {
                dir === "left"
                    ? (<KeyboardArrowLeft className={classes.arrow} />)
                    : (<KeyboardArrowRight className={classes.arrow} />)
            }
        </IconButton>
    )
};

export default SlideArrowBase;