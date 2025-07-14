import React, { useState } from 'react';
import styles from './Leadership.module.css';
import leadershipData from '../../data/leadership.json';
import { getImageURL } from '../../utils';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Leadership() {
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [flippedCards, setFlippedCards] = useState({});
  const [imageIndices, setImageIndices] = useState({});

  const groups = ['All', ...new Set(leadershipData.map(item => item.group))];

  const toggleCard = (index) => {
    setFlippedCards((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const changeImage = (index, direction, imagesLength) => {
    setImageIndices((prev) => {
      const current = prev[index] || 0;
      const newIndex = direction === 'left'
        ? (current - 1 + imagesLength) % imagesLength
        : (current + 1) % imagesLength;
      return { ...prev, [index]: newIndex };
    });
  };

  return (
    <section className={styles.container} id="leadership">
      <div className={styles.header}>
        <h2 className={styles.title}>Leadership & Extracurricular</h2>
        <p className={styles.subtitle}>Beyond technical skills - leadership, community impact, and personal growth</p>

        <div className={styles.dropdownContainer}>
          <select
            className={styles.dropdown}
            value={selectedGroup}
            onChange={(e) => setSelectedGroup(e.target.value)}
          >
            {groups.map((group, idx) => (
              <option key={idx} value={group}>{group}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.grid}>
        {leadershipData
          .filter(item => selectedGroup === 'All' || item.group === selectedGroup)
          .map((item, index) => {
            const currentImageIndex = imageIndices[index] || 0;
            const images = Array.isArray(item.image) ? item.image : [item.image];
            const isFlipped = flippedCards[index];

            return (
              <div
                key={index}
                className={`${styles.flipCard} ${isFlipped ? styles.flipped : ''}`}
              >
                <div className={styles.flipCardInner}>
                  {/* Front */}
                  <div className={styles.flipCardFront}>
                    <div className={styles.imageContainer}>
                      <img
                        src={getImageURL(images[currentImageIndex])}
                        alt={item.title}
                        className={styles.image}
                        onError={(e) => {
                          e.target.src = getImageURL('leadership/default.jpg');
                        }}
                      />
                      {images.length > 1 && (
                        <div className={styles.imageControls}>
                          <button
                            className={styles.arrowLeft}
                            onClick={(e) => {
                              e.stopPropagation();
                              changeImage(index, 'left', images.length);
                            }}
                          >
                            <ChevronLeft size={18} />
                          </button>
                          <button
                            className={styles.arrowRight}
                            onClick={(e) => {
                              e.stopPropagation();
                              changeImage(index, 'right', images.length);
                            }}
                          >
                            <ChevronRight size={18} />
                          </button>
                        </div>
                      )}
                      <div className={styles.overlay}>
                        <div className={styles.caption}>
                          <h3 className={styles.cardTitle}>{item.title}</h3>
                          <p className={styles.organization}>{item.organization}</p>
                          <span className={styles.period}>{item.period}</span>
                          <button
                            className={styles.learnMoreButton}
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleCard(index);
                            }}
                          >
                            Learn More
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back */}
                  <div className={styles.flipCardBack}>
                    <div className={styles.backContent}>
                      <button
                        className={styles.closeButton}
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleCard(index);
                        }}
                        aria-label="Close"
                      >
                        <X size={16} />
                      </button>
                      <div className={styles.backHeader}>
                        <h3 className={styles.backTitle}>{item.title}</h3>
                        <p className={styles.backOrganization}>{item.organization}</p>
                      </div>
                      <p className={styles.description}>{item.description}</p>
                      <div className={styles.skills}>
                        <h4 className={styles.skillsTitle}>Key Skills:</h4>
                        <div className={styles.skillsList}>
                          {item.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className={styles.skill}>{skill}</span>
                          ))}
                        </div>
                      </div>
                      <div className={styles.period}>{item.period}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
