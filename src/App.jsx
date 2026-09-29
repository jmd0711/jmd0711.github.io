import { NavLink, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { profile } from "./data.js";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="page">
      <ScrollToTop />
      <header className="site-header">
        <NavLink to="/" className="site-name">
          {profile.name}
        </NavLink>
        <nav aria-label="Main">
          <NavLink to="/" end>About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <section>
                <h1>Page not found</h1>
                <p>
                  That page doesn't exist. Head back to <NavLink to="/">About</NavLink>.
                </p>
              </section>
            }
          />
        </Routes>
      </main>

      <footer>
        <p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </footer>
    </div>
  );
}