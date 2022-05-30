export interface NavLinkItem {
  text: string;
  destination: string;
  newTab: boolean;
}

export interface NavLinkList {
  navLinks: NavLinkItem[];
}

export interface MobileHeaderProps extends NavLinkList {
  isOpen: boolean;
  onClick: () => void;
}

export interface QueryData<T> {
  markdownRemark: {
    frontmatter: {
      [key: string]: T;
    };
  };
}

export interface MetadataQuery<T> {
  site: {
    siteMetadata: T;
  };
}

type ProjectContent = {
  title: string;
  app: string;
  repo: string;
  order: number;
  icon: {
    publicURL: string;
  };
};

interface Html {
  html: string;
}

interface Node extends Html {
  id: string;
  frontmatter: ProjectContent;
}

type Edge = {
  node: Node;
};

export interface ProjectsPageContent {
  content: {
    html: string;
    frontmatter: {
      title: string;
    };
  };
}

export interface ProjectsListContent {
  projects: {
    edges: Edge[];
  };
}

export type PageData = {
  markdownRemark: Html;
};

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

export interface ProjectProps extends Html {
  title: string;
  app: string;
  repo: string;
  value: number;
  index: number;
  icon: {
    publicURL: string;
  };
}

export interface ProjectTabsProps {
  tabLabels: number[] | string[];
  value: number;
  handleChange: (_: React.SyntheticEvent, newValue: number) => void;
}

export interface ProjectLinkProps {
  text: string;
  linkHref: string;
  icon: JSX.Element;
}
