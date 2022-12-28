import * as React from "react";
import SingleArticle from "../../views/blog/SingleArticle";
import SingleBlogItem from "../../layout/SingleBlogItem";

const BlogPage = () => {
  return (
    <SingleBlogItem>
      <SingleArticle />
    </SingleBlogItem>
  );
};

export default BlogPage;

export const Head = () => <title>Blog Page - Web 69</title>;
