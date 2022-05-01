import * as React from "react";

interface NavLinkProps {
  destination: string;
  text: string;
  newTab: boolean;
}

export const NavLink: React.FC<NavLinkProps> = ({
  destination,
  text,
  newTab,
}) => {
  return (
    <a href={destination} target={newTab ? "_blank" : "_self"} rel="noreferrer">
      {text}
    </a>
  );
};
