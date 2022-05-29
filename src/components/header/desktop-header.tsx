import * as React from "react";
import Box from "@mui/material/Box";
import type { SxProps } from "@mui/material";
import { SiteLinks } from "../navigation";
import { NavLinkList } from "../../types/interface";

const desktopHeaderStyles: SxProps = {
  flexDirection: "row",
  justifyContent: "space-between",
  width: "60%",
  maxWidth: { xs: "500px", md: "650px" },
  alignSelf: "center",
  a: {
    color: "black",
  },
};

export const DesktopHeader = ({ navLinks }: NavLinkList): JSX.Element => {
  return (
    <Box sx={desktopHeaderStyles} className="desktop-header">
      <SiteLinks navLinks={navLinks} />
    </Box>
  );
};
