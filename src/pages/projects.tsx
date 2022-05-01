import * as React from "react";
import { PageMeta } from "../components/page-meta";
import { Page } from "../components/page";
import { graphql, PageProps } from "gatsby";
import { Project } from "../components/projects";
import { PageData } from "../types/interface";

export const pageQuery = graphql`
  query Projects {
    allMarkdownRemark(filter: { fields: { collection: { eq: "projects" } } }) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            app
            repo
          }
        }
      }
    }
  }
`;

const ProjectsPage: React.FC<PageProps<PageData>> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Page>
      <PageMeta metaTitle="Projects page" />
      {edges.map(({ node: { id, html, frontmatter } }) => (
        <Project key={`project-${id}`} html={html} {...frontmatter} />
      ))}
    </Page>
  );
};

export default ProjectsPage;
