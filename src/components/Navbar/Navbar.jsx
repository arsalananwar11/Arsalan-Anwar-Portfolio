import React, { useState, useEffect } from 'react'
import styles from './Navbar.module.css';

import {getImageURL} from '../../utils';



export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);


  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href='/'>Arsalan Anwar</a>
        <div className={`${styles.menu} `}>
            <img src={menuOpen ? getImageURL("nav/closeIcon.png"):getImageURL("nav/menuIcon.png")} 
            alt="Menu-Button" 
            className={styles.menuBtn} 
            onClick={()=>setMenuOpen(!menuOpen)}
            />
           <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
           onClick={() => setMenuOpen(!menuOpen) }>
                <li>
                    <a href="#summary">Home</a>
                </li>
                <li>
                    <a href="#techstack">Skills</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#experience">Experience</a>
                </li>
                <li>
                    <a href="#education">Education</a>
                </li>
                <li>
                    <a href="#leadership">Leadership</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
                <li>
                <a className={styles.icon} href='https://www.linkedin.com/in/arsalan-anwar-ai/' target='blank'><img src={getImageURL("contact/linkedinIcon.png")} alt="LinkedIn" /></a>
                </li>
                <li>
                <a className={styles.icon} href='https://github.com/arsalananwar11' target='blank'><img src={getImageURL("contact/githubIcon.png")} alt="GitHub" /></a>
                </li>
           </ul>
        </div> 
    </nav>
  )
}
          