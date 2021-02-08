import React from "react";
import Shakas from "./Shakas";

const SideNavbar = () => {
  return (
    <div className="SideNavbar">
      <div className="links-container">
        <div className="nav-item">
          <Shakas/>
        </div>
        <div className="nav-item">Projects</div>
        <div className="nav-item">Contact</div>
      </div>
    </div>
  );
};

export default SideNavbar;
