import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { graphql, PageProps } from "gatsby";

import { BlogListItem } from "../components/blog/blog-list-item";
import { GoBack } from "../components/global/go-back";
import { PageMeta } from "../components/global/page-meta";
import { TitleWithDivider } from "../components/global/title-with-divider";
import { TagsPageProps } from "../types";
import { createTagPageLink, pluralWord } from "../utils";

const singleTagStyles: SxProps = {
  width: { md: "70%" },
  margin: { xs: "30px 0", md: "60px auto" },
  "& .tag-description": {
    paddingTop: "20px",
  },
};

const SingleTag = ({
  data: {
    allMarkdownRemark: { totalCount, edges: posts },
  },
  pageContext: { tag },
}: PageProps<TagsPageProps, { tag: string }>): JSX.Element => {
  const tagTitle = `Tag - ${tag}`;
  const tagTotal = `${totalCount} ${pluralWord(totalCount, "post")}`;
  const tagDescription = `${tagTotal} with tag - ${tag}`;

  return (
    <>
      <PageMeta
        metaTitle={tagTitle}
        slug={createTagPageLink(tag)}
        metaDescription={tagDescription}
      />
      <Box sx={singleTagStyles}>
        <GoBack page="/blog/" />
        <TitleWithDivider title={tagTitle} />
        <Typography className="tag-description" variant="body1">
          {tagTotal}
        </Typography>

        {posts.map(({ node: { id, ...post } }) => (
          <BlogListItem key={id} {...post} />
        ))}
      </Box>
    </>
  );
};

export const pageQuery = graphql`
  query SingleTagQuery($tag: String) {
    allMarkdownRemark(
      sort: [
        { frontmatter: { postOrder: ASC } }
        { frontmatter: { date: DESC } }
      ]
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
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
  }
`;

export default SingleTag;
