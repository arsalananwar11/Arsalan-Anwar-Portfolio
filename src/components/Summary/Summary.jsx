import React from 'react';
import styles from "./Summary.module.css";
import { getImageURL } from '../../utils';

export default function Summary() {
  return (
    <section className={styles.container} id="summary">
      <div className={styles.content}>
        {/* <div className={styles.BtnsContainer}>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>🚀</span>
            Data Science & AI Innovation
          </div>
          <div className={styles.badge}>
            <span className={styles.badgeIcon}>🚀</span>
            Data Science & AI Innovation
          </div>
        </div> */}
        <div className={styles.quote}>
          <span className={styles.quoteIcon}>"</span>
          95% of Executives Say Data Drives Business Strategy — So I Build Solutions That Matter
          <span className={styles.quoteIcon}>"</span>
          {/* <div className={styles.quoteAuthor}>- W. Edwards Deming</div> */}
        </div>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.name}>Arsalan Anwar</span>
        </h1>
        <h2 className={styles.headline}>Data Scientist | AI Product Developer | MS CS @NYU</h2>
        <p className={styles.summary}>
          Transforming complex data into actionable insights and scalable AI solutions. 
          Experienced in building end-to-end ML pipelines, GenAI applications, and 
          data-driven products that deliver measurable business impact.
        </p>
        <div className={styles.stats}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>4+</span>
            <span className={styles.statLabel}>Years Experience</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>15+</span>
            <span className={styles.statLabel}>ML Projects</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>4</span>
            <span className={styles.statLabel}>Companies</span>
          </div>
        </div>
        <p className={styles.additional}>
          🎯 Currently seeking Data Science/AI Engineering opportunities
        </p>
        <div className={styles.BtnsContainer}>
          <a className={styles.primaryBtn} href='/Arsalan_Anwar_Resume.pdf' download>
            <span className={styles.btnIcon}>📄</span>
            Download Resume
          </a>
          <a className={styles.secondaryBtn} href='#contact'>
            <span className={styles.btnIcon}>💬</span>
            Let's Connect
          </a>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <img className={styles.summaryImg} src={getImageURL("summary/Arsalan_Anwar_Grad.jpg")} alt='Arsalan Anwar - Data Scientist' />
        <div className={styles.floatingElements}>
          <div className={styles.floatingElement} style={{top: '10%', left: '10%'}}>🤖</div>
          <div className={styles.floatingElement} style={{top: '20%', right: '15%'}}>📊</div>
          <div className={styles.floatingElement} style={{bottom: '30%', left: '5%'}}>🧠</div>
          <div className={styles.floatingElement} style={{bottom: '10%', right: '20%'}}>⚡</div>
        </div>
      </div>
      <div className={styles.backgroundPattern}></div>
    </section>
  );
}
