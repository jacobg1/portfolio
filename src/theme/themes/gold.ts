import { ThemeConfig } from "../theme-type";

const mainColor = "#b10c0c";
const secondaryBackground = "#ffffb0";
const mainBackground = "#ffffea";

const border2px = `2px solid ${mainColor}`;
const border1px = `1px solid ${mainColor}`;

const buttonBackground = "#ffffff";
const buttonColor = "#000000";

export const goldTheme: ThemeConfig = {
  mobileHeader: {
    backgroundColor: secondaryBackground,
  },
  header: {
    color: mainColor,
    backgroundColor: secondaryBackground,
    borderBottom: border2px,
  },
  footer: {
    backgroundColor: secondaryBackground,
    borderTop: border2px,
  },
  main: {
    backgroundColor: mainBackground,
  },
  divider: {
    border: border1px,
  },
  button: {
    border: border2px,
    color: buttonColor,
    backgroundColor: buttonBackground,
    "&:hover": {
      border: border1px,
    },
  },
  iconColor: mainColor,
  skillsButton: {
    color: buttonColor,
    backgroundColor: buttonBackground,
    "&:hover": {
      backgroundColor: secondaryBackground,
    },
  },
};
