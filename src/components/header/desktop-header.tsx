import * as React from "react";
import Box from "@mui/material/Box";
import { SiteLinks } from "../navigation";
import { NavLinkList } from "../../types/interface";

export const DesktopHeader = ({ navLinks }: NavLinkList): JSX.Element => {
  return (
    <Box className="desktop-header">
      <SiteLinks navLinks={navLinks} />
    </Box>
  );
};
