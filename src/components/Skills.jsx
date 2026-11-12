import {
  Atom,
  Boxes,
  Braces,
  CodeXml,
  Coffee,
  Database,
  FolderGit2,
  GitBranch,
  Hash,
  Laptop,
  Network,
  Palette,
  Terminal,
} from "lucide-react";
import { SKILL_GROUPS } from "../data/content";
import Reveal from "./Reveal";

const ICONS = {
  Python: Terminal,
  Java: Coffee,
  C: Hash,
  SQL: Database,
  HTML: CodeXml,
  CSS: Palette,
  JavaScript: Braces,
  "React.js": Atom,
  "Data Structures": Network,
  "Object-Oriented Programming (OOP)": Boxes,
  Git: GitBranch,
  GitHub: FolderGit2,
  "VS Code": Laptop,
  "Google Colab": Terminal,
};

const GROUP_ICONS = [Braces, CodeXml, Boxes, Laptop];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal>
          <header className="section-head">
            <p className="eyebrow">Skills</p>
            <h2>Technical Skills</h2>
          </header>
        </Reveal>
        <div className="skill-grid">
          {SKILL_GROUPS.map((group, index) => {
            const GroupIcon = GROUP_ICONS[index];
            return (
              <Reveal key={group.title} delay={index * 0.05}>
                <article className="panel skill-card">
                  <div className="skill-heading">
                    <span className="panel-icon" aria-hidden="true">
                      <GroupIcon size={18} />
                    </span>
                    <h3>{group.title}</h3>
                  </div>
                  <ul className="skill-list">
                    {group.items.map((item) => {
                      const Icon = ICONS[item];
                      return (
                        <li key={item}>
                          <Icon size={15} aria-hidden="true" />
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
