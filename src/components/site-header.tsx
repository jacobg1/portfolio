import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { NavLink } from "./nav-link";

interface NavLinkProps {
  text: string;
  destination: string;
  newTab: boolean;
}

type HeaderData = {
  markdownRemark: {
    frontmatter: {
      navLinks: NavLinkProps[];
    };
  };
};

const query = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { component: { eq: "header" } }) {
      id
      frontmatter {
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
    markdownRemark: {
      frontmatter: { navLinks },
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
