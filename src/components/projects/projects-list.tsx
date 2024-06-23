import { default as React, SyntheticEvent } from "react";

import { graphql, useStaticQuery } from "gatsby";

import { Project } from "./project-single";
import { ProjectTabs } from "./project-tabs";
import { ProjectsListContent } from "../../types/interface";

export const ProjectsList = (): JSX.Element => {
  const {
    projects: { edges: projectList },
  } = useStaticQuery<ProjectsListContent>(projectsQuery);
  const [value, setValue] = React.useState(0);

  const tabLabels = projectList.map(
    ({
      node: {
        frontmatter: { order },
      },
    }) => order
  );

  const handleChange = (_: SyntheticEvent, newValue: number): void => {
    setValue(newValue);
  };

  return (
    <>
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

export const projectsQuery = graphql`
  query ProjectsList {
    projects: allMarkdownRemark(
      filter: { fields: { collection: { eq: "projects" } } }
      sort: { frontmatter: { order: ASC } }
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            repo
            app
            order
            icon {
              publicURL
            }
          }
        }
      }
    }
  }
`;
