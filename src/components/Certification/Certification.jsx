
import React, { useRef, useEffect, useState } from "react";
import styles from "./Certification.module.css";
import certificates from "../../data/certificates.json";
import Carousel from "../../containers/Carousel/Carousel"

export default function Certification() {

  return (
    <section className={styles.container} id="certification">
      <h2 className={styles.title}>Certification</h2>
      <Carousel type="certificates" data={certificates}/>
    </section>
  );
}
