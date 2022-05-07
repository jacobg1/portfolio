import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
    h1: {
      fontSize: "23px",
      fontWeight: 500,
      color: "#000000",
    },
    h2: {
      fontSize: "20px",
      color: "#000000",
      fontWeight: 500,
    },
    h3: {
      fontSize: "18px",
      color: "#000000",
      fontWeight: 500,
    },
  },
});

export default theme;
