import Link from "next/link";
import ProjectVisual from "../components/ProjectVisual";
import { moreProjects, projects } from "../lib/projects";

const experiences = [
  {
    period: "Feb — Jun 2025",
    org: "Diskominfo Pekanbaru",
    role: "Infrastructure Service Intern · SPBE",
    text: "Built Lapor Infra for network-incident reporting across Pekanbaru city offices and contributed to digital-infrastructure monitoring, evaluation, and documentation.",
  },
  {
    period: "Sep — Dec 2024",
    org: "Bangkit Academy",
    role: "Machine Learning Cohort",
    text: "Studied supervised and unsupervised learning, CNN, NLP, and contributed to a multidisciplinary AI capstone project.",
  },
  {
    period: "Feb — Jun 2024",
    org: "Bangkit Academy",
    role: "Android Development Cohort",
    text: "Deepened native Android engineering with Kotlin, Jetpack, MVVM, Retrofit, Firebase, and end-to-end capstone collaboration.",
  },
];

const stackGroups = [
  {
    title: "Backend Engineering",
    skills: ["Laravel", "REST APIs", "MySQL", "Sanctum", "Filament", "Midtrans"],
  },
  {
    title: "Mobile Engineering",
    skills: ["Kotlin", "Jetpack Compose", "Flutter", "Firebase", "Retrofit", "Google Maps"],
  },
  {
    title: "Applied & Automation",
    skills: ["Python", "TensorFlow", "Scikit-learn", "Flask", "Selenium", "C5.0"],
  },
];

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Bayu Pratama Agus Kurniawan",
    jobTitle: "Software Engineer",
    url: "https://github.com/bayupra7ama",
    sameAs: [
      "https://github.com/bayupra7ama",
      "https://www.linkedin.com/in/bayu-pratama-agus-kurniawan-770798309/",
    ],
    knowsAbout: ["Laravel", "Kotlin", "Flutter", "Android", "Firebase", "Machine Learning"],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Bayu Pratama home">BAYU<span>.</span></a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <Link href="/resume">Resume</Link>
        </nav>
        <a className="header-cta" href="#contact">Let&apos;s talk <span>↗</span></a>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="hero-copy">
            <p className="eyebrow"><span className="status-dot" /> SOFTWARE ENGINEER · INDONESIA</p>
            <h1>I build practical software for <em>real-world problems.</em></h1>
            <p className="hero-lead">
              Mobile, backend, web, and applied AI — built around real workflows, clear architecture, and products people can actually use.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span>↓</span></a>
              <Link className="button button-ghost" href="/resume">View resume <span>↗</span></Link>
            </div>
          </div>

          <aside className="hero-panel" aria-label="Profile highlights">
            <div className="hero-monogram">BP</div>
            <div className="hero-panel-copy">
              <span>Currently exploring</span>
              <strong>Flutter · Laravel APIs · AI-assisted systems</strong>
            </div>
            <div className="hero-panel-grid">
              <div><small>Education</small><b>Cumlaude</b><span>GPA 3.72 / 4.00</span></div>
              <div><small>Bangkit</small><b>2 Cohorts</b><span>Android + ML</span></div>
              <div><small>Experience</small><b>Diskominfo</b><span>SPBE Infrastructure</span></div>
              <div><small>Focus</small><b>Product Engineering</b><span>Mobile · Backend</span></div>
            </div>
          </aside>
        </section>

        <section className="credibility">
          <span>Laravel</span><i>•</i><span>Kotlin</span><i>•</i><span>Flutter</span><i>•</i><span>Firebase</span><i>•</i><span>Applied AI</span><i>•</i><span>REST APIs</span>
        </section>

        <section id="work" className="section work-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">SELECTED WORK</p>
              <h2>Products, not just repositories.</h2>
            </div>
            <p>Six projects that best represent how I approach mobile, backend, product, and applied AI engineering.</p>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article className={"project-row " + (index % 2 ? "project-reverse" : "")} key={project.slug}>
                <Link className="project-visual-link" href={"/projects/" + project.slug} aria-label={"View " + project.title + " case study"}>
                  <ProjectVisual project={project} compact />
                </Link>
                <div className="project-copy">
                  <div className="project-meta"><span>{project.number}</span><span>{project.eyebrow}</span><span>{project.year}</span></div>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="tag-list">{project.stack.slice(0, 5).map((item) => <span key={item}>{item}</span>)}</div>
                  <Link className="text-link" href={"/projects/" + project.slug}>View case study <span>↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section experience-section">
          <div className="section-heading compact-heading">
            <div>
              <p className="eyebrow">EXPERIENCE</p>
              <h2>Built through practice.</h2>
            </div>
          </div>
          <div className="timeline">
            {experiences.map((item, index) => (
              <article className="timeline-row" key={item.org + item.period}>
                <div className="timeline-index">0{index + 1}</div>
                <time>{item.period}</time>
                <div className="timeline-main">
                  <h3>{item.org}</h3>
                  <strong>{item.role}</strong>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section stack-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">ENGINEERING STACK</p>
              <h2>Tools follow the problem.</h2>
            </div>
            <p>I prefer showing where technology creates value instead of rating myself with arbitrary skill percentages.</p>
          </div>
          <div className="stack-grid">
            {stackGroups.map((group, index) => (
              <div className="stack-card" key={group.title}>
                <span className="stack-number">0{index + 1}</span>
                <h3>{group.title}</h3>
                <div>{group.skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-copy">
            <p className="eyebrow">ABOUT</p>
            <h2>From native Android to backend systems and applied AI.</h2>
            <p>
              I started with Android development and gradually expanded into Laravel backend engineering, Flutter, and machine learning.
              Today I enjoy building systems where mobile apps, APIs, data, and real-world workflows meet.
            </p>
            <p>
              I graduated from Politeknik Negeri Bengkalis with a Bachelor of Applied Science in Software Engineering, GPA 3.72 / 4.00, with Cumlaude honors.
            </p>
            <Link className="text-link" href="/resume">Read full resume <span>↗</span></Link>
          </div>
          <div className="achievement-grid">
            <div className="achievement-card"><span>2025</span><strong>Cumlaude Graduate</strong><p>Politeknik Negeri Bengkalis · GPA 3.72</p></div>
            <div className="achievement-card"><span>2025</span><strong>Outstanding Student Certificate</strong><p>Recognition related to MSIB participation in Mobile Development and Machine Learning.</p></div>
            <div className="achievement-card"><span>2024</span><strong>Bangkit Academy × 2</strong><p>Completed Android Development and Machine Learning cohorts.</p></div>
          </div>
        </section>

        <section className="section more-section">
          <div className="section-heading compact-heading">
            <div>
              <p className="eyebrow">MORE WORK</p>
              <h2>More things I&apos;ve built.</h2>
            </div>
          </div>
          <div className="more-grid">
            {moreProjects.map((project) => (
              <a className="more-card" key={project.title} href={project.href} target="_blank" rel="noreferrer">
                <span className="more-arrow">↗</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <small>{project.stack}</small>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <p className="eyebrow">CONTACT</p>
          <h2>Let&apos;s build something <em>useful.</em></h2>
          <p>Open to software projects, collaborations, and engineering opportunities.</p>
          <div className="contact-links">
            <a href="mailto:bayupratamaaguskurniawan@gmail.com">Email <span>↗</span></a>
            <a href="https://www.linkedin.com/in/bayu-pratama-agus-kurniawan-770798309/" target="_blank" rel="noreferrer">LinkedIn <span>↗</span></a>
            <a href="https://github.com/bayupra7ama" target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Bayu Pratama Agus Kurniawan</span>
        <span>Software Engineer · Riau, Indonesia</span>
      </footer>
    </>
  );
}
