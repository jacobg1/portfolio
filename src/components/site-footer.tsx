import * as React from "react";
import { useNavLinksQuery } from "../hooks/useNavLinksQuery";
import { SiteLinks } from "./navigation";
import Box from "@mui/material/Box";
import { NavLinkItem } from "../types/interface";

import type { SxProps } from "@mui/material";

const footerStyles: SxProps = {
  // background: "#dddbd9",
  backgroundColor: "#ffffff",
  padding: "30px",
  position: "absolute",
  // height: "50px",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
};

export const SiteFooter = (): JSX.Element => {
  const navLinks = useNavLinksQuery<NavLinkItem[]>();
  return (
    <Box sx={footerStyles} component="footer">
      <SiteLinks navLinks={navLinks} />
    </Box>
  );
};
