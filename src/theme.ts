import { Theme, createTheme } from "@mui/material/styles";

import { SiteTheme } from "./types/enum";

function getTheme(siteTheme: SiteTheme): Theme {
  // TODO remove log
  console.log(siteTheme);
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
        },
      },
      subtitle1: {
        fontSize: "14px",
        fontWeight: 600,
        [theme.breakpoints.up("sm")]: {
          fontSize: "18px",
        },
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
            "&:hover": {
              textDecoration: "underline",
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          indicator: {
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

  return theme;
}

export { getTheme };
