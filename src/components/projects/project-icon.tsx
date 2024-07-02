import * as React from "react";

import Box from "@mui/material/Box";

import { ReactComponent as GraphIcon } from "../../images/auto-graph.svg";
import { ReactComponent as SpaceIcon } from "../../images/space-search.svg";
import { ReactComponent as VinylIcon } from "../../images/vinyl.svg";
import { ProjectIconName } from "../../types/enum";
import { ProjectIconProps } from "../../types/interface";

const iconMap = {
  [ProjectIconName.VINYL]: <VinylIcon />,
  [ProjectIconName.SPACE]: <SpaceIcon />,
  [ProjectIconName.GRAPH]: <GraphIcon />,
};

export const ProjectIcon = ({
  iconName,
}: ProjectIconProps): JSX.Element | null => {
  const icon = iconMap[iconName];

  if (!icon) return null;
  return <Box className="project-icon">{icon}</Box>;
};
