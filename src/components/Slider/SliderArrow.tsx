import { makeStyles } from "@material-ui/core";
import SliderArrowBase from "./SliderArrowBase";
import clsx from "clsx";
import { CustomArrowProps } from "react-slick";

const useStyles = makeStyles((theme) => ({
    root: (props: SliderArrowProps) => {
        const style = {
            height: '100%',
            position: "absolute" as any,
            opacity: 0,
        };
        if (props.dir === "right") {
            (style as any).right = 0;
            (style as any).top = 0;
        }
        return style;
    },
    arrow: {
        fontSize: 50,
        color: theme.palette.common.white,
        [theme.breakpoints.down(theme.breakpoints.values.mobile)]: {
            fontSize: 31,
        },
    },
}));

export interface SliderArrowProps extends CustomArrowProps {
    dir: "left" | "right",
};

const SliderArrow: React.FunctionComponent<SliderArrowProps> = (props) => {
    const { dir, className, onClick,
        //currentSlide, slideCount, style
    } = props;
    const classes = useStyles(props);

    return (
        <div
            className={clsx(classes.root,
                dir === "left" ? "slick-left" : "slick-right"
            )}
        >
            <SliderArrowBase
                dir={dir}
                IconButtonProps={{
                    onClick,
                    disabled: className?.includes("disabled"),
                    disableTouchRipple: true,
                }}
                classes={{ arrow: classes.arrow }} />
        </div>
    )
};

export default SliderArrow;