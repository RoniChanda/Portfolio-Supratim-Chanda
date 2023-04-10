import { useState } from "react";

import { skillsData } from "../data";
import "./Skills.css";

export default function Skills() {
  const [title, setTitle] = useState("");

  return (
    <section id="skills">
      <h2 className="skill-header" data-aos="fade-down">
        Skills
      </h2>
      <div className="skills-container">
        <div className="skill-imgs" data-aos="zoom-in">
          {skillsData.map((data) => (
            <img
              key={data.skill}
              src={`Images/skills/${data.image}.png`}
              alt={data.skill}
              className={`skill-img ${
                title === data.skill ? "skill-hover" : ""
              }`}
              onMouseOver={() => setTitle(data.skill)}
              onMouseOut={() => setTitle("")}
              onClick={() => setTitle(data.skill)}
            />
          ))}
        </div>
      </div>
      {title && <div className="skill-title">{title}</div>}
    </section>
  );
}
