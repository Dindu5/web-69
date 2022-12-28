import React, { useState } from "react";
import { sidebar, sidebar_links } from "./index.module.scss";
import Grid from "../Icons/Grid";
import Pallet from "../Icons/Pallet";
import Window from "../Icons/Window";
import Pen from "../Icons/Pen";
import Web from "../Icons/Web";

const SideBar = () => {
  const [activeTab, setActiveTab] = useState("All Posts");

  const tabs = [
    {
      name: "All Posts",
      icon: Grid,
    },
    {
      name: "Product Design",
      icon: Pallet,
    },
    {
      name: "Development",
      icon: Window,
    },
    {
      name: "Copy Writing",
      icon: Pen,
    },
    {
      name: "Web3",
      icon: Web,
    },
  ];
  return (
    <aside className={sidebar}>
      <h4>Categories</h4>
      <div className={sidebar_links}>
        {tabs.map((tab, i) => {
          let Component = tab.icon;
          return (
            <div
              role="presentation"
              key={i}
              active-tab={activeTab === tab.name ? "true" : "false"}
              onClick={() => setActiveTab(tab.name)}
            >
              <Component />
              <p>{tab.name}</p>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default SideBar;
