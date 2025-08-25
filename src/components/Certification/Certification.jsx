
import React, { useState, useRef } from "react";
import { HiExternalLink, HiAcademicCap, HiCalendar, HiStar } from "react-icons/hi";
import styles from "./Certification.module.css";
import certificates from "../../data/certificates.json";
import { getImageURL } from "../../utils";

export default function Certification() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const scrollContainerRef = useRef(null);

  // Extract all unique skills from certificates for filtering
  const allSkills = React.useMemo(() => {
    const skills = ["All"];
    certificates.forEach(cert => {
      cert.skills.forEach(skill => {
        if (!skills.includes(skill)) {
          skills.push(skill);
        }
      });
    });
    return skills;
  }, []);

  // Filter certificates based on selected skill
  const filteredCertificates = React.useMemo(() => {
    if (selectedCategory === "All") return certificates;
    return certificates.filter(cert => 
      cert.skills.includes(selectedCategory)
    );
  }, [selectedCategory]);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className={styles.container} id="certification">
      <div className={styles.header}>
        <h2 className={styles.title}>Certifications & Achievements</h2>
        <p className={styles.subtitle}>
          Professional credentials and continuous learning milestones
        </p>
      </div>

      {/* Skill Filters */}
      <div className={styles.filters}>
        {allSkills.map(skill => (
          <button
            key={skill}
            className={`${styles.filterBtn} ${
              selectedCategory === skill ? styles.filterBtnActive : ""
            }`}
            onClick={() => setSelectedCategory(skill)}
          >
            {skill}
          </button>
        ))}
      </div>

      {/* Scroll Navigation */}
      <div className={styles.scrollNavigation}>
        <button 
          className={styles.scrollBtn} 
          onClick={scrollLeft}
          aria-label="Scroll left"
        >
          <svg className={styles.scrollIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <div className={styles.certificateCount}>
          <HiAcademicCap className={styles.countIcon} />
          <span>{filteredCertificates.length} Certificates</span>
        </div>
        
        <button 
          className={styles.scrollBtn} 
          onClick={scrollRight}
          aria-label="Scroll right"
        >
          <svg className={styles.scrollIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Certificates Horizontal Scroll */}
      <div className={styles.scrollContainer} ref={scrollContainerRef}>
        <div className={styles.certificatesRow}>
          {filteredCertificates.map((cert, index) => (
            <div key={index} className={styles.certificateCard}>
              <div className={styles.certificateImage}>
                <img 
                  src={cert.imageSrc.startsWith('http') ? cert.imageSrc : getImageURL(cert.imageSrc)} 
                  alt={cert.title}
                  loading="lazy"
                />
                <div className={styles.certificateOverlay}>
                  <a
                    href={cert.certificate_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certificateLink}
                    title="View Certificate"
                  >
                    <HiExternalLink />
                  </a>
                </div>
              </div>

              <div className={styles.certificateContent}>
                <h3 className={styles.certificateTitle}>{cert.title}</h3>
                <p className={styles.certificateDescription}>{cert.description}</p>
                
                <div className={styles.certificateSkills}>
                  {cert.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className={styles.certificateSkill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {filteredCertificates.length === 0 && (
        <div className={styles.noCertificates}>
          <HiStar className={styles.noCertIcon} />
          <p>No certificates found in this category.</p>
        </div>
      )}
    </section>
  );
}
