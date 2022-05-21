import { default as React, SyntheticEvent } from "react";
import { ProjectsListContent } from "../../types/interface";
// import type { SxProps } from "@mui/material";
import { graphql, useStaticQuery } from "gatsby";
import { Project } from "./project-single";
import { ProjectTabs } from "./project-tabs";
import SwipeableViews from "react-swipeable-views";

// const projectStyles: SxProps = {
//   margin: "20px 0",
// };

export const ProjectsList = (): JSX.Element => {
  const {
    projects: { edges: projectList },
  } = useStaticQuery<ProjectsListContent>(projectsQuery);
  const [value, setValue] = React.useState(0);

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

  const handleChangeIndex = (index: number): void => {
    setValue(index);
  };

  return (
    <>
      <ProjectTabs
        value={value}
        tabLabels={tabLabels}
        handleChange={handleChange}
      />
      <SwipeableViews
        index={value}
        resistance={true}
        onChangeIndex={handleChangeIndex}
      >
        {projectList.map(
          ({ node: { id, html: projectHtml, frontmatter } }, i) => (
            <Project
              key={`project-${id}`}
              index={i}
              value={value}
              html={projectHtml}
              {...frontmatter}
            />
          )
        )}
      </SwipeableViews>
    </>
  );
};

export const projectsQuery = graphql`
  query ProjectsList {
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
