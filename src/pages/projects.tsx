import * as React from "react";
import { PageMeta } from "../components/page-meta";
import { Page } from "../components/page";
import { graphql, PageProps } from "gatsby";

interface Item {
  node: {
    id: string;
    html: string;
    frontmatter: {
      title: string;
      app: string;
      repo: string;
    };
  };
}

type PageData = {
  allMarkdownRemark: {
    edges: Item[];
  };
};

const ProjectsPage: React.FC<PageProps<PageData>> = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  console.log(edges);
  return (
    <Page>
      <PageMeta metaTitle="Projects page" />
      {/* <div dangerouslySetInnerHTML={{ __html: html }} /> */}
      {edges.map(
        ({
          node: {
            id,
            html,
            frontmatter: { title },
          },
        }) => (
          <div key={`project-${id}`}>
            <h2>{title}</h2>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        )
      )}
    </Page>
  );
};

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

export default ProjectsPage;
