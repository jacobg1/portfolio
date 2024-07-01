import { ThemeConfig } from "../theme-type";

export const silverTheme: ThemeConfig = {
  mobileHeader: {
    backgroundColor: "#f5f5f5",
  },
  header: {
    color: "#0572e1",
    backgroundColor: "#e7e7e7",
    borderBottom: "2px solid #0572e1",
  },
  footer: {
    backgroundColor: "#e7e7e7",
    borderTop: "2px solid #0572e1",
  },
  main: {
    backgroundColor: "#f5f5f5",
  },
  divider: {
    border: "1px solid #0572e1",
  },
  button: {
    border: "2px solid #0572e1",
    color: "#0572e1",
    "&:hover": {
      border: "1px solid #1976d2",
    },
  },
};
