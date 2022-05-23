import { default as React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { SiteLinks } from "./navigation";
import { useNavLinksQuery } from "../hooks/useNavLinksQuery";
import type { SxProps } from "@mui/material";
import {
  NavLinkItem,
  NavLinkList,
  MobileHeaderProps,
} from "../types/interface";

const appBarStyles: SxProps = {
  // backgroundColor: "#dddbd9",
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "17px 17px",
  borderBottom: "2px solid #0572e1",
  "& .mobile-header, .desktop-header": {
    // display: "flex",
    // justifyContent: "space-around",
  },
  "& .desktop-header": {
    display: { xs: "none", sm: "flex" },
  },

  "& .menu-button": {
    display: { sm: "none" },
  },
  "& .MuiTypography-body1": {
    paddingTop: "5px",
    // color: "#007eff",
  },
  "& .MuiIconButton-root": {
    color: "#000000",
  },
  // "& .MuiTabs-indicator": {},
};

export const SiteHeader = (): JSX.Element => {
  const navLinks = useNavLinksQuery<NavLinkItem[]>();
  const [isOpen, setOpen] = useState(false);
  const clickHandler = (open: boolean): void => setOpen(open);

  return (
    <AppBar sx={appBarStyles} position="static">
      <Box display="flex" flexDirection="column">
        <Typography variant="h1">Jacob Greenwald</Typography>
        <Typography component="span">Software Engineer</Typography>
      </Box>
      <DesktopHeader navLinks={navLinks} />
      <MobileHeader
        navLinks={navLinks}
        isOpen={isOpen}
        onClick={(): void => clickHandler(false)}
      />
      <IconButton
        className="menu-button"
        size="large"
        edge="end"
        color="default"
        aria-label="menu"
        onClick={(): void => clickHandler(true)}
      >
        <DensityMediumSharpIcon fontSize="medium" />
      </IconButton>
    </AppBar>
  );
};

const DesktopHeader = ({ navLinks }: NavLinkList): JSX.Element => {
  return (
    <Box className="desktop-header">
      <SiteLinks navLinks={navLinks} />
    </Box>
  );
};

const mobileHeaderStyles: SxProps = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "30px 20px 20px",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
  "& .link-holder": {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "30%",
  },
  svg: {
    width: "30px",
    height: "30px",
  },
};

const MobileHeader = ({
  navLinks,
  isOpen,
  onClick,
}: MobileHeaderProps): JSX.Element => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClick}>
      <Box sx={mobileHeaderStyles} className="mobile-header">
        <HighlightOffIcon onClick={onClick} />
        <Box className="link-holder">
          <SiteLinks navLinks={navLinks} />
        </Box>
        <Typography variant="body1">greenwald.j8@gmail.com</Typography>
      </Box>
    </Drawer>
  );
};
