import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { graphql, type PageProps } from "gatsby";

import { BlogListItem } from "../components/blog/blog-list-item";
import { PageMeta } from "../components/global/page-meta";
import { TitleWithDivider } from "../components/global/title-with-divider";
import { BlogsListProps } from "../types";

const blogListStyles: SxProps = {
  maxWidth: "800px",
  width: { md: "70%" },
  margin: { xs: "30px 0", md: "60px auto" },
};

const BlogListPage = ({
  data: {
    postsData: { nodes },
  },
}: PageProps<BlogsListProps>): JSX.Element => {
  return (
    <>
      <PageMeta metaTitle="Blog" />
      <Box sx={blogListStyles}>
        <TitleWithDivider title="Blog Posts" />
        {nodes.map(({ id, ...post }) => (
          <BlogListItem key={id} {...post} />
        ))}
        <Typography variant="body1">More posts coming soon!</Typography>
      </Box>
    </>
  );
};

export const pageQuery = graphql`
  query BlogListQuery {
    postsData: allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog-posts" } } }
      sort: [
        { frontmatter: { postOrder: ASC } }
        { frontmatter: { date: DESC } }
      ]
    ) {
      nodes {
        id
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`;

export default BlogListPage;
