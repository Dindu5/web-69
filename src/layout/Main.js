import React from "react";
import Navigation from "@components/Navigation";
import "../styles/main.scss";
import Footer from "@components/Footer";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
