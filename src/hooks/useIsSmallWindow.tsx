import { useMediaQuery, useTheme } from "@material-ui/core";

const useIsSmallWindow = () => {
    const theme = useTheme();
    return useMediaQuery(theme.breakpoints.down(theme.breakpoints.values.mobile));
}

export default useIsSmallWindow;