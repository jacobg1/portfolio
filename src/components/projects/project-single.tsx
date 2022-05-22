import * as React from "react";
import { ProjectProps } from "../../types/interface";
import { Content } from "../content";
import { NavLink } from "../navigation";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import type { SxProps } from "@mui/material";

const projectStyles: SxProps = {
  margin: "30px 0",
  "& .divider": {
    margin: "15px 0 20px",
    border: "2px dashed #5a31fd",
  },
  "& .MuiTypography-h3": {
    marginTop: "4px",
    marginRight: "16px",
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
      <NavLink text="Repo" destination={repo} newTab={true} />
      <NavLink text="App" destination={app} newTab={true} />
      <Content content={html} />
    </Box>
  );
};
