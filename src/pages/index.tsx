import * as React from "react";
import { PageMeta } from "../components/page-meta";
import { Page } from "../components/page";
import { graphql, PageProps } from "gatsby";
import { Content } from "../components/content";

type PageData = {
  markdownRemark: {
    html: string;
  };
};

export const pageQuery = graphql`
  query HomePage {
    markdownRemark(frontmatter: { page: { eq: "homepage" } }) {
      html
    }
  }
`;

const IndexPage: React.FC<PageProps<PageData>> = ({
  data: {
    markdownRemark: { html },
  },
}) => {
  return (
    <Page>
      <PageMeta />
      <Content content={html} />
    </Page>
  );
};

export default IndexPage;
