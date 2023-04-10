import PortfolioBox from "../components/UI/PortfolioBox";
import { projectsData } from "../data";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects">
      <h2 className="projects-header" data-aos="fade-down">
        Latest Projects
      </h2>
      <div className="projects-container" data-aos="fade-up">
        {projectsData.map((data) => (
          <PortfolioBox
            key={data.id}
            image={data.image}
            type={data.type}
            description={data.description}
            link={data.link}
            gitrepo={data.gitrepo}
          />
        ))}
      </div>
    </section>
  );
}
