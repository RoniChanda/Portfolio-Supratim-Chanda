import "./PortfolioBox.css";

export default function PortfolioBox({
  image,
  type,
  description,
  link,
  gitrepo,
}) {
  return (
    <div className="portfolio-box">
      <img src={image} alt={type} />
      <h3>{type}</h3>
      <div className="portfolio-layer">
        <p>{description}</p>
        <div className="portfolio-btns">
          <a href={link} target="_blank" rel="noopener noreferrer">
            <i className="fa-solid fa-link portfolio-icon"></i>
          </a>
          <a href={gitrepo} target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github portfolio-icon"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
