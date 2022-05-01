import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import { PageMetaProps, MetadataQuery } from "../types/interface";

export const PageMeta: React.FC<PageMetaProps> = ({
  metaDescription,
  metaTitle,
}) => {
  const {
    site: {
      siteMetadata: { title, description, keywords, siteUrl },
    },
  } = useStaticQuery<MetadataQuery>(query);

  return (
    <Helmet
      title={title || metaTitle}
      htmlAttributes={{ lang: "en" }}
      meta={[
        {
          name: "description",
          content: description || metaDescription,
        },
        {
          name: "keywords",
          content: keywords.join(),
        },
      ]}
      link={[
        {
          rel: "canonical",
          href: siteUrl,
        },
      ]}
    />
  );
};

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
