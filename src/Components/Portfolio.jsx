/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/Portfolio.jpg";

const imageAltText = "Desk with three dairies, tablet and coffee mug.";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Elevate Your Skills with These Python Projects!",
    description:
      "Enhance your Python skills with diverse projects. Elevate your coding expertise through hands-on challenges.",
    url: "https://github.com/SyedSalman007/python_projects.git",
  },
  {
    title: "Simon Game",
    description:
      "Embark on a thrilling challenge of memory prowess with this engaging Simon game! Test and enhance your memory power as you tackle the exciting tasks within. Are you ready to take on the ultimate challenge of recalling patterns and sequences?",
    url: "https://syedsalman007.github.io/Simon_Game/",
  },
  {
    title: "Master SQL by solving leetcode code interview questions.",
    description:
      "Elevate your understanding of SQL concepts by delving into interactive LeetCode SQL question-solving videos. Immerse yourself in a dynamic learning experience as you unravel the intricacies of SQL challenges. Sharpen your SQL skills and boost your problem-solving capabilities with these engaging tutorials.",
    url: "https://youtube.com/playlist?list=PLQkFg_umR4aNDs6-xykgGJMDlGSLeMC-Q&si=6sy0sP2-Q7Fpvgze",
  },
  {
    title: "Elevate Your TypeScript Skills with These Innovative TypeScript Projects for Advanced Programming",
    description:
      "Elevate your TypeScript programming skills by immersing yourself in these advanced TypeScript projects. These hands-on endeavors will not only deepen your understanding of TypeScript but also empower you to tackle more complex programming tasks. Ready to enhance your coding expertise?",
    url: "https://github.com/SyedSalman007/typescript-all-project-Q1.git",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
