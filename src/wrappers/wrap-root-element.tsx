import React, { useState, useMemo, ReactElement } from "react";

import { ThemeProvider } from "@emotion/react";
import { GatsbyBrowser } from "gatsby";

import { SiteThemeContext } from "../context/site-theme-context";
import { getTheme } from "../theme";
import { SiteTheme } from "../types/enum";

const Wrapper = ({ element }: { element: ReactElement }): JSX.Element => {
  const [siteTheme, setSiteTheme] = useState<SiteTheme>(SiteTheme.SILVER);
  const theme = useMemo(() => getTheme(siteTheme), [siteTheme]);

  return (
    <SiteThemeContext.Provider value={{ siteTheme, setSiteTheme }}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </SiteThemeContext.Provider>
  );
};

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return <Wrapper element={element} />;
};
