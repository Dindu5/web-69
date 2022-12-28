import React from "react";
import Navigation from "@components/Navigation";
import "../styles/main.scss";

export default function AboutLayout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
}
