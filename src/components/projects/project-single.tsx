import * as React from "react";
import { ProjectProps } from "../../types/interface";
import { Content } from "../content";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import type { SxProps } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TerminalIcon from "@mui/icons-material/Terminal";
import { ProjectLink } from "./project-link";

const projectStyles: SxProps = {
  margin: "30px 0",
  "& .divider": {
    margin: "15px 0 20px",
    border: "1px solid #0572e1",
  },
  "& .MuiTypography-h3": {
    marginTop: "4px",
    marginRight: "16px",
  },
  "& .project-links": {
    margin: "28px 0",
    display: "flex",
    justifyContent: "space-around",
  },
  "& .MuiButton-root:hover": {
    borderSize: "2px",
  },
  img: {
    height: "28px",
    width: "28px",
    alignSelf: "center",
  },
};

export const Project = ({
  html,
  title,
  repo,
  app,
  value,
  index,
  icon,
}: ProjectProps): JSX.Element => {
  return (
    <Box hidden={value !== index} sx={projectStyles} component="article">
      <Box display="flex" alignItems="flex-start" flexDirection="row">
        <Typography variant="h3">{title}</Typography>
        <Box component="img" src={icon.publicURL} />
      </Box>
      <Divider className="divider" />
      <Box className="project-links">
        <ProjectLink text="Repo" linkHref={repo} icon={<GitHubIcon />} />
        <ProjectLink text="App" linkHref={app} icon={<TerminalIcon />} />
      </Box>
      <Content content={html} />
    </Box>
  );
};
