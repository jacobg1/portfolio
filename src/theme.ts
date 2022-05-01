import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontSize: "30px",
      fontWeight: 500,
      color: "#585858",
    },
  },
});

export default theme;
