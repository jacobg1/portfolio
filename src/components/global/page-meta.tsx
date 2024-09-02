import * as React from "react";

import { Helmet } from "react-helmet";

import { useMetadataQuery } from "../../hooks/use-metadata-query";
import { PageMetaProps, SiteMetadata } from "../../types";

export const PageMeta = ({
  metaDescription,
  metaTitle,
  slug,
}: PageMetaProps): JSX.Element => {
  const { title, description, keywords, siteUrl } =
    useMetadataQuery<SiteMetadata>();

  const seoTitle = metaTitle || title;
  const seoDescription = metaDescription || description;

  return (
    <Helmet
      title={seoTitle}
      htmlAttributes={{ lang: "en" }}
      meta={[
        {
          name: "description",
          content: seoDescription,
        },
        {
          name: "keywords",
          content: keywords.join(),
        },
        {
          name: "meta",
          content: "initial-scale=1, width=device-width",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "twitter:card",
          content: "summary",
        },
        {
          name: "og:title",
          content: seoTitle,
        },
        {
          name: "og:description",
          content: seoDescription,
        },
        {
          name: "twitter:title",
          content: seoTitle,
        },
        {
          name: "twitter:description",
          content: seoDescription,
        },
      ]}
      link={[
        {
          rel: "canonical",
          href: slug ? `${siteUrl}${slug}` : siteUrl,
        },
      ]}
    />
  );
};
