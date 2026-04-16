'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'What exactly does Ve record?',
    a: 'Ve captures what appears on your screen as searchable context, text, content, metadata. It never records video, never takes screenshots for sharing, and never sends anything off your device.',
  },
  {
    q: 'Will Ve slow down my Mac or drain my battery?',
    a: 'No. Ve is built to run silently all day. It uses less CPU than a browser tab and is optimised to have no noticeable impact on performance or battery life.',
  },
  {
    q: 'How is this different from Spotlight or browser history?',
    a: 'Spotlight searches files you have. Browser history shows you URLs. Ve searches the actual content that appeared on your screen, across every app, not just your browser, in plain language, not exact filenames.',
  },
  {
    q: 'Which apps does Ve watch?',
    a: 'Ve works across every app on your Mac, browsers, Slack, Zoom, email, Google Docs, PDFs, and anything else displayed on screen.',
  },
  {
    q: 'Is Ve really free?',
    a: "Recall is free, forever. No trial period, no credit card required. Download it, use it, and see if it earns a place in your workflow before you ever pay anything.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-label">FAQ</div>
        <h2 className="section-heading">Your questions, <span className="text-muted">answered with clarity</span></h2>

        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item${activeIndex === i ? ' active' : ''}`} key={i}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{faq.q}</span>
                <svg className="faq-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
