import { default as React, useState } from "react";
import type { SxProps } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import DensityMediumSharpIcon from "@mui/icons-material/DensityMediumSharp";
import { useNavLinksQuery } from "../../hooks/useNavLinksQuery";
import { MobileHeader } from "./mobile-header";
import { DesktopHeader } from "./desktop-header";
import { NavLinkItem } from "../../types/interface";

const appBarStyles: SxProps = {
  backgroundColor: "#ffffff",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  padding: "17px 17px",
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
