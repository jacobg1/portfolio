import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";

interface NavLinkProps {
  text: string;
  destination: string;
  newTab: boolean;
}

type HeaderData = {
  site: {
    siteMetadata: {
      navLinks: NavLinkProps[];
    };
  };
};

const query = graphql`
  query SiteHeader {
    site {
      siteMetadata {
        navLinks {
          text
          destination
          newTab
        }
      }
    }
  }
`;

export const SiteHeader: React.FC = () => {
  const {
    site: {
      siteMetadata: { navLinks },
    },
  } = useStaticQuery<HeaderData>(query);

  return (
    <header>
      {navLinks.map((link: NavLinkProps, i: number) => {
        return <NavLink key={`header-link-${i}`} {...link} />;
      })}
    </header>
  );
};

const NavLink: React.FC<NavLinkProps> = ({ text, destination, newTab }) => {
  return (
    <a href={destination} target={newTab ? "_blank" : "_self"} rel="noreferrer">
      {text}
    </a>
  );
};
