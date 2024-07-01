import { Theme } from "@emotion/react";
import { ComponentsOverrides, ComponentsVariants } from "@mui/material";

export type CustomTheme = Omit<Theme, "components">;

declare module "@mui/material/styles" {
  interface ComponentNameToClassKey {
    MuiFooter: "root";
    MuiPageContainer: "root";
    MuiMobileHeaderContainer: "root";
  }

  interface ComponentsPropsList {
    // Update unknown to type of props if props are used
    MuiFooter: Partial<Record<string, never>>;
    MuiPageContainer: Partial<Record<string, never>>;
    MuiMobileHeaderContainer: Partial<Record<string, never>>;
  }

  interface Components {
    MuiFooter?: {
      defaultProps?: ComponentsPropsList["MuiFooter"];
      styleOverrides?: ComponentsOverrides<Theme>["MuiFooter"];
      variants?: ComponentsVariants["MuiFooter"];
    };
    MuiPageContainer?: {
      defaultProps?: ComponentsPropsList["MuiPageContainer"];
      styleOverrides?: ComponentsOverrides<Theme>["MuiPageContainer"];
      variants?: ComponentsVariants["MuiPageContainer"];
    };
    MuiMobileHeaderContainer?: {
      defaultProps?: ComponentsPropsList["MuiMobileHeaderContainer"];
      styleOverrides?: ComponentsOverrides<Theme>["MuiMobileHeaderContainer"];
      variants?: ComponentsVariants["MuiMobileHeaderContainer"];
    };
  }
}

export interface ThemeConfig {
  mobileHeader: {
    backgroundColor: string;
  };
  header: {
    backgroundColor: string;
  };
  footer: {
    backgroundColor: string;
  };
  main: {
    backgroundColor: string;
  };
}
