import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Overpass", "sans-serif"].join(","),
    body1: {
      fontWeight: 400,
      color: "#000000",
      // letterSpacing: ".3px",
    },
    h1: {
      fontSize: "25px",
      fontWeight: 600,
      color: "#5a31ff",
    },
    h2: {
      fontSize: "20px",
      color: "#000000",
      fontWeight: 700,
    },
    h3: {
      fontSize: "25px",
      color: "#000000",
      fontWeight: 700,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#007eff",
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
