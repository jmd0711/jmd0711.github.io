import { profile } from "../data.js";

export default function Contact() {
  return (
    <section aria-labelledby="contact-title">
      <h1 id="contact-title" className="page-title">Contact</h1>
      <p className="intro">
        I'm open to entry level software engineering roles as well as other roles in tech. The fastest way to reach me is email.
      </p>
      <div className="links">
        <a className="button" href={`mailto:${profile.email}`}>Email me</a>
        <a href={profile.resume}>Resume (PDF)</a>
        {profile.links.map((l) => (
          <a key={l.label} href={l.href}>{l.label}</a>
        ))}
      </div>
    </section>
  );
}
