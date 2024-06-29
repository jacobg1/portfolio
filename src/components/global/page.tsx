import * as React from "react";

import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { styled } from "@mui/system";

import { SiteFooter } from "./site-footer";
import { SiteHeader } from "../header/site-header";

type PageProps = {
  children: React.ReactNode;
};

const PageContainer = styled("div", {
  name: "MuiPageContainer",
  overridesResolver: (_, styles) => {
    return styles.root;
  },
})``;

export const Page = ({ children }: PageProps): JSX.Element => {
  return (
    <PageContainer>
      <CssBaseline />
      <SiteHeader />
      <Box component="main">{children}</Box>
      <SiteFooter />
    </PageContainer>
  );
};
