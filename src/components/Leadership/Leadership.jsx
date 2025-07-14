import React from 'react';
import styles from './Leadership.module.css';
import leadershipData from "../../data/leadership.json";
import { getImageURL } from '../../utils';

export default function Leadership() {
  return (
    <section className={styles.container} id="leadership">
      <div className={styles.header}>
        <h2 className={styles.title}>Leadership & Extracurricular</h2>
        <p className={styles.subtitle}>Beyond technical skills - leadership, community impact, and personal growth</p>
      </div>
      
      <div className={styles.grid}>
        {leadershipData.map((item, index) => (
          <div key={index} className={styles.flipCard}>
            <div className={styles.flipCardInner}>
              {/* Front of the card */}
              <div className={styles.flipCardFront}>
                <div className={styles.imageContainer}>
                  <img 
                    src={getImageURL(item.image)} 
                    alt={item.title}
                    className={styles.image}
                    onError={(e) => {
                      e.target.src = getImageURL('leadership/default.jpg');
                    }}
                  />
                  <div className={styles.overlay}>
                    <div className={styles.caption}>
                      <h3 className={styles.cardTitle}>{item.title}</h3>
                      <p className={styles.organization}>{item.organization}</p>
                      <span className={styles.period}>{item.period}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Back of the card */}
              <div className={styles.flipCardBack}>
                <div className={styles.backContent}>
                  <div className={styles.backHeader}>
                    <h3 className={styles.backTitle}>{item.title}</h3>
                    <p className={styles.backOrganization}>{item.organization}</p>
                  </div>
                  
                  <p className={styles.description}>{item.description}</p>
                  
                  <div className={styles.skills}>
                    <h4 className={styles.skillsTitle}>Key Skills:</h4>
                    <div className={styles.skillsList}>
                      {item.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className={styles.skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={styles.period}>{item.period}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
