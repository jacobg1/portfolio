import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { Link as InternalLink, graphql, PageProps } from "gatsby";

import { PageMeta } from "../components/global/page-meta";
import { BlogsListProps } from "../types";

const blogListProps: SxProps = {
  width: { md: "70%" },
  margin: { xs: "30px 0", md: "60px auto" },
  "& .blog-post-link": {
    fontSize: { xs: "25px", md: "30px" },
  },
  "& .blog-list-item": {
    margin: { xs: "35px 0", sm: "35px 30px" },
  },
  h2: {
    fontSize: { xs: "30px", md: "35px" },
    paddingBottom: "5px",
  },
  "& .blog-item-date": {
    fontWeight: 800,
    padding: "5px 0 10px 0",
    fontSize: "17px",
  },
  "& .divider": {
    maxWidth: "800px",
  },
};

const BlogListPage = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}: PageProps<BlogsListProps>): JSX.Element => {
  return (
    <>
      <PageMeta metaTitle="Blog" />
      <Box sx={blogListProps}>
        <Typography variant="h2">Blog Posts</Typography>
        <Divider className="divider" />
        {nodes.map(({ id, fields, frontmatter }) => (
          <Box className="blog-list-item" key={id}>
            <InternalLink to={fields.slug} className="blog-post-link">
              {frontmatter.title}
            </InternalLink>
            <Typography className="blog-item-date" variant="body1">
              {frontmatter.date}
            </Typography>
            <Typography variant="body1">{frontmatter.description}</Typography>
          </Box>
        ))}
        <Typography variant="body1">More posts coming soon!</Typography>
      </Box>
    </>
  );
};

export const pageQuery = graphql`
  query BlogListQuery {
    allMarkdownRemark(
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
        }
      }
    }
  }
`;

export default BlogListPage;
