import {
  ComponentsOverrides,
  ComponentsVariants,
  Theme,
  createTheme,
} from "@mui/material/styles";

import { SiteTheme } from "./types/enum";

type CustomTheme = Omit<Theme, "components">;

declare module "@mui/material/styles" {
  interface ComponentNameToClassKey {
    MuiFooter: "root";
    MuiPageContainer: "root";
  }

  interface ComponentsPropsList {
    // Update unknown to type of props if props are used
    MuiFooter: Partial<unknown>;
    MuiPageContainer: Partial<unknown>;
  }

  interface Components {
    MuiFooter?: {
      defaultProps?: ComponentsPropsList["MuiFooter"];
      styleOverrides?: ComponentsOverrides<Theme>["MuiFooter"];
      variants?: ComponentsVariants["MuiFooter"];
    };
    MuiPageContainer?: {
      defaultProps?: ComponentsPropsList["MuiPageContainer"];
      styleOverrides?: ComponentsOverrides<Theme>["MuiPageContainer"];
      variants?: ComponentsVariants["MuiPageContainer"];
    };
  }
}

function getTheme(siteTheme: SiteTheme): CustomTheme {
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
        color: "#000000",
        [theme.breakpoints.up("sm")]: {
          fontSize: "18px",
        },
      },
      h1: {
        fontSize: "25px",
        fontWeight: 600,
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
      MuiAppBar: {
        styleOverrides: {
          root: {
            borderBottom: "2px solid #0572e1",
            backgroundColor: "#e7e7e7",
            minWidth: "320px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            "& .title-link": {
              color: "#0572e1",
              textDecoration: "none",
            },
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: {
            color: "#000000",
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
      MuiFooter: {
        styleOverrides: {
          root: {
            backgroundColor: "#e7e7e7",
            borderTop: "2px solid #0572e1",
            position: "absolute",
            width: "100%",
            minWidth: "320px",
          },
        },
      },
      MuiPageContainer: {
        styleOverrides: {
          root: {
            main: {
              padding: "20px 20px 20px",
              minHeight: "calc(100vh - 70px)",
              minWidth: "320px",
              backgroundColor: "#f5f5f5",
            },
            "& .page-content": {
              p: {
                color: "#000000",
              },
              a: {
                textDecoration: "none",
                color: "#0572e1",
              },
            },
          },
        },
      },
    },
  });

  return theme;
}

export { getTheme };
