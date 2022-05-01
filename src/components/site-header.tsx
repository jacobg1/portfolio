import * as React from "react";
import { SiteLinks } from "./navigation";
import { useNavLinksQuery } from "../hooks/useNavLinksQuery";
import { Typography } from "@mui/material";

export const SiteHeader = (): JSX.Element => {
  const navLinks = useNavLinksQuery();
  return (
    <header>
      <Typography variant="h1">Jacob Greenwald</Typography>
      <SiteLinks navLinks={navLinks} />
    </header>
  );
};
