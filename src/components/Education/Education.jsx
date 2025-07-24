import React from 'react';
import styles from './Education.module.css';
import educationData from "../../data/education.json"
import { getImageURL } from '../../utils';

export default function Education() {
  return (
    <section id="education" className={styles.container}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.educationGridCompact}>
        {educationData.map((edu, index) => (
          <div key={index} className={styles.educationCardCompact}>
            <div className={styles.cardHeaderCompact}>
              <img 
                src={getImageURL(edu.imageSrc)} 
                alt={edu.institution} 
                className={styles.institutionLogoCompact} 
              />
              <div className={styles.headerContentCompact}>
                <h3 className={styles.degreeCompact}>{edu.degree}</h3>
                <h4 className={styles.institutionCompact}>{edu.institution}</h4>
                <p className={styles.locationCompact}>{edu.location}</p>
                <span className={styles.durationCompact}>{edu.duration}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
