import { Fragment, useLayoutEffect, useState } from "react";
import { Howl } from "howler";

import music from "../music/bg-mucic.mp3";
import Footer from "../components/SidebarComp/Footer";
import Navbar from "../components/SidebarComp/Navbar";
import Profile from "../components/SidebarComp/Profile";

import "./Sidebar.css";

const sound = new Howl({ src: [music] });

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [theme, setTheme] = useState();
  const [isPlaying, setIsPlaying] = useState(false);

  // Music event
  sound.on("end", () => setIsPlaying(false));

  // Theme related effects
  useLayoutEffect(() => {
    if (!localStorage.getItem("theme")) {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme(localStorage.getItem("theme"));
    }

    // Change colors, home section bg-image and contact section bg-image
    if (theme === "light") {
      document.body.classList.add("light-theme");
      document.getElementById("home").classList.add("background-light");
      document
        .querySelectorAll(".star")
        .forEach((element) => element.classList.add("star-hide"));
    } else {
      document.body.classList.remove("light-theme");
      document.getElementById("home").classList.remove("background-light");
      document
        .querySelectorAll(".star")
        .forEach((element) => element.classList.remove("star-hide"));
    }
  }, [theme]);

  const sidebarHandler = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const themeHandler = () => {
    if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
    } else {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  const musicHandler = () => {
    if (!isPlaying) {
      sound.play();
      setIsPlaying(true);
    } else {
      sound.pause();
      setIsPlaying(false);
    }
  };

  return (
    <Fragment>
      <header className={`${sidebarOpen && "mobile-nav-active"}`}>
        <Profile />
        <Navbar onPress={sidebarHandler} />
        <Footer />
      </header>

      {/* Mobile Navigation */}
      <div className="top-icon toggle-icon" onClick={sidebarHandler}>
        <i
          className={`fa-solid fa-${
            sidebarOpen ? "xmark" : "bars"
          } icon-placement`}
        ></i>
      </div>

      {/* Theme - Dark/Light */}
      <div className="top-icon theme-icon" onClick={themeHandler}>
        <i className={`fa-solid fa-${theme === "light" ? "sun" : "moon"}`}></i>
      </div>

      {/* Play Music */}
      <div
        className={`top-icon music-icon ${
          sidebarOpen && "music-icon-position"
        }`}
        onClick={musicHandler}
      >
        <i
          class={`fa-solid fa-${isPlaying ? "volume-low" : "volume-xmark"}`}
        ></i>
      </div>
    </Fragment>
  );
}
