import { Link as InternalLink } from "gatsby-theme-material-ui";
import Link from "@mui/material/Link";
import * as React from "react";
import { NavLinkProps } from "../types/interface";

export const NavLink = ({
  destination,
  text,
  newTab,
}: NavLinkProps): JSX.Element => {
  return (
    <>
      {newTab ? (
        <Link href={destination} target="_blank" rel="noreferrer">
          {text}
        </Link>
      ) : (
        <InternalLink to={destination}>{text}</InternalLink>
      )}
    </>
  );
};

export const SiteLinks = ({
  navLinks,
}: {
  navLinks: NavLinkProps[];
}): JSX.Element => {
  return (
    <>
      {navLinks.map((link: NavLinkProps, i: number) => {
        return <NavLink key={`header-link-${i}`} {...link} />;
      })}
    </>
  );
};
