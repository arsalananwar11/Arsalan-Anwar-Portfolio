import React from "react"
import styles from "./Contact.module.css"
import { getImageURL } from "../../utils"

export default function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.linksRow}>
        <li className={styles.linkRow}>
          <a href="mailto:arsalan.anwar.7777@gmail.com" className={styles.linkIconBtn}>
            <img src={getImageURL("contact/emailIcon.png")} alt="Email icon" className={styles.iconRow} />
            <span className={styles.linkText}>arsalan.anwar.7777@gmail.com</span>
          </a>
        </li>
        <li className={styles.linkRow}>
          <a href="https://www.linkedin.com/in/arsalan-anwar-ai" className={styles.linkIconBtn} target="_blank" rel="noopener noreferrer">
            <img src={getImageURL("contact/linkedinIcon.png")} alt="LinkedIn icon" className={styles.iconRow} />
            <span className={styles.linkText}>linkedin.com/in/arsalan-anwar-ai</span>
          </a>
        </li>
        <li className={styles.linkRow}>
          <a href="https://github.com/arsalananwar11" className={styles.linkIconBtn} target="_blank" rel="noopener noreferrer">
            <img src={getImageURL("contact/githubIcon.png")} alt="Github icon" className={styles.iconRow} />
            <span className={styles.linkText}>github.com/arsalananwar11</span>
          </a>
        </li>
      </ul>
    </footer>
  )
}
