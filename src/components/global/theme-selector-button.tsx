import * as React from "react";

import Chip from "@mui/material/Chip";

import { ThemeSelectorButtonProps } from "../../types";
import { SITE_THEME_KEY } from "../../types/enum";

export function ThemeSelectorButton({
  label,
  themeOption,
  selectedTheme,
  setSiteTheme,
  handleClose,
}: ThemeSelectorButtonProps): JSX.Element {
  const isActive = selectedTheme === themeOption;

  return (
    <Chip
      className={`${label.toLocaleLowerCase()}-theme`}
      sx={{
        ...(isActive && {
          border: "2px solid",
        }),
      }}
      onClick={() => {
        setSiteTheme(themeOption);
        localStorage?.setItem(SITE_THEME_KEY, themeOption);
        handleClose();
      }}
      label={label}
    />
  );
}
