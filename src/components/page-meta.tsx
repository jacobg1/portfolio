import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";

type SiteMetadata = {
  site: {
    siteMetadata: {
      title: string;
      description: string;
      keywords: string[];
      siteUrl: string;
    };
  };
};

type PageMetaProps = {
  metaTitle?: string;
  metaDescription?: string;
};

export const PageMeta: React.FC<PageMetaProps> = ({
  metaDescription,
  metaTitle,
}) => {
  const {
    site: {
      siteMetadata: { title, description, keywords, siteUrl },
    },
  } = useStaticQuery<SiteMetadata>(query);

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
