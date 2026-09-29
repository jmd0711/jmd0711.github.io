import { Link } from "react-router-dom";
import { profile, skills } from "../data.js";

export default function About() {
  return (
    <>
      <section className="hero about-hero">
        <img
          className="portrait"
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width="240"
          height="240"
        />
        <div>
          <h1>{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <p className="intro">{profile.intro}</p>
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
