import React, { useRef, useEffect, useState } from "react";
import styles from "./Carousel.module.css";
// import projects from "../../data/projects.json";

import Card from "./Card"

export default function Carousel({ type, data }) {
  const carouselRef = useRef(null);
  const [showPrev, setShowPrev] = useState(false);
  const [showNext, setShowNext] = useState(false);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (carousel) {
      setShowPrev(carousel.scrollLeft > 0);
      setShowNext(carousel.scrollWidth > carousel.clientWidth + carousel.scrollLeft);
    }
  }, []);

  const handleScroll = () => {
    const carousel = carouselRef.current;
    if (carousel) {
      setShowPrev(carousel.scrollLeft > 0);
      setShowNext(carousel.scrollWidth > carousel.clientWidth + carousel.scrollLeft);
    }
  };

  const scrollCarousel = (scrollOffset) => {
    const carousel = carouselRef.current;
    if (carousel) {
      carousel.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };


  
  return (

    
    <div className={styles.carousel}>
      
        {showPrev && (
          <button className={styles.prev} onClick={() => scrollCarousel(-310)}>‹</button>
        )}
        <div className={styles.projects} id="carousel" ref={carouselRef} onScroll={handleScroll}>
          {/* {console.log(data)} */}
          {data.map((item, id) => {
            // {console.log(`${item.title} id is ${id}`)}
            return <Card key={id} data={item} />;
          })}
        </div>
        {showNext && (
          <button className={styles.next} onClick={() => scrollCarousel(310)}>›</button>
        )}
      </div>

    
  );
}