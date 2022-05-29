import { createTheme } from "@mui/material/styles";
let theme = createTheme();
theme = createTheme({
  typography: {
    fontFamily: ["Overpass", "sans-serif"].join(","),
    body1: {
      fontSize: "16px",
      fontWeight: 400,
      color: "#000000",
      [theme.breakpoints.up("sm")]: {
        fontSize: "18px",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "22px",
        // margin: "25px 0",
      },
      // letterSpacing: ".3px",
    },
    h1: {
      fontSize: "25px",
      fontWeight: 600,
      color: "#0572e1",
      [theme.breakpoints.up("sm")]: {
        fontSize: "28px",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "30px",
      },
    },
    h2: {
      fontSize: "20px",
      color: "#000000",
      fontWeight: 700,
      [theme.breakpoints.up("sm")]: {
        fontSize: "30px",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "32px",
      },
    },
    h3: {
      fontSize: "25px",
      color: "#000000",
      fontWeight: 700,
      [theme.breakpoints.up("sm")]: {
        fontSize: "35px",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "38px",
      },
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#0572e1",
          textDecoration: "none",
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          // backgroundColor: "#5a31ff",
          display: "none",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          opacity: 1,
        },
      },
    },
  },
});

export default theme;
