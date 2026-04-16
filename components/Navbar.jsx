'use client';

import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#" className="nav-logo">
          <img src="https://us.images.ve.ai/public/dashboard/image.png" alt="Ve" className="logo-icon" />
        </a>
        <div className="nav-links">
          <a href="#how-it-works" onClick={(e) => handleClick(e, '#how-it-works')}>How It Works</a>
          <a href="#features" onClick={(e) => handleClick(e, '#features')}>Features</a>
          <a href="#privacy" onClick={(e) => handleClick(e, '#privacy')}>Privacy</a>
          <a href="#faq" onClick={(e) => handleClick(e, '#faq')}>FAQ</a>
        </div>
        <a href="#" className="nav-cta">Download Free</a>
        <button className="mobile-menu-btn" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
}
