import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Bayu Pratama Agus Kurniawan, Software Engineer.",
};

export default function ResumePage() {
  return (
    <>
      <header className="site-header resume-nav no-print">
        <Link className="brand" href="/">BAYU<span>.</span></Link>
        <nav><Link href="/#work">Work</Link><Link href="/#about">About</Link></nav>
        <a className="header-cta" href="mailto:bayupratamaaguskurniawan@gmail.com">Email me <span>↗</span></a>
      </header>

      <main className="resume-page">
        <div className="resume-toolbar no-print">
          <Link href="/">← Back to portfolio</Link>
          <button onClick={undefined} className="print-hint" aria-label="Use your browser print command">Print / Save PDF: Ctrl or Cmd + P</button>
        </div>

        <section className="resume-head">
          <div>
            <p className="eyebrow">SOFTWARE ENGINEER</p>
            <h1>Bayu Pratama<br />Agus Kurniawan</h1>
          </div>
          <div className="resume-contact">
            <a href="mailto:bayupratamaaguskurniawan@gmail.com">bayupratamaaguskurniawan@gmail.com</a>
            <a href="https://github.com/bayupra7ama">github.com/bayupra7ama</a>
            <a href="https://www.linkedin.com/in/bayu-pratama-agus-kurniawan-770798309/">LinkedIn</a>
            <span>Riau, Indonesia</span>
          </div>
        </section>

        <section className="resume-block">
          <h2>Experience</h2>
          <article className="resume-item">
            <div><strong>Dinas Komunikasi, Informatika, Statistik, dan Persandian Kota Pekanbaru</strong><span>Feb 2025 — Jun 2025</span></div>
            <h3>Intern · Infrastructure Service / SPBE</h3>
            <ul>
              <li>Built the Lapor Infra web system for handling network-infrastructure incident reports across OPD Kota Pekanbaru.</li>
              <li>Supported management, monitoring, evaluation, and documentation of SPBE digital infrastructure services.</li>
              <li>Contributed to administrative and technical activities related to technology-enabled public services.</li>
            </ul>
          </article>
          <article className="resume-item">
            <div><strong>Bangkit Academy · Kampus Merdeka MSIB Batch 7</strong><span>Sep 2024 — Dec 2024</span></div>
            <h3>Machine Learning Cohort</h3>
            <ul>
              <li>Studied and implemented supervised and unsupervised learning, CNN, and NLP fundamentals.</li>
              <li>Contributed to an AI capstone addressing a real-world problem with a multidisciplinary team.</li>
              <li>Collaborated across Machine Learning, Android Development, and Cloud Computing responsibilities.</li>
            </ul>
          </article>
          <article className="resume-item">
            <div><strong>Bangkit Academy · Kampus Merdeka MSIB Batch 6</strong><span>Feb 2024 — Jun 2024</span></div>
            <h3>Android Developer Cohort</h3>
            <ul>
              <li>Focused on Android development with Kotlin, Jetpack, MVVM, Retrofit, and Firebase.</li>
              <li>Collaborated on a mobile capstone integrating backend and machine-learning capabilities.</li>
            </ul>
          </article>
        </section>

        <section className="resume-block">
          <h2>Education</h2>
          <article className="resume-item">
            <div><strong>Politeknik Negeri Bengkalis</strong><span>Aug 2021 — Sep 2025</span></div>
            <h3>Bachelor of Applied Science · Software Engineering</h3>
            <p>GPA 3.72 / 4.00 · Cumlaude</p>
          </article>
        </section>

        <section className="resume-block resume-two-col">
          <div>
            <h2>Achievements</h2>
            <ul className="plain-list">
              <li><strong>Cumlaude Graduate</strong><span>Politeknik Negeri Bengkalis · 2025</span></li>
              <li><strong>Outstanding Student Certificate</strong><span>MSIB Mobile Development & Machine Learning · 2025</span></li>
              <li><strong>Bangkit Academy Certificate</strong><span>Machine Learning · Dec 2024</span></li>
              <li><strong>Bangkit Academy Certificate</strong><span>Android Development · Jun 2024</span></li>
            </ul>
          </div>
          <div>
            <h2>Skills</h2>
            <p><strong>Programming</strong><br />Kotlin · PHP · Python · Dart</p>
            <p><strong>Frameworks</strong><br />Laravel · Flutter · Jetpack Compose · Retrofit · TensorFlow · Scikit-learn · Flask</p>
            <p><strong>Tools</strong><br />Git/GitHub · Firebase · MySQL · REST API · Postman</p>
            <p><strong>Languages</strong><br />Bahasa Indonesia · English (Professional Working Proficiency)</p>
          </div>
        </section>

        <section className="resume-block">
          <h2>Selected Projects</h2>
          <div className="resume-projects">
            <div><strong>SpotGacor</strong><span>Kotlin · Laravel · Google Maps</span><p>Fishing spot discovery, maps, community reviews, and navigation.</p></div>
            <div><strong>Lapor Infra</strong><span>Laravel · Filament</span><p>Network infrastructure incident reporting workflow for OPD Kota Pekanbaru.</p></div>
            <div><strong>ResikApp</strong><span>Android · Computer Vision</span><p>Waste pickup and AI-assisted waste classification Bangkit capstone.</p></div>
            <div><strong>Monitoring TA</strong><span>Kotlin · Laravel</span><p>Student and supervisor final-project progress monitoring.</p></div>
          </div>
        </section>
      </main>
    </>
  );
}
