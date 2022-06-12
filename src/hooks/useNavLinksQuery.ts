import { graphql, useStaticQuery } from "gatsby";

import { QueryData } from "../types/interface";

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

export function useNavLinksQuery<T>(): T {
  const {
    markdownRemark: {
      frontmatter: { navLinks },
    },
  } = useStaticQuery<QueryData<T>>(navLinksQuery);

  return navLinks;
}
