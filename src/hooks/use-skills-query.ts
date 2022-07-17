import { useStaticQuery, graphql } from "gatsby";

import { QueryData } from "../types/interface";

const skillsQuery = graphql`
  query MySkillsQuery {
    markdownRemark(frontmatter: { component: { eq: "skills" } }) {
      id
      frontmatter {
        mySkills {
          text
          type
          website
        }
      }
    }
  }
`;
export function useSkillsQuery<T>(): T {
  const {
    markdownRemark: {
      frontmatter: { mySkills },
    },
  } = useStaticQuery<QueryData<T>>(skillsQuery);

  return mySkills;
}
