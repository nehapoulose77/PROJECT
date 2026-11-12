import { ArrowDownRight } from "lucide-react";
import { PROFILE, PROFILE_IMAGE, PROFILE_IMAGE_ALT, RESUME_FILENAME, RESUME_URL } from "../data/content";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <Reveal>
          <p className="eyebrow">Portfolio</p>
          <h1>{PROFILE.name}</h1>
          <p className="hero-title">{PROFILE.title}</p>
          <p className="hero-tagline">“{PROFILE.tagline}”</p>
          <p className="lede">{PROFILE.intro}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#projects">
              View Projects
              <ArrowDownRight size={18} />
            </a>
            <a className="btn btn-ghost" href={RESUME_URL} download={RESUME_FILENAME}>
              Download Resume
            </a>
          </div>
        </Reveal>
        <Reveal className="hero-portrait-wrap" delay={0.08}>
          <div className="hero-portrait">
            <img src={PROFILE_IMAGE} alt={PROFILE_IMAGE_ALT} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
