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
import { NavLinkProps } from "../types/interface";

const appBarStyles: SxProps = {
  backgroundColor: "#dddbd9",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "10px 15px",
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
  // "& .menu-button": {
  //   padding: 0,
  // },
};

export const SiteHeader = (): JSX.Element => {
  const navLinks = useNavLinksQuery<NavLinkProps[]>();
  const [isOpen, setOpen] = useState(false);
  const clickHandler = (open: boolean): void => setOpen(open);

  return (
    <AppBar sx={appBarStyles} position="static">
      <Typography variant="h1" alignSelf="center">
        Jacob Greenwald
      </Typography>
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
        color="inherit"
        aria-label="menu"
        onClick={(): void => clickHandler(true)}
      >
        <DensityMediumSharpIcon fontSize="medium" />
      </IconButton>
    </AppBar>
  );
};

interface NavLinks {
  navLinks: NavLinkProps[];
}

const DesktopHeader = ({ navLinks }: NavLinks): JSX.Element => {
  return (
    <Box className="desktop-header">
      <SiteLinks navLinks={navLinks} />
    </Box>
  );
};

interface MobileHeaderProps extends NavLinks {
  isOpen: boolean;
  onClick: () => void;
}

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
