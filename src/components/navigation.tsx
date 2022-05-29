import * as React from "react";
import { Link as InternalLink } from "gatsby-theme-material-ui";
import Link from "@mui/material/Link";
import { NavLinkList, NavLinkItem } from "../types/interface";

export const NavLink = ({
  destination,
  text,
  newTab,
}: NavLinkItem): JSX.Element => {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";
  return (
    <>
      {newTab ? (
        <Link href={destination} target="_blank" rel="noreferrer">
          {text}
        </Link>
      ) : (
        <InternalLink
          sx={{ fontWeight: destination === pathname ? 900 : 400 }}
          to={destination}
        >
          {text}
        </InternalLink>
      )}
    </>
  );
};

export const SiteLinks = ({ navLinks }: NavLinkList): JSX.Element => {
  return (
    <>
      {navLinks.map((link: NavLinkItem, i: number) => {
        return <NavLink key={`site-link-${i}`} {...link} />;
      })}
    </>
  );
};
