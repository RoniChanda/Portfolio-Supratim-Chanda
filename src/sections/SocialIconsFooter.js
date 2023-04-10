import { socialIcons } from "../data";
import "./SocialIconsFooter.css";

export default function SocialIconsFooter() {
  return (
    <div id="social">
      <div className="social-icons">
        {socialIcons.map((icon) => (
          <a
            key={icon.id}
            href={icon.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="social-icon">
              <i className={`fa-brands fa-${icon.id}`} />
            </div>
          </a>
        ))}
      </div>
      <p className="share-food">Let's share 🍔 & ☕!</p>
    </div>
  );
}
