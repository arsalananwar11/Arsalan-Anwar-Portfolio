import React from 'react';
import style from './App.module.css';

import Navbar from "./components/Navbar/Navbar";
import Summary from "./components/Summary/Summary";
import TechStack from './components/TechStack/TechStack';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Certification from './components/Certification/Certification';

export default function App() {
  return (
    <div className={style.App}>
      <Navbar />
      <Summary />
      <TechStack />
      <Projects />
      {/* <Experience />
      <Certification /> */}
      <Contact />
    </div>
  );
}
