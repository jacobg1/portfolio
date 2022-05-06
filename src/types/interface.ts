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

export interface MetadataQuery<T> {
  site: {
    siteMetadata: T;
  };
}

export interface SiteMetadata {
  title: string;
  description: string;
  keywords: string[];
  siteUrl: string;
}

export interface PageMetaProps {
  metaTitle?: string;
  metaDescription?: string;
}

interface Node {
  node: {
    id: string;
    html: string;
    frontmatter: Frontmatter;
  };
}

type Frontmatter = {
  title: string;
  app: string;
  repo: string;
};

export interface PageData {
  allMarkdownRemark: {
    edges: Node[];
  };
}
