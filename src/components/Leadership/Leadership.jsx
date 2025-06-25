import React from 'react';
import styles from './Leadership.module.css';
import { getImageURL } from '../../utils';

const leadershipData = [
  {
    title: "Data Science Club President",
    organization: "New York University",
    period: "2023 - 2024",
    image: "leadership/data-science-club.jpg",
    caption: "Leading data science initiatives at NYU",
    description: "Led a team of 50+ students in organizing workshops, hackathons, and industry networking events. Increased club membership by 40% and established partnerships with 5 tech companies for student internships.",
    skills: ["Leadership", "Event Management", "Public Speaking", "Team Building"]
  },
  {
    title: "Machine Learning Research Assistant",
    organization: "NYU AI Lab",
    period: "2023 - Present",
    image: "leadership/research-assistant.jpg",
    caption: "Contributing to cutting-edge AI research",
    description: "Collaborated with PhD students and faculty on deep learning projects. Published 2 research papers and presented findings at 3 international conferences. Mentored 8 undergraduate students.",
    skills: ["Research", "Academic Writing", "Mentoring", "Deep Learning"]
  },
  {
    title: "Tech Volunteer",
    organization: "Code for Social Good",
    period: "2022 - Present",
    image: "leadership/volunteer.jpg",
    caption: "Using technology to make a positive impact",
    description: "Developed data analytics solutions for 3 non-profit organizations, helping them optimize their operations and increase efficiency by 25%. Led a team of 6 volunteers on pro-bono projects.",
    skills: ["Social Impact", "Analytics", "Project Management", "Community Service"]
  },
  {
    title: "Hackathon Winner",
    organization: "NYU HackDays",
    period: "2023",
    image: "leadership/hackathon.jpg",
    caption: "1st Place - Best AI Solution",
    description: "Won first place among 200+ participants for developing an AI-powered sustainability tracker. The solution helps users reduce their carbon footprint using computer vision and behavioral analytics.",
    skills: ["Innovation", "Problem Solving", "AI Development", "Sustainability"]
  },
  {
    title: "Guest Speaker",
    organization: "Various Universities",
    period: "2023 - Present",
    image: "leadership/speaker.jpg",
    caption: "Sharing knowledge and inspiring others",
    description: "Delivered talks on 'AI Ethics in Data Science' and 'Career Transitions into Tech' at 5 universities. Reached an audience of 500+ students and professionals, inspiring the next generation of data scientists.",
    skills: ["Public Speaking", "AI Ethics", "Career Guidance", "Knowledge Sharing"]
  },
  {
    title: "Open Source Contributor",
    organization: "GitHub Community",
    period: "2022 - Present",
    image: "leadership/opensource.jpg",
    caption: "Contributing to the global developer community",
    description: "Active contributor to 10+ open source projects with 500+ commits. Maintained a machine learning library with 1000+ GitHub stars. Helped resolve 100+ community issues and bugs.",
    skills: ["Open Source", "Collaboration", "Code Review", "Community Building"]
  }
];

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
