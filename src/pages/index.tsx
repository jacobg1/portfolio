import { default as React } from "react";
import { PageMeta } from "../components/page-meta";
import { graphql, PageProps } from "gatsby";
import { ProjectsPageContent } from "../types/interface";
import Typography from "@mui/material/Typography";

import { Content } from "../components/content";
import { ProjectsList } from "../components/projects/projects-list";

export const pageQuery = graphql`
  query ProjectsPage {
    content: markdownRemark(frontmatter: { page: { eq: "projects-page" } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

const ProjectsPage = ({
  data: {
    content: {
      html: pageHtml,
      frontmatter: { title: pageTitle },
    },
  },
}: PageProps<ProjectsPageContent>): JSX.Element => {
  return (
    <>
      <PageMeta metaTitle="My Projects" />
      <Typography variant="h2">{pageTitle}</Typography>
      <Content content={pageHtml} />
      <ProjectsList />
    </>
  );
};

export default ProjectsPage;
