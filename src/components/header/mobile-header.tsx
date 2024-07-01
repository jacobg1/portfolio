import { default as React, useEffect } from "react";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Link from "@mui/material/Link";
import { styled } from "@mui/system";
import { globalHistory } from "@reach/router";

import { MobileHeaderProps } from "../../types/interface";
import { SiteLinks } from "../global/navigation";

const mobileHeaderStyles: SxProps = {
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
    cursor: "pointer",
  },
};

const MobileHeaderContainer = styled("div", {
  name: "MuiMobileHeaderContainer",
  overridesResolver: (_, styles) => {
    return styles.root;
  },
})``;

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
      <MobileHeaderContainer sx={mobileHeaderStyles}>
        <HighlightOffIcon onClick={onClick} />
        <Box className="link-holder">
          <SiteLinks navLinks={navLinks} />
        </Box>
        <Link href="mailto:greenwald.j8@gmail.com">greenwald.j8@gmail.com</Link>
      </MobileHeaderContainer>
    </Drawer>
  );
};
