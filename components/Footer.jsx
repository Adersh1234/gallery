export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <a href="#" className="nav-logo">
              <img src="https://us.images.ve.ai/public/dashboard/image.png" alt="Ve" className="logo-icon" />
            </a>
            <p className="footer-tagline">&ldquo;Intent as Interface&rdquo;</p>
          </div>
          <div className="footer-right">
            <div className="footer-col">
              <h4>Product</h4>
              <a href="#how-it-works">How It Works</a>
              <a href="#features">Features</a>
              <a href="#privacy">Privacy</a>
              <a href="#faq">FAQ</a>
            </div>
            <div className="footer-col">
              <h4>Legal</h4>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
            <div className="footer-col">
              <h4>Connect</h4>
              <a href="#">Help Center</a>
              <a href="#">Contact</a>
              <a href="#">LinkedIn</a>
              <a href="#">Twitter/X</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Ve. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
