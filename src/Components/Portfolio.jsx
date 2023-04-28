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
import image from "../images/image3.jpg";

const imageAltText = "desktop with books and laptop";

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
      "Worked with a team of 5 other interns on the Sanlam Savings Jar app. Established the native, cross-platform rendering of a 3D model on a mobile device using React Native and other platforms. Had the opportunity to practice interpersonal skills in the workplace and experience how an organised software development company operates.",
    url: "",
  },
  {
    title: "Toastmasters International Public Speaking Certificate",
    description:
      "Attended a Toastmaster’s workshop held at my school in which a certified Toastmasters member guided us through a thorough multiple week course. At the end of the course the participants each presented a speech to an audience and three judges. After which, I received a Toastmaster certificate. The experience taught me in-depth public speaking and communication skills.",
    url: "",
  },
  {
    title: "Ambassador Leaders: Harvard Leadership Program (Boston, USA)",
    description:
      "Attended this week-long event with a few other students from my school. Had the opportunity to network with many other international students. Students were split into groups and partook in various activities guided by a mentor to develop leadership skills. I developed a lot as a person after this event and went home as a more confident person.",
    url: "",
  },
  {
    title: "UCT Developer’s Society Member",
    description:
      "Attended the society’s events to network with similar minded peers in the computer science field and learn from the educational content of the events.",
    url: "",
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
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideIn",
            }}
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
