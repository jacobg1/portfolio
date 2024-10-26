import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { graphql, type PageProps } from "gatsby";

import { GoBack } from "../components/global/go-back";
import { PageMeta } from "../components/global/page-meta";
import { TitleWithDivider } from "../components/global/title-with-divider";
import { TagsPageProps } from "../types";

const tagsPageStyles: SxProps = {
  maxWidth: "800px",
  width: { md: "70%" },
  margin: { xs: "30px 0", md: "60px auto" },
};

const tagsContainerStyles: SxProps = {
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  marginTop: "35px",
};

const singleTagStyles: SxProps = {
  minWidth: "275px",
  margin: "5px 5px",
  width: { xs: "100%", sm: "48%" },
};

const TagsPage = ({
  data: {
    tagsData: { group: tags },
  },
}: PageProps<TagsPageProps>): JSX.Element => {
  return (
    <>
      <PageMeta
        metaTitle="All Tags"
        slug="/tags/"
        metaDescription="List of all post tags."
      />
      <Box sx={tagsPageStyles}>
        <GoBack page="/blog/" />
        <TitleWithDivider title="All Tags" />
        <Box sx={tagsContainerStyles}>
          {tags.map(({ fieldValue, totalCount }) => (
            <Card key={fieldValue} sx={singleTagStyles}>
              <CardContent>
                <Typography>{fieldValue}</Typography>
                <Typography>Number of posts: {totalCount}</Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default TagsPage;

export const pageQuery = graphql`
  query TagsPageQuery {
    tagsData: allMarkdownRemark {
      group(field: { frontmatter: { tags: SELECT } }) {
        fieldValue
        totalCount
      }
    }
  }
`;
