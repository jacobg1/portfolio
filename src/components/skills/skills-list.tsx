import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";

import { useSkillsQuery } from "../../hooks/use-skills-query";
import { Skill } from "../../types/interface";
import { SingleSkill } from "./single-skill";

const skillsListStyles: SxProps = {
  display: "flex",
  flexWrap: "wrap",
  maxWidth: "1048px",
  margin: "60px auto",
  "& .button-link-container": {
    width: "auto",
    margin: "5px",
    "& .button-link": {
      textTransform: "lowercase",
      border: "1px solid #1976d2",
      boxShadow: "1px 1px 1px black",
    },
  },
};

export const SkillsList = (): JSX.Element => {
  const mySkills = useSkillsQuery<Skill[]>();
  return (
    <Box sx={skillsListStyles}>
      {mySkills.map((skill, i) => (
        <SingleSkill key={`skill-${i}`} {...skill} />
      ))}
    </Box>
  );
};
