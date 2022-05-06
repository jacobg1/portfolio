import { graphql, useStaticQuery } from "gatsby";
import { MetadataQuery } from "../types/interface";

const query = graphql`
  query PageMeta {
    site {
      siteMetadata {
        title
        description
        keywords
        siteUrl
      }
    }
  }
`;

export function useMetadataQuery<T>(): T {
  const {
    site: { siteMetadata },
  } = useStaticQuery<MetadataQuery<T>>(query);

  return siteMetadata;
}
