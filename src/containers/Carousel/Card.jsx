import React from "react";
import styles from "./Card.module.css";
import { getImageURL } from "../../utils";
import skills from "../../data/skills.json";

const defaultIcon = "skills/default.png"; // Path to your default icon

const skillIconMap = skills.reduce((map, skill) => {
  map[skill.title] = skill.imageSrc;
  return map;
}, {});

export default function Card({ data }) {
  return (
    <div className={styles.container}>
      {data.imageSrc?.toLowerCase().endsWith(".pdf") ? (
      <iframe
        src={getImageURL(data.imageSrc)}
        title={`PDF of ${data.title}`}
        className={styles.image}
        style={{ height: "200px", width: "100%", border: "none" }}
      />
    ) : (
      <img
        src={getImageURL(data.imageSrc)}
        alt={`Image of ${data.title}`}
        className={styles.image}
      />
    )}

      <h3 className={styles.title}>{data.title}</h3>
      <p className={styles.description}>{data.description}</p>
      <ul className={styles.skills}>
        {data.skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {/* <img src={getImageURL(skillIconMap[skill] || defaultIcon)} alt={skill} className={styles.skillIcon} /> */}
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        {data.demo && (
          <a href={data.demo} className={styles.link} target="_blank" rel="noopener noreferrer">
            Demo
          </a>
        )}
        {data.source && (
          <a href={data.source} className={styles.link} target="_blank" rel="noopener noreferrer">
            Source
          </a>
        )}
        {data.certificate_link && (
          <a href={data.certificate_link} className={styles.link} target="_blank" rel="noopener noreferrer">
            Certificate Link
          </a>
        )}
      </div>
    </div>
  );
}
