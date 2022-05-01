import * as React from "react";
import { SiteLinks } from "./navigation";
import { useNavLinksQuery } from "../hooks/useNavLinksQuery";

export const SiteHeader: React.FC = () => {
  const navLinks = useNavLinksQuery();

  return (
    <header>
      <SiteLinks navLinks={navLinks} />
    </header>
  );
};
