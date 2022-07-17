import * as React from "react";

import Link from "@mui/material/Link";
import { useLocation } from "@reach/router";
import { Link as InternalLink } from "gatsby-theme-material-ui";

import { NavLinkList, NavLinkItem } from "../../types/interface";

export const NavLink = ({
  destination,
  text,
  newTab,
}: NavLinkItem): JSX.Element => {
  const location = useLocation();

  const comparePath = (destination: string, pathname: string): boolean => {
    if (pathname === "/") return destination === pathname;

    const normalizePath = pathname.endsWith("/")
      ? pathname.slice(0, -1)
      : pathname;

    return destination === normalizePath;
  };

  return (
    <>
      {newTab ? (
        <Link href={destination} target="_blank" rel="noreferrer">
          {text}
        </Link>
      ) : (
        <InternalLink
          to={destination}
          sx={{
            fontWeight: comparePath(destination, location.pathname) ? 900 : 400,
          }}
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
