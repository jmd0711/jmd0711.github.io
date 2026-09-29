import { Link } from "react-router-dom";
import { profile, skills } from "../data.js";

export default function About() {
  return (
    <>
      <section className="hero">
        <h1>{profile.name}</h1>
        <p className="headline">{profile.headline}</p>
        <p className="intro">{profile.intro}</p>
        <div className="links">
          <Link className="button" to="/projects">See my projects</Link>
          <a href={profile.resume}>Resume (PDF)</a>
        </div>
      </section>

      <section aria-labelledby="skills-title">
        <h2 id="skills-title">Skills</h2>
        <dl className="skills">
          {Object.entries(skills).map(([group, items]) => (
            <div key={group}>
              <dt>{group}</dt>
              <dd>{items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
