import * as React from "react";
import { ProjectProps } from "../types/interface";
import { Content } from "./content";
import { NavLink } from "./navigation";
import { Box } from "@mui/material";

export const Project = ({
  html,
  title,
  repo,
  app,
}: ProjectProps): JSX.Element => {
  return (
    <Box component="article">
      <h2>{title}</h2>
      <NavLink text="Repo" destination={repo} newTab={true} />
      <NavLink text="App" destination={app} newTab={true} />
      <Content content={html} />
    </Box>
  );
};
