import { Link } from "react-router-dom";
import { profile, skills } from "../data.js";

export default function About() {
  return (
    <>
      <section className="hero about-hero">
        <figure className="portrait-card">
          <img
            className="portrait"
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width="240"
            height="240"
          />
          <figcaption>
            <p>{profile.degree}</p>
            <p>{profile.occupation}</p>
          </figcaption>
        </figure>
        <div>
          <p className="headline">{profile.headline}</p>
          <div className="intro">
            {profile.intro.map((text, i) => (<p key={i}>{text}</p>
          ))}
          </div>
          
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
