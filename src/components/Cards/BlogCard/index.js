import React from "react";
import {
  blog_card,
  blog_card_small,
  blog_card_author,
  blog_card_image,
  blog_card_badge,
} from "./index.module.scss";
import { navigate } from "gatsby";

const BlogCard = ({ title, image, avatar, author, badge, small = false }) => {
  const slug = title.replaceAll(" ", "-").toLowerCase();
  return (
    <div className={`${blog_card} ${small ? blog_card_small : ""}`}>
      <div
        role="presentation"
        className={blog_card_image}
        onClick={() => navigate(`/blog/${slug}`)}
      >
        {image}
        {!small && <div className={blog_card_badge}>{badge}</div>}
      </div>

      <h4>{title}</h4>
      <div className={blog_card_author}>
        {avatar}
        <p>{author}</p>
      </div>
    </div>
  );
};

export default BlogCard;
