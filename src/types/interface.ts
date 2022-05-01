export interface NavLinkProps {
  text: string;
  destination: string;
  newTab: boolean;
}

export interface QueryData<T> {
  markdownRemark: {
    frontmatter: {
      [k: string]: T;
    };
  };
}

export interface ProjectProps {
  html: string;
  title: string;
  app: string;
  repo: string;
}

export interface MetadataQuery {
  site: {
    siteMetadata: SiteMetadata;
  };
}

interface SiteMetadata {
  title: string;
  description: string;
  keywords: string[];
  siteUrl: string;
}

export interface PageMetaProps {
  metaTitle?: string;
  metaDescription?: string;
}
