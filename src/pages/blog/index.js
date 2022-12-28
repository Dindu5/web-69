import * as React from "react";
import BlogLayout from "../../layout/BlogIndex";
import BlogContainer from "../../views/blog/BlogContainer";

const BlogPage = () => {
  return (
    <BlogLayout>
      <BlogContainer />
    </BlogLayout>
  );
};

export default BlogPage;

export const Head = () => <title>Blog Page - Web 69</title>;
