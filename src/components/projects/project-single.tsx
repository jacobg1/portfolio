import * as React from "react";
import { ProjectProps } from "../../types/interface";
import { Content } from "../content";
import { NavLink } from "../navigation";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { SxProps } from "@mui/material";

const projectStyles: SxProps = {
  margin: "20px 0",
};

export const Project = ({
  html,
  title,
  repo,
  app,
  value,
  index,
}: ProjectProps): JSX.Element => {
  return (
    <Box hidden={value !== index} sx={projectStyles} component="article">
      <Typography variant="h3">{title}</Typography>
      <NavLink text="Repo" destination={repo} newTab={true} />
      <NavLink text="App" destination={app} newTab={true} />
      <Content content={html} />
    </Box>
  );
};
