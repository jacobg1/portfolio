import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useNavLinksQuery } from "../../hooks/use-navlinks-query";
import { NavLinkItem } from "../../types/interface";
import { NavLink, SiteLinks } from "./navigation";

const footerStyles: SxProps = {
  backgroundColor: "#e7e7e7",
  padding: { xs: "16px 17px", sm: 0 },
  position: "absolute",
  width: "100%",
  borderTop: "2px solid #0572e1",
  "& .footer-container": {
    display: "flex",
    maxWidth: "700px",
    margin: "auto",
    height: { xs: "125px", sm: "75px" },
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: { xs: "space-between", sm: "space-around" },
    alignItems: "center",
    a: {
      color: "black",
      fontSize: { sm: "18px" },
    },
  },
  "& .email": {
    textAlign: "center",
    fontSize: { sm: "18px" },
    padding: { xs: "10px 0 0", sm: "0 0 25px" },
    a: {
      color: "black",
    },
  },
};

export const SiteFooter = (): JSX.Element => {
  const navLinks = useNavLinksQuery<NavLinkItem[]>();
  return (
    <Box sx={footerStyles} component="footer">
      <Box className="footer-container">
        <SiteLinks navLinks={navLinks} />
      </Box>
      <Typography className="email" variant="body1">
        <NavLink
          text="greenwald.j8@gmail.com"
          destination="mailto:greenwald.j8@gmail.com"
          newTab={false}
        />
      </Typography>
    </Box>
  );
};
