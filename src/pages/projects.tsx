import * as React from "react";
import { PageMeta } from "../components/page-meta";
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

const ProjectsPage = ({
  data: {
    allMarkdownRemark: { edges: projects },
  },
}: PageProps<PageData>): JSX.Element => {
  return (
    <>
      <PageMeta metaTitle="Projects page" />
      {projects.map(({ node: { id, html, frontmatter } }) => (
        <Project key={`project-${id}`} html={html} {...frontmatter} />
      ))}
    </>
  );
};

export default ProjectsPage;
