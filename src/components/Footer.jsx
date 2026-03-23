import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <span className="footer-logo">TS<span className="footer-dot">.</span></span>
          <p className="footer-copy">
            © {year} Taru Sharma. Crafted with React &amp; passion.
          </p>
        </div>

        <div className="footer-center">
          <p className="footer-quote">
            <em>"Code is like humor. When you have to explain it, it's bad."</em>
          </p>
        </div>

        <div className="footer-right">
          <button
            className="back-to-top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 15l-6-6-6 6"/>
            </svg>
            <span>Back to top</span>
          </button>
        </div>
      </div>

      {/* Big watermark */}
      <div className="footer-watermark" aria-hidden="true">TARU</div>
    </footer>
  );
}
