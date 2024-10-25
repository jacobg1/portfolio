import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Link as InternalLink, graphql, PageProps } from "gatsby";

import { TagsList } from "../components/blog/tags-list";
import { PageMeta } from "../components/global/page-meta";
import { TitleWithDivider } from "../components/global/title-with-divider";
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
  "& .blog-item-date": {
    fontWeight: 800,
    padding: "5px 0 10px 0",
    fontSize: "17px",
  },
};

const BlogListPage = ({
  data: {
    postsData: { nodes },
  },
}: PageProps<BlogsListProps>): JSX.Element => {
  return (
    <>
      <PageMeta metaTitle="Blog" />
      <Box sx={blogListProps}>
        <TitleWithDivider title="Blog Posts" />
        {nodes.map(({ id, fields, frontmatter }) => (
          <Box className="blog-list-item" key={id}>
            <InternalLink to={fields.slug} className="blog-post-link">
              {frontmatter.title}
            </InternalLink>
            <Typography className="blog-item-date" variant="body1">
              {frontmatter.date}
            </Typography>
            <Typography variant="body1">{frontmatter.description}</Typography>
            <TagsList tags={frontmatter.tags} />
          </Box>
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
          skillLevel
        }
      }
    }
  }
`;

export default BlogListPage;
