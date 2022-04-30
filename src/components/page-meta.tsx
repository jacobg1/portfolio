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

const PageMeta: React.FC<PageMetaProps> = ({ metaDescription, metaTitle }) => {
  const {
    site: {
      siteMetadata: { title, description, keywords, siteUrl },
    },
  } = useStaticQuery<SiteMetadata>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            keywords
            siteUrl
          }
        }
      }
    `
  );

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

export default PageMeta;
