import { default as React, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { SiteLinks } from "../navigation";
import type { SxProps } from "@mui/material";
import { MobileHeaderProps } from "../../types/interface";
import { globalHistory } from "@reach/router";

const mobileHeaderStyles: SxProps = {
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  padding: "30px 20px 20px",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
  "& .link-holder": {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    height: "30%",
  },
  svg: {
    width: "30px",
    height: "30px",
  },
};

export const MobileHeader = ({
  navLinks,
  isOpen,
  onClick,
}: MobileHeaderProps): JSX.Element => {
  useEffect(() => {
    return globalHistory.listen(({ action }) => {
      if (action === "PUSH") onClick();
    });
  }, [onClick]);
  return (
    <Drawer anchor="right" open={isOpen} onClose={onClick}>
      <Box sx={mobileHeaderStyles} className="mobile-header">
        <HighlightOffIcon onClick={onClick} />
        <Box className="link-holder">
          <SiteLinks navLinks={navLinks} />
        </Box>
        <Typography variant="body1">greenwald.j8@gmail.com</Typography>
      </Box>
    </Drawer>
  );
};
