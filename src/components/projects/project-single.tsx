import * as React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import TerminalIcon from "@mui/icons-material/Terminal";
import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

import { ProjectProps } from "../../types/interface";
import { ButtonLink } from "../global/button-link";
import { Content } from "../global/content";

const projectStyles: SxProps = {
  position: "static",
  zIndex: "1",
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
  img: {
    height: { xs: "28px", sm: "38px" },
    width: { xs: "28px", sm: "38px" },
    alignSelf: "center",
  },
  "& .project-container": {
    width: { lg: "65%" },
    maxWidth: { xs: "450px", sm: "1000px" },
    margin: { xs: "auto", md: "50px auto 40px" },
  },
  "& .project-title": {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row",
    justifyContent: { sm: "center" },
  },
  "& a:hover": {
    textDecoration: "underline",
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
          <ButtonLink text="App" linkHref={app} icon={<TerminalIcon />} />
          <ButtonLink text="Repo" linkHref={repo} icon={<GitHubIcon />} />
        </Box>
        <Content content={html} />
      </Box>
    </Box>
  );
};
