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
    alignItems: "center",
    "&.Mui-selected": {
      fontWeight: 600,
      // border: "2px solid #5a31ff",
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
        <Tab key={`project-tab-${label}`} label={`# ${label}`} />
      ))}
    </Tabs>
  );
};
