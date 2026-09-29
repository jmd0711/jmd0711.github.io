import "./App.css";

const profile = {
  name: "Jasper Matthew Dumdumaya",
  headline: "Software engineer who builds and ships full-stack web apps.",
  intro:
    "I just finished my master's in software engineering. I like turning messy problems into small, reliable tools, and I'm looking for my first full-time engineering role.",
  email: "2jmd0711@gmail.com",
  links: [
    { label: "GitHub", href: "https://github.com/jmd0711" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jasper-matthew-dumdumaya/" },
    { label: "Resume (PDF)", href: "/Resume_JasperMatthewDumdumaya.pdf" },
  ],
};

const projects = [
  {
    title: "Project name",
    summary:
      "One sentence on the problem it solves and the result, ideally with a number (users, speed-up, tests, uptime).",
    role: "Solo project, 6 weeks",
    stack: ["React", "Node.js", "PostgreSQL"],
    live: "https://example.com",
    code: "https://github.com/your-handle/project",
  },
  {
    title: "Second project",
    summary:
      "What you built, one technical decision you're proud of, and what you learned from it.",
    role: "Team of 4, capstone",
    stack: ["TypeScript", "Docker", "AWS"],
    code: "https://github.com/your-handle/second-project",
  },
];

const skills = {
  Languages: ["JavaScript", "TypeScript", "Python", "SQL"],
  Frontend: ["React", "HTML/CSS", "Testing Library"],
  Backend: ["Node.js", "REST APIs", "PostgreSQL"],
  Tooling: ["Git", "Docker", "GitHub Actions"],
};

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <h1>{profile.name}</h1>
        <p className="headline">{profile.headline}</p>
        <p className="intro">{profile.intro}</p>
        <nav className="links" aria-label="Contact and profiles">
          <a className="button" href={`mailto:${profile.email}`}>
            Email me
          </a>
          {profile.links.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section aria-labelledby="projects-title">
          <h2 id="projects-title">Projects</h2>
          <ul className="projects">
            {projects.map((p) => (
              <li key={p.title} className="project">
                <div>
                  <h3>{p.title}</h3>
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
      </main>

      <footer>
        <p>
          Want to talk? <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </footer>
    </div>
  );
}
