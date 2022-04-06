import { red } from "@material-ui/core/colors";
import { createTheme } from "@material-ui/core/styles";
import { PaletteOptions } from "@material-ui/core/styles/createPalette";

const palette: PaletteOptions = { // to override below, it should be here
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
};

const theme = createTheme({   // use and override palette
  palette,
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: palette.background?.default,
      }
    }
  }
});

export default theme;
