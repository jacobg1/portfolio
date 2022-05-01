import * as React from "react";
import { Content } from "./content";
import { NavLink } from "./nav-link";

interface ProjectProps {
  html: string;
  title: string;
  app: string;
  repo: string;
}

export const Project: React.FC<ProjectProps> = ({ html, title, repo, app }) => {
  return (
    <div>
      <h2>{title}</h2>
      <NavLink text="Repo" destination={repo} newTab={true} />
      <NavLink text="App" destination={app} newTab={true} />
      <Content content={html} />
    </div>
  );
};
