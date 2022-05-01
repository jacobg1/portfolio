import { Link } from "gatsby";
import * as React from "react";
import { NavLinkProps } from "../types/interface";

export const NavLink: React.FC<NavLinkProps> = ({
  destination,
  text,
  newTab,
}) => {
  return (
    <>
      {newTab ? (
        <a href={destination} target={"_blank"} rel="noreferrer">
          {text}
        </a>
      ) : (
        <Link to={destination}>{text}</Link>
      )}
    </>
  );
};

export const SiteLinks: React.FC<{ navLinks: NavLinkProps[] }> = ({
  navLinks,
}) => {
  return (
    <>
      {navLinks.map((link: NavLinkProps, i: number) => {
        return <NavLink key={`header-link-${i}`} {...link} />;
      })}
    </>
  );
};
