import * as React from "react";

import { type SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";

import { SiteLinks } from "./navigation";
import { useNavLinksQuery } from "../../hooks/use-navlinks-query";
import { NavLinkItem } from "../../types";

const footerStyles: SxProps = {
  padding: { xs: "16px 17px", sm: 0 },
  "& .footer-container": {
    display: "flex",
    maxWidth: "700px",
    margin: "auto",
    height: { xs: "145px", sm: "75px" },
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

const Footer = styled("footer", {
  name: "MuiFooter",
  overridesResolver: (_, styles) => {
    return styles.root;
  },
})``;

export const SiteFooter = (): JSX.Element => {
  const navLinks = useNavLinksQuery<NavLinkItem[]>();
  return (
    <Footer sx={footerStyles}>
      <Box className="footer-container">
        <SiteLinks navLinks={navLinks} />
      </Box>
      <Typography className="email" variant="body1">
        <Link href="mailto:greenwald.j8@gmail.com">greenwald.j8@gmail.com</Link>
      </Typography>
    </Footer>
  );
};
