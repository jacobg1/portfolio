import * as React from "react";
import { useNavLinksQuery } from "../hooks/useNavLinksQuery";
import { SiteLinks } from "./navigation";
import Box from "@mui/material/Box";
import { NavLinkItem } from "../types/interface";

import type { SxProps } from "@mui/material";

const footerStyles: SxProps = {
  backgroundColor: "#ffffff",
  padding: "16px 17px",
  position: "absolute",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  flexDirection: "column",
  alignItems: "center",
  height: "175px",
};

export const SiteFooter = (): JSX.Element => {
  const navLinks = useNavLinksQuery<NavLinkItem[]>();
  return (
    <Box sx={footerStyles} component="footer">
      <SiteLinks navLinks={navLinks} />
    </Box>
  );
};
