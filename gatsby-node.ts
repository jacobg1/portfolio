import { get } from "lodash";

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (get(node, "internal.type") === `MarkdownRemark`) {
    const parent = getNode(get(node, "parent"));

    createNodeField({
      node,
      name: "collection",
      value: get(parent, "sourceInstanceName"),
    });
  }
};
