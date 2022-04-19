import { Slide, SlideProps } from "@material-ui/core";
import { forwardRef } from "react";

const TransitionSlide = forwardRef<any, SlideProps>((props, ref) => (
    <Slide direction="up" ref={ref} {...props}/>
));

export default TransitionSlide;