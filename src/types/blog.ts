type BlogListNode = {
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    description: string;
    title: string;
  };
};

export interface BlogsListProps<Node = BlogListNode> {
  allMarkdownRemark: {
    nodes: Node[];
  };
}

type BlogResposeNode = {
  id: string;
  fields: {
    slug: string;
  };
};

export interface BlogPostsResponse {
  errors?: Error[];
  data?: BlogsListProps<BlogResposeNode>;
}

type NextOrPreviousPost = {
  frontmatter: {
    title: string;
  };
};

export interface SingleBlogProps {
  post: {
    html: string;
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
      date: string;
      description: string;
    };
  };
  next: NextOrPreviousPost | null;
  previous: NextOrPreviousPost | null;
}
