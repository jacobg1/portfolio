import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { NavLink } from "./nav-link";

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
