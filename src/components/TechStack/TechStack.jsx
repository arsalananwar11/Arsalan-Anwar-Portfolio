import React, { useState, useRef, useEffect } from "react";
import skills from "../../data/skills.json";
import { getImageURL } from "../../utils";

export default function TechStack() {
  // Group skills by category
  const categories = {};
  skills.forEach((skill) => {
    if (!categories[skill.category]) categories[skill.category] = [];
    categories[skill.category].push(skill);
  });
  const categoryList = Object.keys(categories);
  const [selected, setSelected] = useState(categoryList[0]);
  const [shouldMarquee, setShouldMarquee] = useState(false);
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Check if the skills row overflows horizontally
    const el = marqueeRef.current;
    if (el) {
      setShouldMarquee(el.scrollWidth > el.clientWidth + 8); // 8px for gap
    }
  }, [selected]);

  return (
    <section id="techstack" className="max-w-full mx-auto px-4 py-12 sm:py-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 bg-clip-text text-transparent mb-12 tracking-tight">
        Tech Stack
      </h2>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8">
        {categoryList.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-1.5 rounded-full border text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
              selected === cat
                ? "bg-blue-600 text-white border-blue-600 shadow"
                : "bg-white text-blue-700 border-blue-200 hover:bg-blue-50"
            }`}
            aria-pressed={selected === cat}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="overflow-x-hidden relative">
        <div className="relative w-full">
          <div
            ref={marqueeRef}
            className={`whitespace-nowrap flex items-center gap-6 sm:gap-8 will-change-transform ${
              shouldMarquee ? "animate-marquee" : "justify-center"
            }`}
            style={shouldMarquee ? {} : { animation: "none" }}
          >
            {(shouldMarquee
              ? categories[selected].concat(categories[selected])
              : categories[selected]
            ).map((skill, i) => (
              <div
                key={skill.title + i}
                className="flex flex-col items-center justify-center min-w-[90px] sm:min-w-[110px] px-2 py-2 rounded-xl bg-white/80 border border-gray-200 shadow hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={getImageURL(skill.imageSrc)}
                  alt={skill.title}
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain mb-2"
                />
                <span className="text-xs sm:text-sm font-medium text-gray-700 text-center">
                  {skill.title}
                </span>
              </div>
            ))}
          </div>
          {/* Gradient fade overlays for editorial effect */}
          <div className="absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-white/90 via-white/60 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-white/90 via-white/60 to-transparent pointer-events-none z-10" />
        </div>
      </div>
      {/* Marquee animation style */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 24s linear infinite;
        }
      `}</style>
    </section>
  );
}
