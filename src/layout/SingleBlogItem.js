import React from "react";
import Navigation from "@components/Navigation";
import "../styles/main.scss";

export default function SingleBlogItem({ children }) {
  return (
    <main>
      <Navigation />
      <div className="blog-single-layout">{children}</div>
    </main>
  );
}
