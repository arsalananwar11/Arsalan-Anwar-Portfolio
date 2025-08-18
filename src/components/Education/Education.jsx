import React from 'react';
import educationData from "../../data/education.json";
import { getImageURL } from '../../utils';

export default function Education() {
  return (
    <section id="education" className="max-w-full mx-auto px-4 py-16 sm:py-16">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center bg-gradient-to-r from-blue-700 via-blue-500 to-blue-800 bg-clip-text text-transparent mb-12 tracking-tight">
        Education
      </h2>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 justify-center items-stretch">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="flex flex-col bg-white/90 border border-gray-200 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-7 sm:p-9 w-full max-w-3xl mx-auto relative overflow-hidden"
          >
            <div className="flex items-center gap-1 mb-0">
              <img
                src={getImageURL(edu.imageSrc)}
                alt={edu.institution}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border-2 border-gray-200 shadow-md bg-white"
              />
              <div className="flex-1 ml-2.5">
                <h3 className="text-lg sm:text-lg font-bold text-gray-900 leading-tight mb-0.5">{edu.degree}</h3>
                <h4 className="text-base sm:text-md font-semibold text-gray-700 mb-0.5">{edu.institution}</h4>
                <p className="text-sm text-gray-500 mb-0.5">{edu.location}</p>
                <span className="inline-block text-xs font-medium text-blue-700 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 mt-1">
                  {edu.duration}
                </span>
                <span className="inline-block items-center ml-1.5 gap-2 px-3 py-1 bg-purple-50 border border-purple-200 text-purple-700 text-xs font-semibold rounded-full">
                  GPA: <span className="font-bold">{edu.gpa}</span>
                </span>
              </div>
            </div>
            {/* <div className="flex flex-wrap items-center gap-2 mb-3">
              
            </div> */}
            {/* <p className="italic text-gray-700 text-sm mb-4">{edu.description}</p> */}
            {/* <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mt-2">
                {edu.relevantCoursework && edu.relevantCoursework.map((course, i) => (
                  <span
                    key={i}
                    className="inline-block text-xs font-medium bg-gradient-to-r from-blue-600 to-purple-500 text-white px-3 py-1 rounded-full shadow-sm hover:from-purple-500 hover:to-blue-600 transition-colors duration-200"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div> */}
          </div>
        ))}
      </div>
    </section>
  );
}
