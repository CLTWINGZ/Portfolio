"use client";

import { type ReactNode, useEffect, useMemo, useState } from "react";
import data from "../data";
import {
  Mail,
  Github,
  Linkedin,
  Download,
  Sun,
  Moon,
  MapPin,
  Phone,
  Briefcase,
  GraduationCap,
  Wrench,
  BadgeCheck,
  FolderGit2,
  UserRound,
} from "lucide-react";

type Theme = "dark" | "light";

function Section({ title, icon, children }: { title: string; icon?: ReactNode; children: ReactNode }) {
  return (
    <section className="card">
      <div className="sectionHead">
        <h2 className="h2" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {icon}
          {title}
        </h2>
      </div>
      {children}
    </section>
  );
}

function LinkBtn({ href, label, icon }: { href: string; label: string; icon?: ReactNode }) {
  const external = href.startsWith("http");

  return (
    <a className="btn" href={href} target={external ? "_blank" : undefined} rel="noreferrer">
      <span className="btnDot" />
      <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
        {icon}
        {label}
      </span>
      <span className="btnArrow">{external ? "->" : "v"}</span>
    </a>
  );
}

function getInitialTheme(): Theme {
  const saved = localStorage.getItem("theme") as Theme | null;
  if (saved === "dark" || saved === "light") {
    return saved;
  }

  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;
  return prefersLight ? "light" : "dark";
}

