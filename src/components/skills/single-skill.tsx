import * as React from "react";

import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Terminal";
import WebIcon from "@mui/icons-material/Web";
import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";

import { Skill, SkillsEnum } from "../../types/interface";
import { ButtonLink } from "../global/button-link";

const skillIconStyles: SxProps = {
  alignSelf: "center",
};

export const SingleSkill = ({ text, type, website }: Skill): JSX.Element => {
  const skillIconsMapping = {
    [SkillsEnum.BACKEND]: <TerminalIcon />,
    [SkillsEnum.FRONTEND]: <WebIcon />,
    [SkillsEnum.DATABASE]: <StorageIcon />,
  };
  const getSkillIcons: JSX.Element[] = type
    .split(",")
    .map((t: string, i: number) => {
      return (
        <Box sx={skillIconStyles} key={`skill-${i}`}>
          {skillIconsMapping[t as SkillsEnum]}
        </Box>
      );
    });
  return <ButtonLink text={text} linkHref={website} icon={getSkillIcons} />;
};
