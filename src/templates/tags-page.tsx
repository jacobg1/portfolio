import * as React from "react";

// import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
import { graphql, PageProps } from "gatsby";

// import { Content } from "../components/global/content";
// import { GoBack } from "../components/global/go-back";
import { PageMeta } from "../components/global/page-meta";
import { TagsPageProps } from "../types";

// const tagsPageStyles: SxProps = {};

const TagsPage = ({ data }: PageProps<TagsPageProps>): JSX.Element => {
  console.log(data.allMarkdownRemark.totalCount);
  return (
    <>
      <PageMeta metaTitle="test" slug="test" metaDescription="test" />
      <Box>test</Box>
    </>
  );
};

export const pageQuery = graphql`
  query TagsPageQuery($tag: String) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`;

export default TagsPage;
