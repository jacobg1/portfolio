import { graphql, useStaticQuery } from "gatsby";
import { NavLinkProps, QueryData } from "../types/interface";

const navLinksQuery = graphql`
  query NavLinksQuery {
    markdownRemark(frontmatter: { component: { eq: "links" } }) {
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

export function useNavLinksQuery(): NavLinkProps[] {
  const {
    markdownRemark: {
      frontmatter: { navLinks },
    },
  } = useStaticQuery<QueryData<NavLinkProps[]>>(navLinksQuery);

  return navLinks;
}
