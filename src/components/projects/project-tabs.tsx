import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ProjectTabsProps } from "../../types/interface";
import type { SxProps } from "@mui/material";

const projectTabsStyle: SxProps = {
  alignItems: "center",
  // padding: "10px",
  // border: "2px solid #52c0ff",
  fontWeight: 400,
  "& .MuiTab-root": {
    padding: 0,
    minHeight: "32px",
    lineHeight: "1px",
    alignItems: "center",
    minWidth: "40px",
    "&.Mui-selected": {
      fontWeight: 900,
      border: "2px solid #0572e1",
      borderRadius: "12px",
      background: "#ffdebd",
    },
  },
};

export const ProjectTabs = ({
  value,
  handleChange,
  tabLabels,
}: ProjectTabsProps): JSX.Element => {
  return (
    <Tabs
      sx={projectTabsStyle}
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="inherit"
      variant="fullWidth"
      aria-label="Project selector"
      centered
    >
      {tabLabels.map((label) => (
        <Tab key={`project-tab-${label}`} label={`${label}`} />
      ))}
    </Tabs>
  );
};
