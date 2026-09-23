import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectVisual from "../../../components/ProjectVisual";
import { getProject, projects } from "../../../lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <>
      <header className="site-header project-header">
        <Link className="brand" href="/">BAYU<span>.</span></Link>
        <nav>
          <Link href="/#work">Work</Link>
          <Link href="/#experience">Experience</Link>
          <Link href="/resume">Resume</Link>
        </nav>
        <Link className="header-cta" href="/#contact">Let&apos;s talk <span>↗</span></Link>
      </header>

      <main className="project-page">
        <section className="project-hero section">
          <div className="project-hero-top">
            <Link className="back-link" href="/#work">← Selected work</Link>
            <span>{project.number} / 06</span>
          </div>
          <p className="eyebrow">{project.eyebrow.toUpperCase()}</p>
          <h1>{project.title}</h1>
          <p className="project-deck">{project.longSummary}</p>
          <div className="project-facts">
            <div><small>Role</small><strong>{project.role}</strong></div>
            <div><small>Year</small><strong>{project.year}</strong></div>
            <div><small>Type</small><strong>{project.type}</strong></div>
          </div>
        </section>

        <section className="project-showcase section">
          <ProjectVisual project={project} />
        </section>

        <section className="project-story section">
          <div className="story-column">
            <p className="eyebrow">THE CHALLENGE</p>
            <h2>{project.challenge}</h2>
          </div>
          <div className="story-column">
            <p className="eyebrow">THE APPROACH</p>
            <p className="story-large">{project.solution}</p>
            <div className="tag-list detail-tags">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
          </div>
        </section>

        <section className="project-highlights section">
          <p className="eyebrow">WHAT I BUILT</p>
          <div className="highlight-grid">
            {project.highlights.map((highlight, index) => (
              <div className="highlight-card" key={highlight}>
                <span>0{index + 1}</span>
                <p>{highlight}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="project-links section">
          <div>
            <p className="eyebrow">SOURCE</p>
            <h2>Explore the implementation.</h2>
          </div>
          <div className="source-links">
            {project.repo && <a href={project.repo} target="_blank" rel="noreferrer">GitHub repository <span>↗</span></a>}
            {project.secondaryRepo && <a href={project.secondaryRepo} target="_blank" rel="noreferrer">Backend repository <span>↗</span></a>}
          </div>
        </section>

        <section className="next-project section">
          <span>Next project</span>
          <Link href={"/projects/" + nextProject.slug}>
            <strong>{nextProject.title}</strong><i>↗</i>
          </Link>
        </section>
      </main>

      <footer>
        <span>© 2026 Bayu Pratama Agus Kurniawan</span>
        <Link href="/">Back home ↑</Link>
      </footer>
    </>
  );
}
