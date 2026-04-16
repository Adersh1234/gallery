export default function HowItWorks() {
  const steps = [
    {
      num: '1',
      title: 'Ve runs quietly in the background',
      desc: 'No setup. No integrations. No files to organise. Ve starts working the moment you install it, across every app on your Mac.',
    },
    {
      num: '2',
      title: 'Everything you see is searchable',
      desc: 'Slack threads, PDFs, browser tabs, email, Zoom transcripts, Google Docs. If it appeared on your screen, Ve has it.',
    },
    {
      num: '3',
      title: 'Search in plain language',
      desc: '\u201CWhat was that pricing number from the call on Monday?\u201D \u201CFind that article about Series A benchmarks I had open yesterday.\u201D Ve finds it. In seconds.',
    },
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <div className="section-label">How it works</div>
        <h2 className="section-heading">Ask. <span className="text-muted">Ve finds it.</span></h2>

        <div className="steps-grid">
          {steps.map((step, i) => (
            <div className="step-card" key={i}>
              <div className="step-number">{step.num}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
