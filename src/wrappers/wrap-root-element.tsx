import React, { useState, useMemo, ReactElement, useEffect } from "react";

import { ThemeProvider } from "@emotion/react";
import { GatsbyBrowser } from "gatsby";

import { SiteThemeContext } from "../context/site-theme-context";
import { getTheme } from "../theme";
import { SITE_THEME_KEY, SiteTheme } from "../types/enum";

interface WrapperProps {
  element: ReactElement;
}

const Wrapper = ({ element }: WrapperProps): JSX.Element | null => {
  const [siteTheme, setSiteTheme] = useState<SiteTheme | null>(null);

  useEffect(() => {
    const selectedTheme = localStorage?.getItem(SITE_THEME_KEY) as SiteTheme;
    setSiteTheme(selectedTheme || SiteTheme.SILVER);
  }, []);

  const theme = useMemo(() => {
    if (siteTheme) return getTheme(siteTheme);
    return null;
  }, [siteTheme]);

  if (!theme) return null;

  return (
    <SiteThemeContext.Provider
      value={{ siteTheme: siteTheme as SiteTheme, setSiteTheme }}
    >
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </SiteThemeContext.Provider>
  );
};

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return <Wrapper element={element} />;
};
