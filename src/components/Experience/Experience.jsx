import React from 'react'
import { getImageURL } from '../../utils'
import history from "../../data/history.json"
import styles from "./Experience.module.css"

export default function Experience() {
  return (
    <section id='experience' className={styles.container}>
        <div className={styles.header}>
            <h2 className={styles.title}>Professional Experience</h2>
            <p className={styles.subtitle}>Building innovative solutions across industry-leading organizations</p>
        </div>
        <div className={styles.experienceGrid}>
            {history.map((historyItem, id) => (
                <div key={id} className={styles.experienceCard}>
                    <div className={styles.cardHeader}>
                        <div className={styles.companyInfo}>
                            <img src={getImageURL(historyItem.imageSrc)} alt={historyItem.organization} className={styles.companyLogo} />
                            <div className={styles.headerContent}>
                                <h3 className={styles.role}>{historyItem.role}</h3>
                                <h4 className={styles.organization}>{historyItem.organization}</h4>
                                <div className={styles.duration}>
                                    <span className={styles.dates}>{`${historyItem.startDate} - ${historyItem.endDate}`}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardBody}>
                        <ul className={styles.experienceList}>
                            {historyItem.experiences.map((experience, expId) => (
                                <li key={expId} className={styles.experienceItem}>
                                    <span className={styles.bullet}>🔹</span>
                                    <span className={styles.experienceText}>{experience}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}
