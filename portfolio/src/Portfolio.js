import React from "react";
import ProjectTile from "./ProjectTile";

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <h1>PROJECTS</h1>
      <h1>-</h1>
      <div className="portfolio-content">
        <ProjectTile onClick={()=>console.log("lol")}/>
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
        <ProjectTile />
      </div>
    </div>
  );
};

export default Portfolio;
