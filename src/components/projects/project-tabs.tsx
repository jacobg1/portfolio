import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

interface ProjectTabsProps {
  tabLabels: string[];
  value: number;
  handleChange: (_: React.SyntheticEvent, newValue: number) => void;
}

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
