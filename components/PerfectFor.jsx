export default function PerfectFor() {
  const personas = [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
      title: 'The Developer',
      desc: 'Find that one StackOverflow snippet from this morning, without scrolling through 40 browser tabs.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
      title: 'The Researcher',
      desc: 'Recall that specific stat from a report you closed yesterday. Ve finds the exact screen moment.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
      title: 'The Operator',
      desc: 'Search across Slack, Zoom, email, and docs in one place. In seconds.',
    },
  ];

  return (
    <section className="perfect-for-section">
      <div className="container">
        <div className="section-label">Perfect for</div>
        <h2 className="section-heading">Built for people who work <span className="text-muted">with information all day.</span></h2>

        <div className="personas-grid">
          {personas.map((p, i) => (
            <div className="persona-card" key={i}>
              <div className="persona-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
