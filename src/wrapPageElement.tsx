import React, { useState, useMemo } from "react";

import { ThemeProvider } from "@emotion/react";
import { GatsbyBrowser } from "gatsby";

import { Page } from "./components/global/page";
import { SiteThemeContext } from "./context/site-theme-context";
import { getTheme } from "./theme";
import { SiteTheme } from "./types/enum";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  const [siteTheme, setSiteTheme] = useState<SiteTheme>(SiteTheme.SILVER);
  const theme = useMemo(() => getTheme(siteTheme), [siteTheme]);

  return (
    <SiteThemeContext.Provider value={{ siteTheme, setSiteTheme }}>
      <ThemeProvider theme={theme}>
        <Page>{element}</Page>
      </ThemeProvider>
    </SiteThemeContext.Provider>
  );
};
