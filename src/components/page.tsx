import * as React from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

export const Page: React.FC = ({ children }) => {
  return (
    <div>
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
};
