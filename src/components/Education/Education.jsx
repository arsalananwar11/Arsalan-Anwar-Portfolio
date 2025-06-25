import React from 'react';
import styles from './Education.module.css';
import educationData from "../../data/education.json"
import { getImageURL } from '../../utils';

export default function Education() {
  return (
    <section id="education" className={styles.container}>
      <h2 className={styles.title}>Education</h2>
      <div className={styles.educationGrid}>
        {educationData.map((edu, index) => (
          <div key={index} className={styles.educationCard}>
            <div className={styles.cardHeader}>
              <img 
                src={getImageURL(edu.imageSrc)} 
                alt={edu.institution} 
                className={styles.institutionLogo} 
              />
              <div className={styles.headerContent}>
                <h3 className={styles.degree}>{edu.degree}</h3>
                <h4 className={styles.institution}>{edu.institution}</h4>
                <p className={styles.location}>{edu.location}</p>
              </div>
            </div>
            
            <div className={styles.cardBody}>
              <div className={styles.duration}>
                <span className={styles.durationText}>{edu.duration}</span>
                <span className={styles.gpa}>GPA: {edu.gpa}</span>
              </div>
              
              <p className={styles.description}>{edu.description}</p>
              
              <div className={styles.coursework}>
                <h5 className={styles.courseworkTitle}>Relevant Coursework:</h5>
                <div className={styles.courseworkList}>
                  {edu.relevantCoursework.map((course, courseIndex) => (
                    <span key={courseIndex} className={styles.course}>
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
