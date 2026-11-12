import { Download } from "lucide-react";
import { RESUME_FILENAME, RESUME_URL } from "../data/content";
import Reveal from "./Reveal";

export default function Resume() {
  return (
    <section id="resume" className="section">
      <div className="container">
        <Reveal>
          <div className="resume-panel">
            <p className="eyebrow">Resume</p>
            <h2>Want to Know More About Me?</h2>
            <p>
              Explore my academic background, technical expertise, projects, and professional
              experience in detail.
            </p>
            <a className="btn btn-primary" href={RESUME_URL} download={RESUME_FILENAME}>
              <Download size={18} />
              Download My Resume
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
