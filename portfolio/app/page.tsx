import Link from "next/link";
import { ProjectVisual } from "@/components/project-visual";
import { extraProjects, projects } from "@/lib/projects";

const experience = [
  {
    period: "FEB — JUN 2025",
    org: "Diskominfo Pekanbaru",
    role: "Infrastructure Service Intern · SPBE",
    text: "Built Lapor Infra for network-infrastructure incident reporting and contributed to monitoring, evaluation, and documentation of public digital infrastructure.",
  },
  {
    period: "SEP — DEC 2024",
    org: "Bangkit Academy",
    role: "Machine Learning Cohort",
    text: "Studied supervised and unsupervised learning, CNN, and NLP while contributing to an end-to-end multidisciplinary capstone.",
  },
  {
    period: "FEB — JUN 2024",
    org: "Bangkit Academy",
    role: "Android Development Cohort",
    text: "Deepened native Android development with Kotlin, Jetpack, MVVM, Retrofit, and Firebase through structured coursework and capstone collaboration.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-grid" />
        <div className="container hero-inner">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="status-dot" /> Software Engineer · Indonesia</div>
            <h1>I build practical software for <em>real-world problems.</em></h1>
            <p className="hero-lead">
              Mobile, backend, web, and applied AI — shaped into useful products with clean workflows and thoughtful engineering.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">Explore my work <span>↓</span></a>
              <a className="button button-ghost" href="https://github.com/bayupra7ama" target="_blank" rel="noreferrer">GitHub ↗</a>
            </div>
          </div>

          <div className="hero-side reveal delay-1">
            <div className="availability"><span /> OPEN TO BUILD</div>
            <div className="hero-card">
              <div className="hero-card-label">CURRENT FOCUS</div>
              <div className="hero-card-title">Software that connects interfaces, APIs, data, and real workflows.</div>
              <div className="hero-tags">
                <span>Laravel</span><span>Kotlin</span><span>Flutter</span><span>Applied AI</span>
              </div>
            </div>
            <div className="hero-signature">BP<span>/26</span></div>
          </div>
        </div>

        <div className="container proof-strip reveal delay-2">
          <div><strong>3.72 / 4.00</strong><span>Cumlaude · Software Engineering</span></div>
          <div><strong>Bangkit ×2</strong><span>Android Development · Machine Learning</span></div>
          <div><strong>Diskominfo</strong><span>SPBE Infrastructure Internship</span></div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="container">
          <div className="section-heading">
            <div><span className="section-number">01</span><span className="eyebrow-text">SELECTED WORK</span></div>
            <p>Projects chosen for the engineering story they tell, not just the technologies they use.</p>
          </div>

          <div className="projects-list">
            {projects.map((project, idx) => (
              <article className={`project-row ${idx % 2 ? "project-reverse" : ""}`} key={project.slug}>
                <Link className="project-visual-link" href={`/projects/${project.slug}`} aria-label={`Read ${project.title} case study`}>
                  <ProjectVisual title={project.title} index={project.index} accent={project.accent} />
                </Link>
                <div className="project-copy">
                  <div className="project-topline"><span>{project.index}</span><span>{project.eyebrow}</span><span>{project.year}</span></div>
                  <h2>{project.title}</h2>
                  <p>{project.summary}</p>
                  <div className="tag-row">{project.stack.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <Link className="text-link" href={`/projects/${project.slug}`}>View case study <span>↗</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section extra-section">
        <div className="container">
          <div className="section-heading compact">
            <div><span className="section-number">02</span><span className="eyebrow-text">MORE ENGINEERING</span></div>
            <p>Additional experiments and systems across backend, ML integration, commerce, and automation.</p>
          </div>
          <div className="extra-grid">
            {extraProjects.map((project) => (
              <a className="extra-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                <span className="extra-arrow">↗</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <small>{project.stack}</small>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience">
        <div className="container">
          <div className="section-heading">
            <div><span className="section-number">03</span><span className="eyebrow-text">EXPERIENCE</span></div>
            <p>A path from native Android to machine learning, backend systems, and software used in real operational contexts.</p>
          </div>
          <div className="timeline">
            {experience.map((item, index) => (
              <div className="timeline-item" key={item.period}>
                <div className="timeline-index">0{index + 1}</div>
                <div className="timeline-period">{item.period}</div>
                <div className="timeline-main"><h3>{item.org}</h3><div className="timeline-role">{item.role}</div></div>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="container about-grid">
          <div className="section-kicker"><span className="section-number">04</span><span className="eyebrow-text">ABOUT</span></div>
          <div className="about-copy">
            <h2>I like building where <em>mobile apps, APIs, data, and people&apos;s workflows meet.</em></h2>
            <p>I started with native Android development, expanded into machine learning, and then moved deeper into backend and product engineering. Today my work spans Kotlin, Flutter, Laravel, Firebase, REST APIs, and applied integrations.</p>
            <p>I graduated from Politeknik Negeri Bengkalis with a Bachelor of Applied Science in Software Engineering, GPA 3.72/4.00, with Cumlaude honors.</p>
          </div>
        </div>

        <div className="container stack-grid">
          <div className="stack-card"><span>01</span><h3>Backend Engineering</h3><p>Laravel · REST APIs · MySQL · Authentication · Admin workflows · Payments</p><small>Monitoring TA · Jastip · 7KAIH · Lapor Infra</small></div>
          <div className="stack-card"><span>02</span><h3>Mobile Engineering</h3><p>Kotlin · Android · Jetpack Compose · Flutter · Retrofit · Firebase</p><small>SpotGacor · Monitoring TA · MUDAH CATAT · ResikApp</small></div>
          <div className="stack-card"><span>03</span><h3>Applied Integrations</h3><p>Google Maps · WhatsApp OTP · Midtrans · Computer Vision · Selenium · PDF</p><small>Turning external capabilities into complete product flows</small></div>
        </div>
      </section>

      <section className="section achievements-section">
        <div className="container">
          <div className="section-heading compact">
            <div><span className="section-number">05</span><span className="eyebrow-text">MILESTONES</span></div>
          </div>
          <div className="milestone-grid">
            <div><span>2025</span><strong>Cumlaude Graduate</strong><p>Software Engineering · GPA 3.72/4.00</p></div>
            <div><span>2025</span><strong>Outstanding Student Certificate</strong><p>Recognition for MSIB participation in Mobile Development and Machine Learning.</p></div>
            <div><span>2024</span><strong>Bangkit Academy ×2</strong><p>Completed Android Development and Machine Learning cohorts.</p></div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="container contact-inner">
          <span className="eyebrow-text">LET&apos;S BUILD SOMETHING USEFUL</span>
          <h2>Have a product, system, or idea worth building?</h2>
          <div className="contact-links">
            <a href="mailto:bayupratamaaguskurniawan@gmail.com">Email ↗</a>
            <a href="https://www.linkedin.com/in/bayu-pratama-agus-kurniawan-770798309/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href="https://github.com/bayupra7ama" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
          <div className="footer-line"><span>Bayu Pratama Agus Kurniawan</span><span>Riau, Indonesia · GMT+7</span><span>© 2026</span></div>
        </div>
      </section>
    </main>
  );
}
