import { default as React } from "react";
import { PageMeta } from "../components/page-meta";
import { graphql, PageProps } from "gatsby";
import { ProjectsPageContent } from "../types/interface";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Content } from "../components/content";
import { ProjectsList } from "../components/projects/projects-list";
import type { SxProps } from "@mui/material";

const projectPageStyles: SxProps = {
  margin: "10px 0 0",
  "& p": {
    margin: "10px 0 20px",
  },
};

const ProjectsPage = ({
  data: {
    content: {
      html,
      frontmatter: { title },
    },
  },
}: PageProps<ProjectsPageContent>): JSX.Element => {
  return (
    <>
      <PageMeta metaTitle="My Projects" />
      <Box sx={projectPageStyles}>
        <Typography variant="h2">{title}</Typography>
        <Content content={html} />
      </Box>
      <ProjectsList />
    </>
  );
};

export default ProjectsPage;

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
