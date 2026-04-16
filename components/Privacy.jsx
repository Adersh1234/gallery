export default function Privacy() {
  const cards = [
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/></svg>,
      title: 'Processed, not stored permanently',
      desc: "Ve uses your screen data to power search, then discards it. It\u2019s not sitting in a database indefinitely.",
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      title: 'Never used to train AI models',
      desc: "Your data works for you, not for us. Nothing you see on your screen improves anyone else\u2019s product.",
    },
    {
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>,
      title: 'CASA Tier 2 certified',
      desc: 'Independent verification that Ve meets enterprise-grade security standards for how your data is handled in transit and at rest.',
    },
  ];

  return (
    <section className="privacy-section" id="privacy">
      <div className="container">
        <div className="section-label">Privacy</div>
        <h2 className="section-heading">Your screen data is handled <span className="text-muted">with the care it deserves.</span></h2>
        <p className="privacy-subhead">Ve is CASA Tier 2 certified, one of the most rigorous independent security standards for cloud applications.</p>

        <div className="privacy-grid">
          {cards.map((card, i) => (
            <div className="privacy-card" key={i}>
              <div className="privacy-card-icon">{card.icon}</div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </div>
          ))}
        </div>

        <p className="privacy-closer">No selling your data. No human browsing your screen. No permanent storage.</p>
      </div>
    </section>
  );
}
