import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";

import { Skill, SkillsEnum } from "../../types/interface";
import { ButtonLink } from "../global/button-link";
import { skillIconsMapping } from "./skill-icons-mapping";

const skillIconStyles: SxProps = {
  alignSelf: "center",
  display: "flex",
  svg: {
    width: "auto",
  },
};

export const SingleSkill = ({ text, type, website }: Skill): JSX.Element => {
  const getSkillIcons: JSX.Element[] = type
    .split(",")
    .map((type: string, i: number) => {
      return (
        <Box sx={skillIconStyles} className={type} key={`skill-${i}`}>
          {skillIconsMapping[type as SkillsEnum]}
        </Box>
      );
    });
  return <ButtonLink text={text} linkHref={website} icon={getSkillIcons} />;
};
