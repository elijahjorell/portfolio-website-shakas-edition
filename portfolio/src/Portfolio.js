import React from "react";
import ProjectTile from "./ProjectTile";
import LetsEatAt from "./LetsEatAt.png";
import Languario4 from "./images/Languario4cropped.png";
import Portfolio1 from "./images/Portfolio1.png";
import QMSEditor from "./images/QMSEditor.png";
import WordAutomation1 from "./images/WordAutomation1.png"

const projects = [
  {
    title: "Portfolio",
    techStack: "React / Bootstrap / AWS",
    image: Portfolio1,
    paragraphs: [
      "Figured it'd be best to have my own space to showcase my works and show a little (a lot) of personality, so here we are 😎",
      "Pending features: Functioning side navbar, Socials links at footer, Mobile-friendly UI, animations, carousel for more images"
    ]
  },
  {
    title: "Let's Eat At",
    techStack: "React / Material UI / AWS / Google Maps API",
    demoLink: "http://letseatat.com.s3-website.us-east-2.amazonaws.com/",
    repoLink: "https://github.com/elijahjorell/random-food-picker",
    image: LetsEatAt,
    paragraphs: [
      "Thought I'd knock out two birds with one stone and try out AWS while tackling a problem I face regularly—the inability to decide where to eat 😂",
      "Inspired by single-purpose web apps like writeauserstory.com and keycode.info is “Let’s Eat At”, an ultra-simple web app that scans a specified location for places to get food, chooses one for you and displays a link that shows it on Google Maps in a new tab (or the app if you’re on your phone).",
      "Take it out for a spin by clicking the link below and see if anything that comes up tickles your fancy! 🤙"
    ]
  },
  {
    title: "Quiz Management System",
    techStack: "React / Bootstrap / Spring Java / MySQL / Docker",
    image: QMSEditor,
    paragraphs: [
      "A platform for trainees to practise quizzes on software development topics, author their own quizzes and questions and get their attempts marked by a trainer."
    ]
  },
  {
    title: "Languario",
    techStack: "React / TypeScript / Bootstrap / Spring Java / MySQL / Docker",
    image: Languario4,
    paragraphs: [
      "Languario is a language-training platform where users are able to practise answering questions authored by native speakers of the users learning language, get their answers marked and in turn, author questions and mark other users answers too."
    ]
  },
  {
    title: "ID Card Automation with Word",
    techStack: "Microsoft Word / Microsoft Excel / VBA",
    image: WordAutomation1,
    paragraphs: [
      "A proof of concept project that explores graphical automation using Microsoft Word and Excel utilising VBA. The end result was an ID card getting generated every 1.5 seconds. Not the most practical choice of technology however it was interesting testing the limits of the Microsoft Office ecosystem."
    ],
    demoLink: "https://www.linkedin.com/feed/update/urn:li:activity:6672739720784687104/"
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
                    webAppLink={project.demoLink}
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
