import { useState } from "react";
import { Link } from "react-scroll";

import MyDescription from "../components/AboutComp/MyDescription";
import Education from "../components/AboutComp/Education";
import Courses from "../components/AboutComp/Courses";
import "./About.css";

export default function About() {
  const [aboutMe, setAboutMe] = useState(true);
  const [education, setEducation] = useState(false);
  const [courses, setCourses] = useState(false);

  const aboutHandler = () => {
    setAboutMe(true);
    setEducation(false);
    setCourses(false);
  };
  const educationHandler = () => {
    setAboutMe(false);
    setEducation(true);
    setCourses(false);
  };
  const coursesHandler = () => {
    setAboutMe(false);
    setEducation(false);
    setCourses(true);
  };

  return (
    <section id="about">
      <div className="tab-btns" data-aos="fade-down">
        <h2
          className={`tab-btn ${aboutMe && "tab-active"}`}
          onClick={aboutHandler}
        >
          About Me
        </h2>
        <h2
          className={`tab-btn ${education && "tab-active"}`}
          onClick={educationHandler}
        >
          Education
        </h2>
        <h2
          className={`tab-btn ${courses && "tab-active"}`}
          onClick={coursesHandler}
        >
          Courses
        </h2>
      </div>

      <div data-aos="zoom-in">
        <img
          src="Images/about-img.jpg"
          alt="Supratim Chanda"
          id="about-img"
          className="about-img"
          data-aos-anchor="#about"
        />
      </div>

      <div className="about-description" data-aos="fade-left">
        {aboutMe && <MyDescription />}
        {education && <Education />}
        {courses && <Courses />}
      </div>
      <Link
        to="social"
        className="btn btn-contact"
        data-aos="zoom-in"
        spy={true}
        smooth={true}
        offset={-20}
        duration={2000}
      >
        Contact Me
      </Link>
    </section>
  );
}
