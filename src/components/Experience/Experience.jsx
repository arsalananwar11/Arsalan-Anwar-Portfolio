import React from 'react'
import { getImageURL } from '../../utils'
import history from "../../data/history.json"
import styles from "./Experience.module.css"

export default function Experience() {
  return (
    <section id='experience' className={styles.container}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.content}>
            <ul className={styles.history}>
                {history.map((historyItem, id) => (
                    <li key={id} className={styles.historyItem}>
                        <div className={styles.card}>
                            <div className={styles.historyItemDetails}>
                                <div className={styles.header}>
                                    <img src={getImageURL(historyItem.imageSrc)} alt={historyItem.organization} className={styles.organizationImage} />
                                    <div>
                                        <h3 className={styles.role}>{historyItem.role}</h3>
                                        <h4 className={styles.organization}>{historyItem.organization}</h4>
                                    </div>
                                </div>
                                <p className={styles.dates}>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                                <ul className={styles.experienceList}>
                                    {historyItem.experiences.map((experience, expId) => (
                                        <li key={expId}>{experience}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    </section>
  )
}
