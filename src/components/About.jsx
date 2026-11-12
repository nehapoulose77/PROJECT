import { GraduationCap } from "lucide-react";
import { EDUCATION, PROFILE } from "../data/content";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <p className="eyebrow">About</p>
            <h2>About Me</h2>
          </header>
        </Reveal>
        <div className="about-grid">
          <Reveal>
            <p className="about-copy">{PROFILE.about}</p>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="panel education-card">
              <div className="panel-icon" aria-hidden="true">
                <GraduationCap size={20} />
              </div>
              <h3>Education</h3>
              <dl className="education-list">
                <div>
                  <dt>Degree</dt>
                  <dd>{EDUCATION.degree}</dd>
                </div>
                <div>
                  <dt>College</dt>
                  <dd>{EDUCATION.college}</dd>
                </div>
                <div>
                  <dt>CGPA</dt>
                  <dd>{EDUCATION.cgpa}</dd>
                </div>
                <div>
                  <dt>Graduation Period</dt>
                  <dd>{EDUCATION.period}</dd>
                </div>
              </dl>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
