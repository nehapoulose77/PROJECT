import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { PROFILE } from "../data/content";

export default function Footer() {

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-credit">Designed & Developed by {PROFILE.name}</p>
          <p className="footer-copy">© 2026 {PROFILE.name}. All rights reserved.</p>
        </div>
        <ul className="social-list">
          <li>
            <a href={`mailto:${PROFILE.email}`}>
              <Mail size={16} />
              {PROFILE.email}
            </a>
          </li>
          <li>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              <LinkedinIcon />
              {PROFILE.linkedinLabel}
            </a>
          </li>
          <li>
            <a href={PROFILE.github} target="_blank" rel="noreferrer">
              <GithubIcon />
              {PROFILE.githubLabel}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
