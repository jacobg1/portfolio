import * as React from "react";

import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";
import { ThemeProvider } from "@mui/material/styles";
import { Theme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

type PageProps = {
  children: React.ReactNode;
  theme: Theme;
};

export const Page = ({ children, theme }: PageProps): JSX.Element => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </ThemeProvider>
    </>
  );
};
