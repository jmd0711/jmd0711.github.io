import { projects } from "../data.js";

export default function Projects() {
  return (
    <section aria-labelledby="projects-title">
      <h1 id="projects-title" className="page-title">Projects</h1>
      <ul className="projects">
        {projects.map((p) => (
          <li key={p.title} className="project">
            <div>
              <h2 className="project-title">{p.title}</h2>
              <p className="role">{p.role}</p>
            </div>
            <div>
              <p>{p.summary}</p>
              <ul className="tags">
                {p.stack.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <p className="project-links">
                {p.live && <a href={p.live}>Live demo</a>}
                {p.code && <a href={p.code}>Source code</a>}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
