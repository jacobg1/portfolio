import { Link } from "gatsby";
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
