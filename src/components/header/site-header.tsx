import { default as React, useState } from "react";

import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";
import type { SxProps } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { Link } from "gatsby";

import { useNavLinksQuery } from "../../hooks/useNavLinksQuery";
import { NavLinkItem } from "../../types/interface";
import { DesktopHeader } from "./desktop-header";
import { MobileHeader } from "./mobile-header";

const appBarStyles: SxProps = {
  backgroundColor: "#e7e7e7",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: { xs: "17px", sm: "20px", md: "25px" },
  borderBottom: "2px solid #0572e1",
  "& .desktop-header": {
    display: { xs: "none", sm: "flex" },
  },
  "& .menu-button": {
    display: { sm: "none" },
  },
  "& .MuiTypography-body1": {
    paddingTop: "5px",
  },
  "& .MuiIconButton-root": {
    color: "#000000",
  },
  "& .title-link": {
    color: "#0572e1",
    textDecoration: "none",
  },
  "& .pizza": {
    fontSize: { xs: "18px", sm: "22px" },
  },
};

export const SiteHeader = (): JSX.Element => {
  const navLinks = useNavLinksQuery<NavLinkItem[]>();
  const [isOpen, setOpen] = useState(false);
  const clickHandler = (open: boolean): void => setOpen(open);

  return (
    <AppBar sx={appBarStyles} position="static">
      <Box display="flex" flexDirection="column">
        <Typography variant="h1">
          <Link className="title-link" to="/">
            Jacob Greenwald
          </Link>
        </Typography>
        <Typography component="span">
          Software Engineer{" "}
          <Box component="span" className="pizza">
            🍕
          </Box>
        </Typography>
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
