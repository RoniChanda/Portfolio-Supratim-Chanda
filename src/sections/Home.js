import "./Home.css";

export default function Home() {
  return (
    <section id="home">
      <div className="home-inner">
        <div className="line-container">
          <div className="round-head" />
          <div className="line-tail" />
        </div>
        <div className="home-row">
          <p
            className="greetings"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            Hi, I'm
          </p>
          <h1
            className="my-name"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="1200"
          >
            <span>S</span>
            <span>u</span>
            <span>p</span>
            <span>r</span>
            <span>a</span>
            <span>t</span>
            <span>i</span>
            <span>m</span> <span style={{ marginLeft: "1.25rem" }}>C</span>
            <span>h</span>
            <span>a</span>
            <span>n</span>
            <span>d</span>
            <span>a</span>
          </h1>
          <h2
            className="my-domain"
            data-aos="fade-left"
            data-aos-duration="800"
            data-aos-delay="1500"
          >
            a Web Developer.
          </h2>
          <p
            className="short-bio"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="2000"
          >
            I am a self-taught Web developer with experience in frameworks like
            React, React-Native, Node.js, and designing tools like Tailwind,
            Sass.
          </p>
          <a
            download=""
            href="Images/resume.pdf"
            className="btn"
            data-aos="zoom-in"
            data-aos-duration="800"
            data-aos-delay="2500"
          >
            Download CV <i className="fa-solid fa-download"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
