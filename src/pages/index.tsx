import * as React from "react";
import { PageMeta } from "../components/page-meta";
import { graphql, PageProps } from "gatsby";
import { Content } from "../components/content";
import { PageData } from "../types/interface";

export const pageQuery = graphql`
  query HomePage {
    markdownRemark(frontmatter: { page: { eq: "homepage" } }) {
      html
    }
  }
`;

const IndexPage = ({
  data: {
    markdownRemark: { html },
  },
}: PageProps<PageData>): JSX.Element => {
  return (
    <>
      <PageMeta />
      <Content content={html} />
    </>
  );
};

export default IndexPage;
