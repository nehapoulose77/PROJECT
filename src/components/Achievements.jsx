import { Award, BadgeCheck, Briefcase } from "lucide-react";
import { ACHIEVEMENTS, CERTIFICATIONS, INTERNSHIP } from "../data/content";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <p className="eyebrow">Achievements</p>
            <h2>Achievements and Certifications</h2>
          </header>
        </Reveal>
        <div className="achieve-grid">
          <Reveal>
            <div className="panel">
              <div className="skill-heading">
                <span className="panel-icon" aria-hidden="true">
                  <Award size={18} />
                </span>
                <h3>Achievements</h3>
              </div>
              <ol className="timeline">
                {ACHIEVEMENTS.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="panel">
              <div className="skill-heading">
                <span className="panel-icon" aria-hidden="true">
                  <BadgeCheck size={18} />
                </span>
                <h3>Certifications</h3>
              </div>
              <ul className="cert-list">
                {CERTIFICATIONS.map((cert) => (
                  <li key={cert.name}>
                    <p>{cert.name}</p>
                    <span>
                      {cert.issuer}
                      {cert.year ? ` · ${cert.year}` : ""}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
        <Reveal>
          <article className="panel internship">
            <div className="skill-heading">
              <span className="panel-icon" aria-hidden="true">
                <Briefcase size={18} />
              </span>
              <div>
                <h3>{INTERNSHIP.role}</h3>
                <p className="internship-org">
                  {INTERNSHIP.organization}
                  <span> · {INTERNSHIP.duration}</span>
                </p>
              </div>
            </div>
            <ul className="project-points">
              {INTERNSHIP.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
