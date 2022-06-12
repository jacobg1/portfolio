import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { graphql, PageProps } from "gatsby";

import { Content } from "../components/content";
import { PageMeta } from "../components/page-meta";
import { ProjectsList } from "../components/projects/projects-list";
import { PageContent } from "../types/interface";

const projectPageStyles: SxProps = {
  margin: { xs: "10px 0 0", sm: "25px 0 0" },
  textAlign: { sm: "center" },
};

const ProjectsPage = ({
  data: {
    content: {
      html,
      frontmatter: { title },
    },
  },
}: PageProps<PageContent>): JSX.Element => {
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

export default ProjectsPage;
