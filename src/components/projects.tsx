import * as React from "react";
import { ProjectProps } from "../types/interface";
import { Content } from "./content";
import { NavLink } from "./navigation";

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
