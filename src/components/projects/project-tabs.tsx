import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ProjectTabsProps } from "../../types/interface";
import type { SxProps } from "@mui/material";

const projectTabsStyle: SxProps = {};

export const ProjectTabs = ({
  value,
  handleChange,
  tabLabels,
}: ProjectTabsProps): JSX.Element => {
  return (
    <Tabs
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="inherit"
      variant="fullWidth"
      aria-label="Project selector"
      centered
    >
      {tabLabels.map((label, i) => (
        <Tab key={`project-tab-${i}`} label={label.split(" ")[0]} />
      ))}
    </Tabs>
  );
};
