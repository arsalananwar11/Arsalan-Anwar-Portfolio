import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import Carousel from "../../containers/Carousel/Carousel";

export default function Projects() {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <Carousel type="projects" data={projects} />
    </section>
  );
}
