import { createContext, Dispatch, SetStateAction } from "react";

import { SiteTheme } from "../types/enum";

interface ColorThemeContextType {
  siteTheme: SiteTheme;
  setSiteTheme: Dispatch<SetStateAction<SiteTheme | null>>;
}

export const SiteThemeContext = createContext<ColorThemeContextType>({
  siteTheme: SiteTheme.SILVER,
  setSiteTheme: () => {},
});
