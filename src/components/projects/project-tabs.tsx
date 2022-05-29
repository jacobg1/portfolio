import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { ProjectTabsProps } from "../../types/interface";
import type { SxProps } from "@mui/material";

const projectTabsStyle: SxProps = {
  alignItems: "center",
  fontWeight: 400,
  maxWidth: "500px",
  margin: { xs: "25px auto 30px", sm: "55px auto 55px" },
  "& .MuiTab-root": {
    padding: 0,
    fontSize: { md: "17px" },
    minHeight: { xs: "32px", sm: "41px", md: "42px" },
    lineHeight: "1px",
    alignItems: "center",
    minWidth: "40px",
    "&.Mui-selected": {
      fontWeight: 900,
      border: "2px solid #0572e1",
      borderRadius: "4px",
      // background: "#ffdebd",
      backgroundColor: "#ffffff",
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
