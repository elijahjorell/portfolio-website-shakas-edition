import React from "react";
import Shakas from "./Shakas";

const DarkNavbar = () => {
  return (
    <div className="DarkNavbar">
      <div className="round-side round-side-up" />
      <div className="links-container">
        <Shakas/>
        <div className="nav-item">Projects</div>
        <div className="nav-item">Contact</div>
      </div>
      <div className="round-side round-side-down" />
    </div>
  );
};

export default DarkNavbar;
