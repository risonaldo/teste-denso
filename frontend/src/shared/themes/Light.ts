import { createTheme } from "@mui/material";
import { cyan, indigo, yellow } from "@mui/material/colors";
import { light } from "@mui/material/styles/createPalette";

export const LigthTheme = createTheme({
  palette: {
    primary: {
      main: indigo[700],
      dark: indigo[800],
      light: indigo[700],
      contrastText: "#affffff",
    },
    secondary: {
      main: cyan[500],
      dark: indigo[400],
      light: indigo[300],
      contrastText: "#affffff",
    },
    background:{
        default: '#f7f6f3',
        paper: 'affffff',
    }
  },
});
