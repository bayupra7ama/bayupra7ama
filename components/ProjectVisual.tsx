import type { Project } from "../lib/projects";

export default function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (project.visual === "spot" && project.images) {
    return (
      <div className={"visual visual-spot " + (compact ? "visual-compact" : "")}>
        <div className="phone-stack" aria-hidden="true">
          {project.images.slice(0, 3).map((src, index) => (
            <div className={"phone phone-" + (index + 1)} key={src}>
              <img src={src} alt="" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (project.visual === "lapor" && project.images) {
    return (
      <div className={"visual visual-browser " + (compact ? "visual-compact" : "")}>
        <div className="browser-shell">
          <div className="browser-top"><i /><i /><i /><span>lapor-infra / dashboard</span></div>
          <img src={project.images[0]} alt="Lapor Infra application preview" />
        </div>
      </div>
    );
  }

  if (project.visual === "cashier") {
    return (
      <div className={"visual visual-cashier " + (compact ? "visual-compact" : "")}>
        <div className="cashier-grid" aria-hidden="true">
          <div className="cashier-phone">
            <div className="cashier-logo">
              {project.images?.[0] ? <img src={project.images[0]} alt="" /> : <span>MC</span>}
            </div>
            <strong>MUDAH CATAT</strong>
            <small>Sales · Debt · Reports</small>
          </div>
          <div className="receipt-card">
            <span>Today</span>
            <strong>Rp 2.480.000</strong>
            <div className="mini-bars"><i /><i /><i /><i /></div>
          </div>
          <div className="debt-card"><span>Piutang aktif</span><strong>12 pelanggan</strong></div>
        </div>
      </div>
    );
  }

  if (project.visual === "monitoring") {
    return (
      <div className={"visual visual-dashboard " + (compact ? "visual-compact" : "")}>
        <div className="dash-shell" aria-hidden="true">
          <div className="dash-side"><b>TA</b><i /><i /><i /></div>
          <div className="dash-main">
            <div className="dash-head"><span>Project progress</span><b>78%</b></div>
            <div className="progress-line"><i /></div>
            <div className="dash-cards"><div><b>12</b><span>Tasks</span></div><div><b>8</b><span>Done</span></div><div><b>3</b><span>Reports</span></div></div>
            <div className="burndown"><i /><i /><i /><i /><i /><i /></div>
          </div>
        </div>
      </div>
    );
  }

  if (project.visual === "resik") {
    return (
      <div className={"visual visual-resik " + (compact ? "visual-compact" : "")}>
        <div className="resik-orbit" aria-hidden="true">
          <div className="resik-logo">{project.images?.[0] ? <img src={project.images[0]} alt="" /> : "R"}</div>
          <span className="orbit orbit-a">AI classify</span>
          <span className="orbit orbit-b">Pickup</span>
          <span className="orbit orbit-c">Maps</span>
        </div>
      </div>
    );
  }

  return (
    <div className={"visual visual-school " + (compact ? "visual-compact" : "")}>
      <div className="journal-shell" aria-hidden="true">
        <div className="journal-title"><span>Daily Journal</span><b>7KAIH</b></div>
        <div className="habit-row"><i className="checked">✓</i><span>Bangun pagi</span><small>06:10</small></div>
        <div className="habit-row"><i className="checked">✓</i><span>Beribadah</span><small>Done</small></div>
        <div className="habit-row"><i>3</i><span>Berolahraga</span><small>30 min</small></div>
        <div className="journal-footer"><span>Parent journal</span><strong>5 / 7 complete</strong></div>
      </div>
    </div>
  );
}
