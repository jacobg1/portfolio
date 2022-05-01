import * as React from "react";
import { useNavLinksQuery } from "../hooks/useNavLinksQuery";
import { SiteLinks } from "./navigation";
import { Box } from "@mui/material";

export const SiteFooter = (): JSX.Element => {
  const navLinks = useNavLinksQuery();
  return (
    <Box component="footer">
      <SiteLinks navLinks={navLinks} />
    </Box>
  );
};
