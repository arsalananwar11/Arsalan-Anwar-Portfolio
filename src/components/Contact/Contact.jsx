import React, { useState } from "react"
import styles from "./Contact.module.css"
import { getImageURL } from "../../utils"

export default function Contact() {
  const [activeHover, setActiveHover] = useState(null)

  const contactMethods = [
    {
      id: "email",
      icon: "contact/emailIcon.png",
      label: "Email",
      value: "arsalan.anwar.7777@gmail.com",
      href: "mailto:arsalan.anwar.7777@gmail.com",
      color: "#EA4335"
    },
    {
      id: "linkedin",
      icon: "contact/linkedinIcon.png",
      label: "LinkedIn",
      value: "linkedin.com/in/arsalan-anwar-ai",
      href: "https://www.linkedin.com/in/arsalan-anwar-ai",
      color: "#0077B5"
    },
    {
      id: "github",
      icon: "contact/githubIcon.png",
      label: "GitHub",
      value: "github.com/arsalananwar11",
      href: "https://github.com/arsalananwar11",
      color: "#333333"
    },
    {
      id: "leetcode",
      icon: "contact/leetcodeIcon.png",
      label: "LeetCode",
      value: "leetcode.com/arsalananwar11",
      href: "https://leetcode.com/arsalananwar11",
      color: "#FFA116"
    }
  ]

  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>Let's Connect</h2>
          <p className={styles.subtitle}>
            Ready to discuss opportunities in Data Science & AI
          </p>
        </div>

        <div className={styles.contactGrid}>
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className={`${styles.contactCard} ${activeHover === method.id ? styles.active : ''}`}
              onMouseEnter={() => setActiveHover(method.id)}
              onMouseLeave={() => setActiveHover(null)}
            >
              <div className={styles.cardIcon}>
                <img 
                  src={getImageURL(method.icon)} 
                  alt={`${method.label} icon`} 
                  className={styles.icon} 
                />
              </div>
              <div className={styles.cardContent}>
                <h4 className={styles.methodLabel}>{method.label}</h4>
                <a 
                  href={method.href} 
                  className={styles.contactLink}
                  target={method.id !== 'email' ? "_blank" : undefined}
                  rel={method.id !== 'email' ? "noopener noreferrer" : undefined}
                >
                  {method.value}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <a 
            href="mailto:arsalan.anwar.7777@gmail.com" 
            className={styles.ctaButton}
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </footer>
  )
}
