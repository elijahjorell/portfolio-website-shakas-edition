import React from "react";
import ProjectTile from "./ProjectTile";
import LetsEatAt from "./LetsEatAt.png";

const projects = [
  {
    title: "Let's Eat At",
    techStack: "React / Material UI / AWS / Google Maps API",
    webAppLink: "http://letseatat.com.s3-website.us-east-2.amazonaws.com/",
    repoLink: "lol",
    image: LetsEatAt,
    paragraphs: [
      "Thought I'd knock out two birds with one stone and try out AWS while tackling a problem I face regularly—the inability to decide where to eat 😂",
      "Inspired by single-purpose web apps like writeauserstory.com and keycode.info is “Let’s Eat At”, an ultra-simple web app that scans a specified location for places to get food, chooses one for you and displays a link that shows it on Google Maps in a new tab (or the app if you’re on your phone).",
      "Take it out for a spin by clicking the link below and see if anything that comes up tickles your fancy! 🤙"
    ]
  },
  {
    title: "Languario",
    techStack: "React / Bootstrap / Spring Java",
    webAppLink: "lol",
    repoLink: "lol",
    image: LetsEatAt,
    paragraphs: [
      "LOL"
    ]
  }
]

const Portfolio = () => {
  return (
    <div className="Portfolio">
      <h1>PROJECTS</h1>
      <h1>-</h1>
      <div className="portfolio-content">
        {
          projects.map((project) => {
            return (
                <ProjectTile
                    title={project.title}
                    techStack={project.techStack}
                    webAppLink={project.webAppLink}
                    repoLink={project.repoLink}
                    image={project.image}
                    paragraphs={project.paragraphs}
                />
            )
          })
        }
      </div>
    </div>
  );
};

export default Portfolio;
