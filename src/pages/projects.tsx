import * as React from "react";
import { PageMeta } from "../components/page-meta";
import { Page } from "../components/page";
import { graphql, PageProps } from "gatsby";

type PageData = {
  markdownRemark: {
    html: string;
    frontmatter: {
      page: string;
    };
  };
};

const ProjectsPage: React.FC<PageProps<PageData>> = ({
  data: {
    markdownRemark: { html },
  },
}) => {
  return (
    <Page>
      <PageMeta metaTitle="Projects page" />
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Page>
  );
};

export const pageQuery = graphql`
  query Projects {
    markdownRemark(frontmatter: { page: { eq: "projects" } }) {
      frontmatter {
        page
      }
      html
    }
  }
`;
export default ProjectsPage;
