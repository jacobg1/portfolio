import { default as React, useState, SyntheticEvent } from "react";
import { PageMeta } from "../components/page-meta";
import { graphql, PageProps } from "gatsby";
import { Project } from "../components/projects/project-single";
import { ProjectsContent } from "../types/interface";
import Typography from "@mui/material/Typography";
// import SwipeableViews from "react-swipeable-views";
import { ProjectTabs } from "../components/projects/project-tabs";

export const pageQuery = graphql`
  query ProjectsPage {
    markdownRemark(frontmatter: { page: { eq: "homepage" } }) {
      html
      frontmatter {
        title
      }
    }
    projects: allMarkdownRemark(
      filter: { fields: { collection: { eq: "projects" } } }
    ) {
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
    projects: { edges: projectList },
  },
}: PageProps<ProjectsContent>): JSX.Element => {
  const [value, setValue] = useState(0);
  const tabLabels = projectList.map(
    ({
      node: {
        frontmatter: { title },
      },
    }) => title
  );

  const handleChange = (_: SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <>
      <PageMeta metaTitle="My Projects" />
      <Typography variant="h2">My Projects</Typography>
      <ProjectTabs
        value={value}
        tabLabels={tabLabels}
        handleChange={handleChange}
      />
      {projectList.map(({ node: { id, html, frontmatter } }, i) => (
        <Project
          key={`project-${id}`}
          index={i}
          value={value}
          html={html}
          {...frontmatter}
        />
      ))}
    </>
  );
};

export default ProjectsPage;
