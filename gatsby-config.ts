import type { GatsbyConfig } from "gatsby";
import path from "path";

const gatsbyRequiredRules = path.join(
  process.cwd(),
  "node_modules",
  "gatsby",
  "dist",
  "utils",
  "eslint-rules"
);
const config: GatsbyConfig = {
  siteMetadata: {
    title: `Jacob Greenwald's Portfolio`,
    description:
      "A creative thinker who uses ingenuity to find innovative solutions to challenging problems. I use insight, imagination and coding fundamentals to create success by drawing on my dedication, persistence and passion for web development",
    keywords: [
      "Jacob Greenwald",
      "Portfolio",
      "Software Engineer",
      "Typescript",
    ],
    siteUrl: `https://jacob-greenwald.com`,
    navLinks: [
      {
        text: "Projects",
        destination: "/projects",
        newTab: false,
      },
      {
        text: "Github",
        destination: "https://github.com/jacobg1",
        newTab: true,
      },
      {
        text: "LinkedIn",
        destination: "https://www.linkedin.com/in/jacob-greenwald-developer/",
        newTab: true,
      },
    ],
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        rulePaths: [gatsbyRequiredRules],
        stages: ["develop"],
        extensions: ["js", "jsx", "ts", "tsx"],
        exclude: ["node_modules", "bower_components", ".cache", "public"],
      },
    },
  ],
};

export default config;
