import React, { useState, useMemo } from 'react';
import { HiChevronRight, HiChevronLeft, HiCheck } from 'react-icons/hi';
import { getImageURL } from '../../utils';
import history from "../../data/experience.json";
import styles from "./Experience.module.css";

export default function Experience() {
  const [selectedCompany, setSelectedCompany] = useState(0);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  // Debug logging
  console.log('Experience component rendering, history:', history);

  // Group experiences by company
  const companiesData = useMemo(() => {
    const companies = {};
    
    history.forEach(exp => {
      if (!companies[exp.organization]) {
        companies[exp.organization] = {
          name: exp.organization,
          imageSrc: exp.imageSrc,
          roles: []
        };
      }
      
      companies[exp.organization].roles.push({
        role: exp.role,
        startDate: exp.startDate,
        endDate: exp.endDate,
        experiences: exp.experiences
      });
    });
    
    return Object.values(companies);
  }, [history]);

  const getDuration = (startDate, endDate) => {
    if (endDate === 'Present') return 'Present';
    
    // Parse dates more accurately
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    // Check if dates are valid
    if (isNaN(start.getTime()) || isNaN(end.getTime())) {
      return 'Duration unavailable';
    }
    
    const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
    
    if (months < 12) {
      return `${months} month${months > 1 ? 's' : ''}`;
    }
    
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    
    if (remainingMonths === 0) {
      return `${years} year${years > 1 ? 's' : ''}`;
    }
    
    return `${years} year${years > 1 ? 's' : ''} ${remainingMonths} month${remainingMonths > 1 ? 's' : ''}`;
  };

  const getTotalCompanyDuration = (roles) => {
    if (roles.length === 0) return 'Duration unavailable';
    
    // Find earliest start and latest end dates
    let earliestStart = new Date(roles[0].startDate);
    let latestEnd = roles[0].endDate === 'Present' ? new Date() : new Date(roles[0].endDate);
    
    roles.forEach(role => {
      const start = new Date(role.startDate);
      if (start < earliestStart) {
        earliestStart = start;
      }
      
      if (role.endDate !== 'Present') {
        const end = new Date(role.endDate);
        if (end > latestEnd) {
          latestEnd = end;
        }
      }
    });
    
    return getDuration(earliestStart, latestEnd);
  };

  const nextRole = () => {
    const currentCompany = companiesData[selectedCompany];
    setCurrentRoleIndex((prev) => 
      prev === currentCompany.roles.length - 1 ? 0 : prev + 1
    );
  };

  const prevRole = () => {
    const currentCompany = companiesData[selectedCompany];
    setCurrentRoleIndex((prev) => 
      prev === 0 ? currentCompany.roles.length - 1 : prev - 1
    );
  };

  // Fallback if no data
  if (!companiesData || companiesData.length === 0) {
    return (
      <section id='experience' className={styles.container}>
        <h2>Professional Journey</h2>
        <p>No experience data available</p>
      </section>
    );
  }

  return (
    <section id='experience' className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Professional Journey</h2>
        <p className={styles.subtitle}>
          A curated showcase of my career progression and impactful contributions
        </p>
      </div>

      <div className={styles.showcase}>
        {/* Left Side - Company Filters */}
        <div className={styles.filters}>
          <h3 className={styles.filtersTitle}>
            Companies
          </h3>
          
          <div>
            {companiesData.map((company, id) => (
              <div
                key={id}
                onClick={() => {
                  setSelectedCompany(id);
                  setCurrentRoleIndex(0); // Always start with first role
                }}
                className={`${styles.companyItem} ${selectedCompany === id ? styles.active : ''}`}
              >
                <div className={styles.companyItemContent}>
                  <img 
                    src={getImageURL(company.imageSrc)} 
                    alt={company.name}
                    className={`${styles.companyLogo} ${selectedCompany === id ? styles.active : ''}`}
                  />
                  <div>
                    <h4 className={styles.companyName}>
                      {company.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Single Role Display */}
        <div className={styles.carousel}>
          {companiesData.map((company, companyId) => (
            <div key={companyId} style={{ display: selectedCompany === companyId ? 'block' : 'none' }}>
              {/* Company Header */}
              <div className={styles.companyHeader}>
                <div className={styles.companyHeaderContent}>
                  <img 
                    src={getImageURL(company.imageSrc)} 
                    alt={company.name}
                    className={styles.companyLogoLarge}
                  />
                  <h3 className={styles.companyTitle}>
                    {company.name}
                  </h3>
                </div>
                
                <p className={styles.companyDuration}>
                  Total Duration: {getTotalCompanyDuration(company.roles)}
                </p>
              </div>

              {/* Single Role Display */}
              <div className={styles.carouselContent}>
                <div>
                  {company.roles.map((role, roleId) => (
                    <div 
                      key={roleId}
                      className={`${styles.roleCard} ${roleId === currentRoleIndex ? styles.active : ''}`}
                      style={{ display: roleId === currentRoleIndex ? 'block' : 'none' }}
                    >
                      <div className={styles.roleHeader}>
                        <h4 className={styles.roleTitle}>
                          {role.role}
                        </h4>
                        <div className={styles.roleMeta}>
                          <span>📅&nbsp;&nbsp;{role.startDate} - {role.endDate}</span>
                          <span>⏱️ {getDuration(role.startDate, role.endDate)}</span>
                        </div>
                        {/* Carousel Controls - Only show if multiple roles */}
                        {company.roles.length > 1 && (
                          <div className={styles.carouselControls}>
                            <button 
                              onClick={prevRole}
                              className={styles.carouselButton}
                            >
                              <HiChevronLeft />
                            </button>
                            
                            <div className={styles.roleCounter}>
                              {currentRoleIndex + 1} / {company.roles.length}
                            </div>
                            
                            <button 
                              onClick={nextRole}
                              className={styles.carouselButton}
                            >
                              <HiChevronRight />
                            </button>
                          </div>
                        )}
                      </div>
                      
                      <div className={styles.achievementsSection}>
                        <div className={styles.achievementsHeader}>
                          <HiCheck className={styles.achievementsIcon} />
                          <h5 className={styles.achievementsTitle}>Key Achievements</h5>
                        </div>
                        <div className={styles.achievementsList}>
                          {role.experiences.map((experience, expId) => (
                            <div key={expId} className={styles.achievementItem}>
                              <div className={styles.achievementBullet}>
                                <HiCheck className={styles.checkIcon} />
                              </div>
                              <p className={styles.achievementText}>
                                {experience}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
