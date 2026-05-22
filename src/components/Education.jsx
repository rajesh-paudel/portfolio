import React from "react";
import { FaGraduationCap } from "react-icons/fa";
const educationData = [
  {
    id: "01",
    duration: "2012-2020",
    college: "Paramount Academy",
    degree: "Primary & Secondary Education",
    location: "Tokha, Nepal",
  },
  {
    id: "02",
    duration: "2020-2022",
    college: "SouthWestern State College",
    degree: "Higher Secondary Education ",
    location: "Basundhara, Nepal",
  },
  {
    id: "03",
    duration: "2022-2026",
    college: "Amrit Science Campus",
    degree: "BSc. CSIT",
    location: "Lainchaur, Nepal",
  },
];
const Education = () => {
  return (
    <div className="education-section" id="education">
      <div className="education-section-header">
        <FaGraduationCap className="education-section-icon" size={30} />
        <h3>Education</h3>
      </div>
      <p className="section-subtitle">
        My academic background and the path that shaped my learning journey.
      </p>
      <div className="education-container">
        {educationData.map((edu) => (
          <div className="education-card" key={edu.id}>
            <p className="education-id">
              <span>{edu.id}</span>
            </p>

            <p className="education-duration"> {edu.duration}</p>
            <h4 className="education-college">{edu.college}</h4>
            <p className="education-degree">{edu.degree}</p>
            <p className="education-location">{edu.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
