import { GithubIcon } from "./BrandIcons";
import { PROJECTS } from "../data/content";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <p className="eyebrow">Projects</p>
            <h2>Selected Projects</h2>
          </header>
        </Reveal>
        <div className="project-grid">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.title} delay={index * 0.06}>
              <article className="project-card">
                <div className="project-top">
                  {project.duration ? (
                    <p className="meta-pill">{project.duration}</p>
                  ) : null}
                  <h3>{project.title}</h3>
                  {project.subtitle ? <p className="project-subtitle">{project.subtitle}</p> : null}
                </div>
                <p className="project-copy">{project.description}</p>
                {project.achievements.length > 0 ? (
                  <ul className="project-points">
                    {project.achievements.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
                <ul className="badge-row" aria-label="Technology stack">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <a
                  className="text-link"
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  <GithubIcon />
                  GitHub
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
