type BlogListNode = {
  id: string;
  fields: {
    slug: string;
  };
  frontmatter: {
    date: string;
    description: string;
    title: string;
    tags: string;
    skillLevel: string;
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

export type NextOrPreviousPost = {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
};

export interface NextAndPreviousPostProps {
  previousPost: NextOrPreviousPost | null;
  nextPost: NextOrPreviousPost | null;
}

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
      // tags: string;
      // skillLevel: string;
    };
  };
  next: NextOrPreviousPost | null;
  previous: NextOrPreviousPost | null;
}

export interface PostButtonProps {
  post: NextOrPreviousPost | null;
}
