import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { graphql, PageProps } from "gatsby";

import { GoBack } from "../components/global/go-back";
import { PageMeta } from "../components/global/page-meta";
import { TitleWithDivider } from "../components/global/title-with-divider";
import { TagsPageProps } from "../types";
import { createTagPageLink, pluralWord } from "../utils";

const tagsPageStyles: SxProps = {
  width: { md: "70%" },
  margin: { xs: "30px 0", md: "60px auto" },
  "& .tag-description": {
    paddingTop: "20px",
    paddingBottom: "20px",
  },
};

const TagsPage = ({
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
      <Box sx={tagsPageStyles}>
        <GoBack page="/blog/" />
        <TitleWithDivider title={tagTitle} />
        <Typography className="tag-description" variant="body1">
          {tagTotal}
        </Typography>
        <Stack spacing={2}>
          {posts.map(({ node: { frontmatter, fields } }) => (
            <Paper key={fields.slug}>{frontmatter.title}</Paper>
          ))}
        </Stack>
      </Box>
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
