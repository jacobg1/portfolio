import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { graphql, PageProps } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

import { Content } from "../components/content";
import { PageMeta } from "../components/page-meta";
import { PageContentWithImage } from "../types/interface";

const aboutPageStyles: SxProps = {
  maxWidth: "1750px",
  margin: {
    xs: "15px 0 0",
    sm: "25px 0 0",
    md: "auto",
  },
  textAlign: { xs: "center", md: "left" },
  "& .image-container": {
    margin: { xs: "25px auto 40px", md: "auto" },
    maxWidth: { xs: "150px", sm: "300px" },
  },
  "& .MuiTypography-h2": {
    textAlign: "center",
    marginTop: { md: "20px", lg: "50px" },
  },
  "& .divider": {
    maxWidth: "75%",
    border: "1px solid #0572e1",
    margin: {
      xs: "15px auto 10px",
      md: "25px auto 50px",
      lg: "25px auto 75px",
    },
  },
};

const contentStyles: SxProps = {
  display: "flex",
  alignItems: "center",
  flexDirection: { xs: "column", md: "row" },
  justifyContent: { xs: "center", md: "space-between" },
  "& p": {
    margin: 0,
  },
  "& .content": {
    margin: { xs: "0 auto 30px", md: 0 },
    maxWidth: {
      xs: "385px",
      md: "60%",
      lg: "70%",
      xl: "75%",
    },
  },
};

const IndexPage = ({
  data: {
    content: {
      html,
      frontmatter: { title },
    },
    featuredImage: {
      childImageSharp: { gatsbyImageData },
    },
  },
}: PageProps<PageContentWithImage>): JSX.Element => {
  return (
    <>
      <PageMeta metaTitle="About Me" />
      <Box sx={aboutPageStyles}>
        <Typography variant="h2">{title}</Typography>
        <Divider className="divider" />
        <Box sx={contentStyles}>
          <Box className="image-container">
            <GatsbyImage image={gatsbyImageData} alt="about me image" />
          </Box>
          <Box className="content">
            <Content content={html} />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export const pageQuery = graphql`
  query AboutPage {
    content: markdownRemark(frontmatter: { page: { eq: "about" } }) {
      html
      frontmatter {
        title
      }
    }
    featuredImage: file(relativePath: { regex: "/about-me-image/" }) {
      childImageSharp {
        gatsbyImageData(
          width: 300
          layout: CONSTRAINED
          placeholder: TRACED_SVG
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`;

export default IndexPage;
