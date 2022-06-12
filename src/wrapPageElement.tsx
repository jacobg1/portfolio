import * as React from "react";

import { ThemeProvider } from "@emotion/react";
import { GatsbyBrowser } from "gatsby";

import { Page } from "./components/page";
import theme from "./theme";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Page>{element}</Page>
    </ThemeProvider>
  );
};
