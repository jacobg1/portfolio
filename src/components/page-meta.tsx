import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";
import { PageMetaProps, MetadataQuery } from "../types/interface";

export const PageMeta = ({
  metaDescription,
  metaTitle,
}: PageMetaProps): JSX.Element => {
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
        {
          name: "meta",
          content: "initial-scale=1, width=device-width",
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
