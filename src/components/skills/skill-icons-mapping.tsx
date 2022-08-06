import * as React from "react";

import StorageIcon from "@mui/icons-material/Storage";
import TerminalIcon from "@mui/icons-material/Terminal";
import WebIcon from "@mui/icons-material/Web";

import { SkillsEnum } from "../../types/interface";

const frontendColor = "#7c1b1b";
const backendColor = "#0900ff";
const databaseColor = "#009688";

export const skillIconsMapping = {
  [SkillsEnum.BACKEND]: <TerminalIcon style={{ fill: backendColor }} />,
  [SkillsEnum.FRONTEND]: <WebIcon style={{ fill: frontendColor }} />,
  [SkillsEnum.DATABASE]: <StorageIcon style={{ fill: databaseColor }} />,
};
