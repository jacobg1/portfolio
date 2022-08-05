import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useSkillsQuery } from "../../hooks/use-skills-query";
import { Skill } from "../../types/interface";
import { SingleSkill } from "./single-skill";

const skillsListStyles: SxProps = {
  display: "flex",
  flexWrap: "wrap",
  "& .button-link-container": {
    width: "auto",
    margin: "5px",
    "& .button-link": {
      textTransform: "lowercase",
      border: "1px solid #1976d2",
      boxShadow: "1px 1px 1px black",
      "&:hover": {
        background: "white",
        boxShadow: "none",
        borderColor: "black",
      },
    },
  },
};

const skillsSectionStyles: SxProps = {
  margin: "30px auto",
  "& .skills-header": {
    lineHeight: "24px",
  },
  "& .robot-arm": {
    padding: "0 0 5px 5px",
    fontSize: { xs: "18px", sm: "22px", lg: "24px" },
  },
};

export const SkillsList = (): JSX.Element => {
  const mySkills = useSkillsQuery<Skill[]>();
  return (
    <Box sx={skillsSectionStyles}>
      <Box display="flex" alignItems="center">
        <Typography className="skills-header" variant="h3">
          Skills
        </Typography>
        <Box component="span" className="robot-arm">
          🦾
        </Box>
      </Box>
      <Box sx={skillsListStyles}>
        {mySkills.map((skill, i) => (
          <SingleSkill key={`skill-${i}`} {...skill} />
        ))}
      </Box>
    </Box>
  );
};
