import * as React from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import Box from "@mui/material/Box";
import type { SxProps } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

type PageProps = {
  children: React.ReactNode;
};

const pageStyles: SxProps = {
  "& main": {
    padding: "20px 20px 100px",
  },
};

export const Page = ({ children }: PageProps): JSX.Element => {
  return (
    <Box sx={pageStyles}>
      <CssBaseline />
      <SiteHeader />
      <Box component="main">{children}</Box>
      <SiteFooter />
    </Box>
  );
};
