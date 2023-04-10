import { useEffect, useState } from "react";
import "./Footer.css";
import { Link } from "react-scroll";

export default function Footer() {
  const [showScrollUp, setShowScrollUp] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 556) {
        setShowScrollUp(true);
      } else {
        setShowScrollUp(false);
      }

      if (window.scrollY <= 1900) {
        setShowScrollDown(true);
      } else {
        setShowScrollDown(false);
      }
    });
  }, []);

  return (
    <div className="footer">
      <p>
        &copy; {new Date().getFullYear()} created by{" "}
        <span style={{ borderBottom: "1px solid var(--themeColor)" }}>
          Supratim Chanda
        </span>
      </p>
      <Link
        to="social"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className={`scroll scroll-down ${showScrollDown && "show-scroll"}`}
      >
        <i className="fa-solid fa-caret-down"></i>
      </Link>
      <Link
        to="home"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
        className={`scroll scroll-up ${showScrollUp && "show-scroll"}`}
      >
        <i className="fa-solid fa-caret-up"></i>
      </Link>
    </div>
  );
}
