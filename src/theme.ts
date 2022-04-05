import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    background: {
      default: "#1f1f1f",
    },
    error: {
      main: red.A400,
    },
    action: {
      active: "#ffffff",
    },
    text: {
      primary: "#ffffff",
      secondary: "#8c8c8d",
    },
  },
});

export default theme;
