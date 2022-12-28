import React from "react";
import BlogCard from "@components/Cards/BlogCard";
import { StaticImage } from "gatsby-plugin-image";
import {
  blog_container,
  blog_container_grid,
  blog_container_title,
} from "./index.module.scss";

const BlogContainer = () => {
  const blogArticles = [
    {
      title:
        "How to Measure the Impact of a Corporate Employee Wellness Program?",
      author: "Romita Ghatak",
      badge: "People first",
      image: (
        <StaticImage
          src="../../../assets/images/blog/blog1.png"
          placeholder="blurred"
          alt="Blog"
        />
      ),
      avatar: (
        <StaticImage
          src="../../../assets/images/user-one.png"
          placeholder="blurred"
          alt="Blog"
        />
      ),
    },
    {
      title:
        "Signs Of Social Media Burnout And How To Deal With Them – Proven Tips From A Fellow Marketer",
      author: "Sakshi Maheshwari",
      badge: "People first",
      image: (
        <StaticImage
          src="../../../assets/images/blog/blog2.png"
          placeholder="blurred"
          alt="Blog2"
        />
      ),
      avatar: (
        <StaticImage
          src="../../../assets/images/user-one.png"
          placeholder="blurred"
          alt="Blog2 - avatar"
        />
      ),
    },
    {
      title:
        "How to Measure the Impact of a Corporate Employee Wellness Program?",
      author: "Romita Ghatak",
      badge: "People first",
      image: (
        <StaticImage
          src="../../../assets/images/blog/blog3.png"
          placeholder="blurred"
          alt="Blog"
        />
      ),
      avatar: (
        <StaticImage
          src="../../../assets/images/user-one.png"
          placeholder="blurred"
          alt="Blog"
        />
      ),
    },
    {
      title:
        "Signs Of Social Media Burnout And How To Deal With Them – Proven Tips From A Fellow Marketer",
      author: "Sakshi Maheshwari",
      badge: "People first",
      image: (
        <StaticImage
          src="../../../assets/images/blog/blog2.png"
          placeholder="blurred"
          alt="Blog"
        />
      ),
      avatar: (
        <StaticImage
          src="../../../assets/images/user-one.png"
          placeholder="blurred"
          alt="Blog"
        />
      ),
    },
    {
      title:
        "How to Measure the Impact of a Corporate Employee Wellness Program?",
      author: "Romita Ghatak",
      badge: "People first",
      image: (
        <StaticImage
          src="../../../assets/images/blog/blog1.png"
          placeholder="blurred"
          alt="Blog"
        />
      ),
      avatar: (
        <StaticImage
          src="../../../assets/images/user-one.png"
          placeholder="blurred"
          alt="Blog"
        />
      ),
    },
    {
      title:
        "Signs Of Social Media Burnout And How To Deal With Them – Proven Tips From A Fellow Marketer",
      author: "Sakshi Maheshwari",
      badge: "People first",
      image: (
        <StaticImage
          src="../../../assets/images/blog/blog2.png"
          placeholder="blurred"
          alt="Blog"
        />
      ),
      avatar: (
        <StaticImage
          src="../../../assets/images/user-one.png"
          placeholder="blurred"
          alt="Blog"
        />
      ),
    },
    {
      title:
        "How to Measure the Impact of a Corporate Employee Wellness Program?",
      author: "Romita Ghatak",
      badge: "People first",
      image: (
        <StaticImage
          src="../../../assets/images/blog/blog3.png"
          placeholder="blurred"
          alt="Blog"
        />
      ),
      avatar: (
        <StaticImage
          src="../../../assets/images/user-one.png"
          placeholder="blurred"
          alt="Blog"
        />
      ),
    },
    {
      title:
        "Signs Of Social Media Burnout And How To Deal With Them – Proven Tips From A Fellow Marketer",
      author: "Sakshi Maheshwari",
      badge: "People first",
      image: (
        <StaticImage
          src="../../../assets/images/blog/blog2.png"
          placeholder="blurred"
          alt="Blog"
        />
      ),
      avatar: (
        <StaticImage
          src="../../../assets/images/user-one.png"
          placeholder="blurred"
          alt="Blog"
        />
      ),
    },
  ];
  return (
    <div className={blog_container}>
      <div className={blog_container_title}>
        <StaticImage
          src="../../../assets/images/icon-flames.svg"
          placeholder="blurred"
          alt="Blog"
        />
        <h5>Trending</h5>
      </div>
      <div className={blog_container_grid}>
        {blogArticles.map((article, i) => {
          return (
            <BlogCard
              key={i}
              title={article.title}
              image={article.image}
              author={article.author}
              avatar={article.avatar}
              badge={article.badge}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BlogContainer;
