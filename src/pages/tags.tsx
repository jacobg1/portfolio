import * as React from "react";

import type { SxProps } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { graphql, Link as InternalLink, type PageProps } from "gatsby";

import { GoBack } from "../components/global/go-back";
import { PageMeta } from "../components/global/page-meta";
import { TitleWithDivider } from "../components/global/title-with-divider";
import { TagsPageProps } from "../types";
import { createTagPageLink, pluralWord } from "../utils";

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
  maxWidth: { xs: "275px", md: "300px", lg: "345px" },
  padding: { xs: "20px 5px", lg: "25px 5px 35px 5px" },
  margin: "10px 10px",
  textAlign: "center",
  width: { xs: "100%", sm: "48%" },
  h4: {
    fontWeight: 600,
    fontSize: "30px",
  },
  "& .card-content": {
    padding: "0 0 20px 0",
  },
  "& .total-count": {
    padding: "10px",
  },
  "& .card-action": {
    justifyContent: "center",
  },
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
              <CardContent className="card-context">
                <Typography variant="h4">{fieldValue}</Typography>
                <Typography variant="body1" className="total-count">
                  {totalCount} {pluralWord(totalCount, "post")}
                </Typography>
              </CardContent>
              <CardActions className="card-action">
                <InternalLink
                  to={createTagPageLink(fieldValue)}
                  className="blog-post-link"
                >
                  View Posts
                </InternalLink>
              </CardActions>
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
