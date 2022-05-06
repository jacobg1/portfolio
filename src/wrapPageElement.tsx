import { ThemeProvider } from "@emotion/react";
import { GatsbyBrowser } from "gatsby";
import * as React from "react";
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
