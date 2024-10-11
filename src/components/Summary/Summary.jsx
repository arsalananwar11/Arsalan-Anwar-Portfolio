import React from 'react';
import styles from "./Summary.module.css";
import { getImageURL } from '../../utils';

export default function Summary() {
  return (
    <section className={styles.container} id="summary">
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <span className={styles.name}>Arsalan Anwar</span></h1>
        <h2 className={styles.headline}>Data Scientist | AI Product Developer | MS CS @NYU</h2>
        {/* <p className={styles.headline-img} >
          <p>
              <img src="https://readme-typing-svg.herokuapp.com?color=2A2A2A&duration=3000&pause=500&size=18&center=false&vCenter=true&lines=Data+Scientist+;AI/ML+Product+Developer+;MS+CS+at+New+York+University+;"/>
          </p>
        </p> */}
        <p className={styles.summary}>
          Bridging the gap between data and impactful solutions! 
        </p>
        <p className={styles.additional}>
          Actively pursuing Data Science/Software roles
        </p>
        <div className={styles.BtnsContainer}>
          <a className={styles.Btns} href='/Arsalan_Anwar_Resume.pdf' download>View My Resume</a>
          {/* <a className={styles.icon} href='mailto:arsalan.anwar.7777@gmail.com'><img src={getImageURL("contact/emailIcon.png")} alt="Email" hidden/></a> */}
        </div>
      </div>
      <img className={styles.summaryImg} src={getImageURL("summary/Arsalan_Anwar.png")} alt='Summary Image' />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}
