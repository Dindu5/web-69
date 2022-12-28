import React from "react";
import Navigation from "@components/Navigation";
import "../styles/main.scss";
import SideBar from "../components/SideBar";

export default function BlogLayout({ children }) {
  return (
    <main>
      <Navigation />
      <div className="blog-layout">
        <SideBar />
        {children}
      </div>
    </main>
  );
}
