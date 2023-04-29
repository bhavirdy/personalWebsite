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
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Full Stack (Pty) Ltd Software Engineering Intern",
    description:
      "Collaborated with a team of 5 interns to assist with developing the Sanlam Savings Jar app, implementing cross-platform rendering of a 3D model on mobile devices using React Native and other platforms. Gained exposure to an organized software development environment, utilizing tools such as Azure DevOps, while developing interpersonal skills in the workplace.",
    url: "",
  },
  {
    title: "Toastmasters International Public Speaking Certificate",
    description:
      "Completed a comprehensive multiple-week course on public speaking and communication skills, culminating in a speech presented to an audience and judges and receiving a Toastmasters certificate.",
    url: "",
  },
  {
    title: "Ambassador Leaders: Harvard Leadership Program (Boston, USA)",
    description:
      "Participated in a week-long event with international students, developing leadership skills through group activities guided by a mentor. Gained confidence and personal growth through the experience.",
    url: "",
  },
  {
    title: "UCT Developer’s Society Member",
    description:
      "Active member of the society, attending events and networking with like-minded peers in the computer science field to stay up-to-date with the latest trends and technologies.",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}></div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
