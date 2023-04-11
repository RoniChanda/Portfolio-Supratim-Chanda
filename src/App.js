import { useEffect } from "react";
import Aos from "aos";

import About from "./sections/About";
import ContactMe from "./sections/ContactMe";
import Home from "./sections/Home";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Sidebar from "./sections/Sidebar";
import SocialIconsFooter from "./sections/SocialIconsFooter";
import ScrollButton from "./components/UI/ScrollButton";
import "aos/dist/aos.css";

export default function App() {
  // Animation on Scroll
  useEffect(() => {
    Aos.init({
      offset: 80,
      duration: 2000,
      delay: 200,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <>
      <Sidebar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <ContactMe />
        <SocialIconsFooter />
        <ScrollButton />
      </main>
    </>
  );
}
