export default function Features() {
  const features = [
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
      title: 'Stop the \u201Cwhere did I see that?\u201D hunt',
      desc: 'Ve surfaces anything from your screen history, instantly. The 15-minute hunt becomes a 5-second search.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
      title: 'One search. Every app.',
      desc: 'Slack, PDFs, email, browser tabs. Ve searches across all of it at once.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
      title: 'Ask like talking to a colleague',
      desc: 'Just describe what you remember: \u201Cthat funding slide from the pitch deck.\u201D Ve understands context, not keywords.',
    },
    {
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 11-2.12-9.36L23 10"/></svg>,
      title: 'Switch tasks without losing your place',
      desc: 'Close 12 tabs, start something new. Come back an hour later and pick up exactly where you were.',
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-label">Features</div>
        <h2 className="section-heading">What changes <span className="text-muted">in your day.</span></h2>

        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card" key={i}>
              <div className="feature-card-inner">
                <div className="feature-icon">{f.icon}</div>
                <h3 className="feature-title">{f.title}</h3>
                <p className="feature-desc">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
