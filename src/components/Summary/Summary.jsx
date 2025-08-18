import React, { useState, useEffect } from 'react';
import { 
  HiMail, 
  HiDownload,
  HiSparkles
} from 'react-icons/hi'
import { 
  FaLinkedin, 
  FaGithub 
} from 'react-icons/fa'
import styles from "./Summary.module.css";
import { getImageURL } from '../../utils';

const HEADLINES = [
  "Data Scientist",
  "AI Product Developer",
  "Cloud and AI Engineer",
  "MS CS @ New York University"
];

export default function Summary() {
  const [displayed, setDisplayed] = useState("");
  const [headlineIndex, setHeadlineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = HEADLINES[headlineIndex];
    let timeout;
    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => setCharIndex(charIndex + 1), 80);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => setCharIndex(charIndex - 1), 40);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIndex === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setHeadlineIndex((headlineIndex + 1) % HEADLINES.length);
      }, 300);
    }
    setDisplayed(current.slice(0, charIndex));
    return () => clearTimeout(timeout);
  }, [charIndex, deleting, headlineIndex]);

  return (
    <section className={styles.heroSection} id="summary">
      <div className={styles.heroContent}>
        <div className={styles.heroLeft}>
          <p className={styles.heroIntro}>Hello, I'm</p>
          <h1 className={styles.heroName}>Arsalan Anwar</h1>
          <h2 className={styles.heroHeadline}>
            <span>{displayed}</span>
            <span className={styles.cursor}>|</span>
          </h2>
          <p className={styles.heroSummary}>
            I build intelligent, scalable solutions at the intersection of AI, cloud, and product. Passionate about transforming data into business impact, I specialize in end-to-end ML, GenAI, and cloud-native applications.
          </p>
          <div className={styles.heroStatsRow}>
            <div className={styles.heroStat}><span className={styles.heroStatNumber}>4+</span><span className={styles.heroStatLabel}>Years in AI/ML</span></div>
            <div className={styles.heroStat}><span className={styles.heroStatNumber}>15+</span><span className={styles.heroStatLabel}>Projects Delivered</span></div>
            <div className={styles.heroStat}><span className={styles.heroStatNumber}>∞</span><span className={styles.heroStatLabel}>Ideas & Energy</span></div>
          </div>
          {/* <div className={styles.heroTagsRow}>
            <span className={styles.heroTag}>AI & Data Science</span>
            <span className={styles.heroTag} class="text-purple-700">Cloud Engineering</span>
          </div> */}
           <div className="flex flex-wrap gap-2 sm:gap-3 mt-4 justify-center lg:justify-start">
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 rounded-full border border-blue-200">
              <HiSparkles className="w-4 h-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium text-blue-700">AI/ML Engineer</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 rounded-full border border-purple-200">
              <HiSparkles className="w-4 h-4 text-purple-600" />
              <span className="text-xs sm:text-sm font-medium text-purple-700">Data Scientist</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-green-50 rounded-full border border-green-200">
              <HiSparkles className="w-4 h-4 text-green-600" />
              <span className="text-xs sm:text-sm font-medium text-green-700">Cloud Architect</span>
            </div>
          </div>
        </div>
        <div className={styles.heroRight}>
          <img className={styles.heroImage} src={getImageURL("summary/Arsalan_Anwar_Grad.jpg")} alt='Arsalan Anwar' />
          <div className="flex flex-col items-center lg:items-center gap-4 sm:gap-5 w-full max-w-[360px]">
            <a
              href='/Arsalan_Anwar_Resume.pdf' download
              className="w-half font-medium text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-blue-600 text-white border-2 border-blue-600 hover:bg-blue-600 hover:border-blue-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center active:scale-95"
            >
              <span className="flex items-center justify-center gap-2">
                <HiDownload className="w-4 h-4 sm:w-5 sm:h-5" />
                Download Resume
              </span>
            </a>


            <div className="flex items-center justify-center lg:justify-center gap-3 sm:gap-4 w-full">

              <a
                href="mailto:arsalananwarofficial@gmail.com"
                className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 border-gray-300 bg-white text-gray-700 hover:bg-gray-100 hover:border-gray-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
                aria-label="Send email to Arsalan Anwar"
                title="Send me an email"
              >
                <HiMail className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>

              <a
                href="https://www.linkedin.com/in/arsalan-anwar-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-blue-600 text-white rounded-full transition-all duration-300 hover:bg-blue-700 hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                aria-label="Connect on LinkedIn"
              >
                <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>

              <a
                href="https://github.com/arsalananwar11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 bg-gray-800 text-white rounded-full transition-all duration-300 hover:bg-gray-900 hover:shadow-md hover:-translate-y-0.5 active:scale-95"
                aria-label="View GitHub profile"
              >
                <FaGithub className="w-5 h-5 sm:w-6 sm:h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
