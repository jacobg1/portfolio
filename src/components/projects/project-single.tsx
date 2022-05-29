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
  // margin: "30px 0",
  "& .divider": {
    margin: "15px 0 20px",
    border: "1px solid #0572e1",
  },
  "& .MuiTypography-h3": {
    marginTop: "4px",
    marginRight: "16px",
    justifyContent: "center",
  },
  "& .project-links": {
    display: "flex",
    margin: { xs: "28px 0", sm: "40px 0" },
    justifyContent: { xs: "space-around" },
  },
  "& .MuiButton-root:hover": {
    borderSize: "2px",
  },
  img: {
    height: "28px",
    width: "28px",
    alignSelf: "center",
  },
  "& .project-container": {
    width: { md: "65%" },
    maxWidth: "1000px",
    margin: { xs: "auto", md: "50px auto 40px" },
  },
  "& .project-title": {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: { sm: "center" },
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
      <Box className="project-title">
        <Typography variant="h3">{title}</Typography>
        <Box component="img" src={icon.publicURL} />
      </Box>
      <Divider className="divider" />
      <Box className="project-container">
        <Box className="project-links">
          <ProjectLink text="App" linkHref={app} icon={<TerminalIcon />} />
          <ProjectLink text="Repo" linkHref={repo} icon={<GitHubIcon />} />
        </Box>
        <Content content={html} />
      </Box>
    </Box>
  );
};