export default function Page() {
  const d = data;

  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const themeIcon = useMemo(() => (theme === "dark" ? <Moon size={18} /> : <Sun size={18} />), [theme]);
  const themeLabel = theme === "dark" ? "Dark" : "Light";

  return (
    <div className="bg">
      <div className="noise" />
      <div className="glow g1" />
      <div className="glow g2" />

      <div className="container">
        <header className="hero card">
          <div className="heroLeft">
            <p className="kicker">Portfolio / CV</p>

            <div className="heroTopRow">
              <h1 className="title">
                {d.name}
                <span className="spark" aria-hidden="true" />
              </h1>

              <button
                className="iconBtn"
                onClick={() => setTheme((t) => (t === "dark" ? "light" : "dark"))}
                aria-label="Toggle theme"
                title={`Theme: ${themeLabel} (click to switch)`}
                type="button"
              >
                {themeIcon}
              </button>
            </div>

            <p className="subtitle">
              {d.role} <span className="dot">|</span> {d.location}
            </p>

            <div className="ctaRow">
              <LinkBtn href={`mailto:${d.email}`} label="Email" icon={<Mail size={16} />} />
              <LinkBtn href={d.github} label="GitHub" icon={<Github size={16} />} />
              <LinkBtn href={d.linkedin} label="LinkedIn" icon={<Linkedin size={16} />} />
              <LinkBtn href={d.cvDownloadPath} label="Download CV" icon={<Download size={16} />} />
            </div>

            <div className="pillRow">
              {d.highlights.map((h) => (
                <span key={h} className="pill">
                  {h}
                </span>
              ))}
            </div>

            <div className="contactStrip">
              <span className="contactItem">
                <span className="contactKey">
                  <Mail size={14} style={{ marginRight: 6 }} />
                  Email
                </span>
                <span className="contactVal">{d.email}</span>
              </span>
              <span className="contactItem">
                <span className="contactKey">
                  <Phone size={14} style={{ marginRight: 6 }} />
                  Phone
                </span>
                <span className="contactVal">{d.phone}</span>
              </span>
              <span className="contactItem">
                <span className="contactKey">
                  <MapPin size={14} style={{ marginRight: 6 }} />
                  Location
                </span>
                <span className="contactVal">{d.location}</span>
              </span>
            </div>
          </div>

          <div className="heroRight">
            <div className="stats">
              <div className="stat">
                <p className="statNum">Full-Stack</p>
                <p className="statLabel">React | Node/Express | PHP</p>
              </div>
              <div className="stat">
                <p className="statNum">CI/CD</p>
                <p className="statLabel">GitHub Actions - Pages</p>
              </div>
              <div className="stat">
                <p className="statNum">DevOps</p>
                <p className="statLabel">Docker | Kubernetes | Jenkins</p>
              </div>
            </div>

            <div className="miniCard">
              <p className="miniTitle">Profile</p>
              <p className="miniText">{d.profile}</p>
            </div>
          </div>
        </header>

        <main className="grid2">
          <Section title="About" icon={<UserRound size={18} />}>
            <p className="body">{d.profile}</p>
          </Section>

          <Section title="Skills Overview" icon={<Wrench size={18} />}>
            <p className="muted body" style={{ marginTop: 6 }}>
              Core strengths across frontend, backend, databases, and DevOps foundations.
            </p>
            <div className="chips" style={{ marginTop: 12 }}>
              {[
                "React",
                "TypeScript",
                "Node.js",
                "Express.js",
                "PHP",
                "MySQL",
                "MongoDB",
                "GitHub Actions",
                "Docker",
                "Kubernetes",
              ].map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </Section>

          <Section title="Education" icon={<GraduationCap size={18} />}>
            <div className="timeline">
              {d.education.map((e) => (
                <div key={`${e.institute}-${e.period}`} className="tlItem">
                  <div className="tlDot" />
                  <div className="tlBody">
                    <div className="rowBetween">
                      <div>
                        <h3 className="h3">{e.program}</h3>
                        <p className="muted body">{e.institute}</p>
                      </div>
                      <span className="year">{e.period}</span>
                    </div>
                    {e.notes?.length ? (
                      <ul className="list">
                        {e.notes.map((n) => (
                          <li key={n}>{n}</li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Experience" icon={<Briefcase size={18} />}>
            <div className="timeline">
              {d.experience.map((x) => (
                <div key={`${x.company}-${x.period}`} className="tlItem">
                  <div className="tlDot" />
                  <div className="tlBody">
                    <div className="rowBetween">
                      <div>
                        <h3 className="h3">{x.role}</h3>
                        <p className="muted body">
                          {x.company} | {x.location}
                        </p>
                      </div>
                      <span className="year">{x.period}</span>
                    </div>

                    <ul className="list">
                      {x.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>

                    {x.techStack?.length ? (
                      <>
                        <p className="hint" style={{ marginTop: 10 }}>
                          Tech stack
                        </p>
                        <div className="chips small">
                          {x.techStack.map((t) => (
                            <span key={t} className="chip">
                              {t}
                            </span>
                          ))}
                        </div>
                      </>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section title="Projects" icon={<FolderGit2 size={18} />}>
            <div className="projects" style={{ marginTop: 6 }}>
              {d.projects.map((p) => (
                <article key={p.title} className="project">
                  <div className="projectHead">
                    <h3 className="h3">{p.title}</h3>
                    <span className="year">{p.status ?? "Completed"}</span>
                  </div>
                  <p className="body muted">{p.description}</p>
                  <div className="chips small">
                    {p.stack.map((t) => (
                      <span key={t} className="chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </Section>

          <Section title="Licenses & Certifications" icon={<BadgeCheck size={18} />}>
            <div className="certGrid">
              {d.certifications.map((c) => (
                <div key={`${c.title}-${c.date}`} className="cert">
                  <p className="certTitle">{c.title}</p>
                  <p className="muted body">{c.issuer}</p>
                  <span className="year" style={{ display: "inline-flex", marginTop: 10 }}>
                    {c.date}
                  </span>
                </div>
              ))}
            </div>
          </Section>
        </main>

        <footer className="footer">
          <p className="muted">
            Built with <b>Next.js + React + TypeScript</b> | Deployed with <b>GitHub Actions</b>.
          </p>
          <p className="muted">(c) {new Date().getFullYear()} {d.name}</p>
        </footer>
      </div>
    </div>
  );
}
