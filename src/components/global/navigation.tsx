import * as React from "react";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { useLocation } from "@reach/router";
import { Link as InternalLink } from "gatsby";

import { NavLinkList, NavLinkItem } from "../../types";

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

    const isBlogPath =
      normalizePath.includes("blog") && destination.includes("blog");

    return destination === normalizePath || isBlogPath;
  };

  return (
    <Box
      sx={{
        "&:hover": {
          textDecoration: "underline",
          color: "black",
        },
      }}
    >
      {newTab ? (
        <Link href={destination} target="_blank" rel="noopener noreferrer">
          {text}
        </Link>
      ) : (
        <InternalLink
          to={destination}
          className="internal-link"
          style={{
            fontWeight: comparePath(destination, location.pathname) ? 900 : 400,
            textDecoration: "none",
          }}
        >
          {text}
        </InternalLink>
      )}
    </Box>
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
