import { Slide, useScrollTrigger } from "@material-ui/core";
import useIsSmallWindow from "../../hooks/useIsSmallWindow";

const HideOnScroll: React.FunctionComponent = (props) => {
    const { children } = props;
    const isSmallWindow = useIsSmallWindow();
    const trigger = useScrollTrigger();

    // trigger = direction down
    // in = when to hide
    // (NOT small-window) OR (NOT trigger) = NOT (small-window AND trigger)

    return (
        <Slide appear={false} direction="down" in={!isSmallWindow || !trigger}>
            {children as any}
        </Slide>
    );
};

export default HideOnScroll;