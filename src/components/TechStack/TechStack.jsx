import React, { useEffect, useRef } from 'react';
import { getImageURL } from '../../utils';
import skills from "../../data/skills.json";
import styles from "./TechStack.module.css";

export default function TechStack() {

  const movingCardsRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(()=>{
      if (movingCardsRef.current){
        movingCardsRef.current.scrollLeft += 1;
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const categorizedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  

  return (
    <section className={styles.container} id='techstack'>
      <h2 className={styles.title}>My Tech Stack</h2>
      <div className={styles.carousel} ref={movingCardsRef}>
        {Object.keys(categorizedSkills).map((category, index) => (
          <div key={index} className={styles.category}>
            {/* <h3 className={styles.categoryTitle}>{category}</h3> */}
            <ul className={styles.aboutItems}>
              {categorizedSkills[category].map((skill, skillIndex) => (
                <li key={skillIndex} className={styles.aboutItem}>
                  <div className={styles.card}>
                    <img src={getImageURL(skill.imageSrc)} alt={skill.title} className={styles.aboutIcon} />
                    <div className={styles.cardContent}>
                      <h3><strong>{skill.title}</strong></h3>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
