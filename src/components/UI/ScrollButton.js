import { Fragment, useEffect, useState } from "react";
import { Link } from "react-scroll";

import "./ScrollButton.css";

export default function ScrollButton() {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const social = document.getElementById("social").getBoundingClientRect();
      const aboutImg = document
        .getElementById("about-img")
        .getBoundingClientRect();

      // Scroll down button on detecting social icons section
      if (social.top <= window.innerHeight) {
        setShowScrollDown(false);
      } else {
        setShowScrollDown(true);
      }

      // Scroll up button on detecting image on about section
      if (aboutImg.bottom <= window.innerHeight) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }
    });
  }, []);

  return (
    <Fragment>
      <Link
        to="social"
        spy={true}
        smooth={true}
        offset={50}
        duration={1500}
        className={`scroll scroll-down ${showScrollDown && "show-scroll"}`}
      >
        <i className="fa-solid fa-caret-down"></i>
      </Link>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={50}
        duration={1500}
        className={`scroll scroll-up ${showScrollUp && "show-scroll"}`}
      >
        <i className="fa-solid fa-caret-up"></i>
      </Link>
    </Fragment>
  );
}
