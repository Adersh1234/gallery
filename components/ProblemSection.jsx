export default function ProblemSection() {
  const painPoints = [
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
      text: 'That stat from the PDF you closed an hour ago.',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
      text: 'That Slack message from three days ago.',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>,
      text: 'That number you scrolled past in a spreadsheet.',
    },
    {
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
      text: 'That link you had open in a tab last Tuesday.',
    },
  ];

  return (
    <section className="problem-section">
      <div className="container">
        <div className="section-label">The problem</div>
        <h2 className="section-heading">
          You&apos;ve already seen the answer. <span className="text-muted">You just can&apos;t find it.</span>
        </h2>

        <div className="pain-points">
          {painPoints.map((point, i) => (
            <div className="pain-point" key={i}>
              <div className="pain-icon">{point.icon}</div>
              <p>{point.text}</p>
            </div>
          ))}
        </div>

        <div className="problem-closing">
          <p>The information exists. You&apos;ve already seen it. Every other tool expects you to save it, tag it, or remember where it lives.</p>
          <p className="punchline">Ve remembers instead.</p>
        </div>
      </div>
    </section>
  );
}
