import {BreakpointOverrides} from "@material-ui/core/styles/createBreakpoints";

declare module "@material-ui/core/styles/createBreakpoints" {
    interface BreakpointOverrides {
        xs: true;
        sm: true;
        mobile: true;   // adds the 'tablet' breakpoint for my app
        md: true;
        lg: true;
        xl: true;
    }
}