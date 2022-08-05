import { IGatsbyImageData } from "gatsby-plugin-image";

export interface NavLinkItem {
  text: string;
  destination: string;
  newTab: boolean;
}

export enum SkillsEnum {
  BACKEND = "backend",
  FRONTEND = "frontend",
  DATABASE = "database",
}

export interface Skill {
  text: string;
  type: string | SkillsEnum;
  website: string;
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

export type HtmlString = string;

export interface PageContent {
  content: {
    html: HtmlString;
    frontmatter: {
      title: string;
    };
  };
}

interface GatsbyImageSharp {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData;
  };
}

export interface PageContentWithImage extends PageContent {
  featuredImage: GatsbyImageSharp;
}

interface Node {
  html: HtmlString;
  id: string;
  frontmatter: ProjectContent;
}

type Edge = {
  node: Node;
};

export interface ProjectsListContent {
  projects: {
    edges: Edge[];
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

export interface ProjectProps {
  html: HtmlString;
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

export interface ButtonLinkProps {
  text: string;
  linkHref: string;
  icon: JSX.Element | JSX.Element[];
}
