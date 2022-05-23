import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { NavLink } from "../navigation";
import type { SxProps } from "@mui/material";

interface ProjectLinkProps {
  text: string;
  linkHref: string;
  icon: JSX.Element;
}

const projectLinkStyles: SxProps = {
  width: "30%",
  textAlign: "center",
  svg: {
    width: "21px",
    fill: "#000000",
  },
  "& .MuiButton-root": {
    backgroundColor: "#ffffff",
    width: "100%",
    border: "2px solid #0572e1",
    lineHeight: "19px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& .MuiLink-root": {
      paddingTop: "4px",
      fontWeight: 700,
    },
  },
};

export const ProjectLink = ({
  text,
  linkHref,
  icon,
}: ProjectLinkProps): JSX.Element => {
  return (
    <Box sx={projectLinkStyles}>
      <Button variant="outlined" startIcon={icon}>
        <NavLink text={text} destination={linkHref} newTab={true} />
      </Button>
    </Box>
  );
};
