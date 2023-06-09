import { useState } from "react";
import { Link } from "react-scroll";

import { navLinks } from "../../data";
import "./Navbar.css";

export default function Navbar({ onPress }) {
  const [activeLink, setActiveLink] = useState("");

  const activeLinkHandler = (title) => {
    setActiveLink(title);
  };

  return (
    <nav>
      <ul>
        {navLinks.map((data) => (
          <li key={data.title} className="navitem">
            <Link
              to={`${data.title}`}
              spy={true}
              smooth={true}
              offset={-20}
              duration={800}
              onClick={onPress}
              onSetActive={activeLinkHandler.bind(null, data.title)}
            >
              <i
                className={`fa-solid fa-${data.icon} navicon ${
                  activeLink === data.title ? "navitem-active" : ""
                }`}
              >
                {" "}
                {data.title}
              </i>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
