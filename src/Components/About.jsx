/**
 * About component
 */

import React from "react";

/**
 * About background image
 */
import image from "../images/image2.jpg";

const imageAltText = "white abstract background with tree branch";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a 3rd year Computer Science & Business Computing student studying at the University of Cape Town. My skills include:";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Creativity and innovation",
  "Adaptability and flexibility ",
  "Resilience and grit",
  "Critical thinking and problem solving",
  "Attention to detail and accuracy",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I enjoy experimenting with the endless tools provided to developers, by developers.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
