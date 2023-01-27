import { createTheme } from '@material-ui/core/styles';

const darkCharcol = "#333333";
const lightBlue = "#00BCF0";
const silverGray = "#828282";
const lightGray = "#BDBDBD"
const solitudeGray = "#EDEEF2"
const blueGrey = "#F7F8FC"
const yellowColor = "#FFD667";

export default createTheme({
  palette: {
    warning: {
      main: yellowColor,
    },
    primary: {
      main: darkCharcol
    },
    secondary: {
      main: lightBlue
    },
    grey: {
      A100: lightGray,
      A200: silverGray,
    },
    background: {
      paper: solitudeGray,
      default: blueGrey
    }
  },
  typography: {
    h2: {
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontSize: "2rem",
      color: darkCharcol,
      lineHeight: "48px",
      letterSpacing: "0.005em",
    },
    h3: {
      fontFamily: 'Poppins',
      fontWeight: 600,
      fontSize: "1rem",
      color: darkCharcol,
      lineHeight: "24px",
      letterSpacing: "0.005em",
    },
    h6: {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: "0.75rem",
      color: darkCharcol,
      lineHeight: "18px",
      letterSpacing: "0.005em",
    },
    body1: {
      fontFamily: 'Poppins',
      fontWeight: 400,
      fontSize: "0.75rem",
      color: darkCharcol,
      lineHeight: "18px",
      letterSpacing: "0.005em",
    },
    body2: {
      fontFamily: 'Poppins',
      fontSize: "0.687rem",
      fontWeight: 400,
      letterSpacing: "0.005em",
      color: silverGray,
    }
  }
});
