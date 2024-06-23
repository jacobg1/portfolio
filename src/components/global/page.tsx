import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "../header/site-header";

type PageProps = {
  children: React.ReactNode;
};

const pageStyles: SxProps = {
  main: {
    padding: "20px 20px 20px",
    minHeight: "calc(100vh - 70px)",
    minWidth: "320px",
    backgroundColor: "#f5f5f5",
    a: {
      textDecoration: "none",
      color: "#0572e1",
    },
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
