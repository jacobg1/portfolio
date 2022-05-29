import * as React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import type { SxProps } from "@mui/material";

interface ProjectLinkProps {
  text: string;
  linkHref: string;
  icon: JSX.Element;
}

const projectLinkStyles: SxProps = {
  width: "30%",
  textAlign: "center",
  maxWidth: "200px",
  svg: {
    fill: "#000000",
    width: "21px",
  },
  "& .MuiSvgIcon-root": {
    fontSize: { sm: "23px" },
  },
  "& .MuiButton-startIcon": {
    paddingBottom: "2px",
  },
  "& .MuiButton-root": {
    backgroundColor: "#ffffff",
    width: "100%",
    border: "2px solid #0572e1",
    lineHeight: { sm: "26px" },
    fontSize: { sm: "17px" },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 700,
    "&:hover": {
      background: "#ffffff",
      boxShadow: "1px 1px 1px black",
      textDecoration: "none",
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
      <Button
        href={linkHref}
        target="_blank"
        variant="outlined"
        startIcon={icon}
      >
        {text}
      </Button>
    </Box>
  );
};
