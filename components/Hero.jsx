export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <img src="https://framerusercontent.com/images/LzblaeZXHMibAuWgYhFsP59pXk.png?width=2912&height=1632" alt="" />
        <div className="hero-bg-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title">
          Stop hunting for<br />
          <span className="hero-title-italic">things you&apos;ve</span><br />
          <span className="hero-title-italic">already seen.</span>
        </h1>
        <p className="hero-subtitle">
          Ve watches what you work on, silently, privately, so you can search your entire screen history in plain language. No folders. No filenames. Just ask.
        </p>
        <a href="#" className="btn btn-primary hero-btn">Download Ve Free &rarr;</a>
        <div className="trust-chips">
          <span>No credit card</span>
          <span className="chip-dot"></span>
          <span>Mac app</span>
          <span className="chip-dot"></span>
          <span>Free forever</span>
        </div>
        <p className="privacy-line">Ve never records video. Your data never leaves your Mac.</p>
      </div>
    </section>
  );
}
