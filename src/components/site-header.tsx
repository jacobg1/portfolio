import { default as React, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";
import { SiteLinks } from "./navigation";
import { useNavLinksQuery } from "../hooks/useNavLinksQuery";
import type { SxProps } from "@mui/material";
import {
  NavLinkItem,
  NavLinkList,
  MobileHeaderProps,
} from "../types/interface";

const appBarStyles: SxProps = {
  backgroundColor: "#dddbd9",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "17px 17px",
  "& .mobile-header, .desktop-header": {
    // display: "flex",
    // justifyContent: "space-around",
  },
  "& .desktop-header": {
    display: { xs: "none", sm: "flex" },
  },
  "& .mobile-header, .menu-button": {
    display: { sm: "none" },
  },
  "& .MuiTypography-h1": {
    fontSize: "25px",
    fontWeight: 500,
    color: "#5a31ff",
  },
  "& .MuiTypography-body1": {
    paddingTop: "5px",
    fontWeight: 500,
    // color: "#720000",
    color: "#000000",
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

const MobileHeader = ({
  navLinks,
  isOpen,
  onClick,
}: MobileHeaderProps): JSX.Element => {
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClick}>
      <Box className="mobile-header">
        <SiteLinks navLinks={navLinks} />
      </Box>
    </Drawer>
  );
};
