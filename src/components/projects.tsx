import * as React from "react";
import { ProjectProps } from "../types/interface";
import { Content } from "./content";
import { NavLink } from "./navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Project = ({
  html,
  title,
  repo,
  app,
}: ProjectProps): JSX.Element => {
  return (
    <Box component="article">
      <Typography variant="h2">{title}</Typography>
      <NavLink text="Repo" destination={repo} newTab={true} />
      <NavLink text="App" destination={app} newTab={true} />
      <Content content={html} />
    </Box>
  );
};
