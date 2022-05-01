import * as React from "react";
import { useNavLinksQuery } from "../hooks/useNavLinksQuery";
import { SiteLinks } from "./navigation";

export const SiteFooter = (): JSX.Element => {
  const navLinks = useNavLinksQuery();
  return (
    <footer>
      <SiteLinks navLinks={navLinks} />
    </footer>
  );
};
