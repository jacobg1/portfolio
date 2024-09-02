import path from "path";
import { GatsbyNode } from "gatsby";
import { get } from "lodash";
import { createFilePath } from "gatsby-source-filesystem";
import { BlogPostsResponse } from "./src/types";

export const onCreateNode: GatsbyNode["onCreateNode"] = ({
  node,
  actions,
  getNode,
}) => {
  const { createNodeField } = actions;

  if (get(node, "internal.type") === "MarkdownRemark") {
    const parent = getNode(get(node, "parent") || "");

    createNodeField({
      node,
      name: "collection",
      value: get(parent, "sourceInstanceName"),
    });

    const slug = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value: `/blog${slug}`,
    });
  }
};

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const blogPosts: BlogPostsResponse = await graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { collection: { eq: "blog-posts" } } }
        sort: { frontmatter: { date: DESC } }
      ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `);

  if (blogPosts.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      blogPosts.errors
    );
    return;
  }

  const posts = get(blogPosts, "data.allMarkdownRemark.nodes");

  if (!posts?.length) {
    return;
  }

  posts.forEach((post, idx) => {
    createPage({
      path: post.fields.slug,
      component: path.resolve("./src/templates/single-blog.tsx"),
      context: {
        id: post.id,
        previousPostId: posts[idx - 1]?.id ?? null,
        nextPostId: posts[idx + 1]?.id ?? null,
      },
    });
  });
};
