import * as React from "react";

// import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import Typography from "@mui/material/Typography";
import { Link, graphql, PageProps } from "gatsby";

import { PageMeta } from "../components/global/page-meta";
import { BlogsListProps } from "../types/interface";

// const aboutPageStyles: SxProps = {};

// const contentStyles: SxProps = {};

const BlogListPage = ({
  data: {
    allMarkdownRemark: { nodes },
  },
}: PageProps<BlogsListProps>): JSX.Element => {
  console.log(nodes);
  return (
    <>
      <PageMeta metaTitle="Blog" />
      {nodes.map(({ id, fields, frontmatter }) => (
        <Box key={id}>
          <Link to={fields.slug}>{frontmatter.title}</Link>
        </Box>
      ))}
    </>
  );
};

export const pageQuery = graphql`
  query BlogListQuery {
    allMarkdownRemark(
      filter: { fields: { collection: { eq: "blog-posts" } } }
      sort: { frontmatter: { date: DESC } }
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
