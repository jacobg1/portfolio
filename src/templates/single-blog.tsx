import * as React from "react";

import Typography from "@mui/material/Typography";
import { graphql, PageProps } from "gatsby";

import { Content } from "../components/global/content";
import { SingleBlogProps } from "../types";

const BlogTemplate = ({
  data: { post, next, previous },
}: PageProps<SingleBlogProps>): JSX.Element => {
  console.log(next, previous);
  console.log(post);
  return (
    <>
      <Typography>{post.frontmatter.title}</Typography>
      <Content content={post.html} className="single-blog" />
    </>
  );
};

export const pageQuery = graphql`
  query SingleBlogPost(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    post: markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

export default BlogTemplate;
