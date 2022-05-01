import * as React from "react";
import { SiteLinks } from "./navigation";
import { useNavLinksQuery } from "../hooks/useNavLinksQuery";
import { Typography, Box, SxProps } from "@mui/material";
import { NavLinkProps } from "../types/interface";

const headerStyles: SxProps = {
  "& .mobile-header, .desktop-header": {
    display: "flex",
    justifyContent: "space-around",
  },
  "& .desktop-header": {
    display: { xs: "none", sm: "flex" },
  },
  "& .mobile-header": {
    display: { sm: "none" },
  },
};

export const SiteHeader = (): JSX.Element => {
  const navLinks = useNavLinksQuery();
  return (
    <Box sx={headerStyles} component="header">
      <DesktopHeader navLinks={navLinks} />
      <MobileHeader navLinks={navLinks} />
    </Box>
  );
};

type NavLinks = { navLinks: NavLinkProps[] };

const DesktopHeader = ({ navLinks }: NavLinks): JSX.Element => {
  return (
    <Box className="desktop-header">
      <Typography variant="h1">Jacob Greenwald</Typography>
      <SiteLinks navLinks={navLinks} />
    </Box>
  );
};

const MobileHeader = ({ navLinks }: NavLinks): JSX.Element => {
  return (
    <Box className="mobile-header">
      <Typography variant="h1">Jacob Greenwald mobile</Typography>
      <SiteLinks navLinks={navLinks} />
    </Box>
  );
};
