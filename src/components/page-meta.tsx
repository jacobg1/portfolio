import * as React from "react";
import { Helmet } from "react-helmet";
import { PageMetaProps, SiteMetadata } from "../types/interface";
import { useMetadataQuery } from "../hooks/useMetadataQuery";

export const PageMeta = ({
  metaDescription,
  metaTitle,
}: PageMetaProps): JSX.Element => {
  const { title, description, keywords, siteUrl } =
    useMetadataQuery<SiteMetadata>();
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
