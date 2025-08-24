import React, { useState, useMemo } from "react";
import { HiDocumentText, HiPlay } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { getImageURL } from "../../utils";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("GenAI/AI Agents");
  
  // Extract all unique categories from projects
  const allCategories = useMemo(() => {
    const categories = ["All"];
    projects.forEach(project => {
      project.category.forEach(cat => {
        if (!categories.includes(cat)) {
          categories.push(cat);
        }
      });
    });
    return categories;
  }, []);

  // Filter projects based on selected category
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") return projects;
    const filtered = projects.filter(project => 
      project.category.includes(selectedCategory)
    );
    // If no projects found in selected category, show all projects
    return filtered.length > 0 ? filtered : projects;
  }, [selectedCategory]);

  return (
    <section className={styles.container} id="projects">
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Projects</h2>
        <p className={styles.subtitle}>
          A showcase of my work in AI/ML, Data Science, and Software Engineering
        </p>
      </div>

      {/* Category Filters */}
      <div className={styles.filters}>
        {allCategories.map(category => (
          <button
            key={category}
            className={`${styles.filterBtn} ${
              selectedCategory === category ? styles.filterBtnActive : ""
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className={styles.projectsGrid}>
        {filteredProjects.map((project, index) => (
          <div key={index} className={styles.projectCard}>
            <div className={styles.projectImage}>
              <img 
                src={getImageURL(project.imageSrc)} 
                alt={project.title}
                loading="lazy"
              />
              <div className={styles.projectOverlay}>
                <div className={styles.projectLinks}>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      title="Live Demo"
                    >
                      <HiPlay />
                    </a>
                  )}
                  {project.source && (
                    <a
                      href={project.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      title="Source Code"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.report && (
                    <a
                      href={project.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                      title="Report/Documentation"
                    >
                      <HiDocumentText />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.projectContent}>
                              <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>

                <div className={styles.projectSkills}>
                {project.skills.slice(0, 4).map((skill, skillIndex) => (
                  <span key={skillIndex} className={styles.projectSkill}>
                    {skill}
                  </span>
                ))}
                {project.skills.length > 4 && (
                  <span className={styles.projectSkillMore}>
                    +{project.skills.length - 4} more
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className={styles.noProjects}>
          <p>No projects found in this category.</p>
        </div>
      )}
    </section>
  );
}
