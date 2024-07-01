import { ThemeConfig } from "../theme-type";

export const goldTheme: ThemeConfig = {
  mobileHeader: {
    backgroundColor: "#F0E68C",
  },
  header: {
    color: "#ff1e1e", // || #b10c0c
    backgroundColor: "#F0E68C",
    borderBottom: "2px solid red",
  },
  footer: {
    backgroundColor: "#F0E68C",
    borderTop: "2px solid red",
  },
  main: {
    backgroundColor: "#fafad2",
  },
  divider: {
    border: "1px solid red",
  },
  button: {
    border: "2px solid red",
    color: "#0572e1",
    "&:hover": {
      border: "1px solid red",
    },
  },
};
