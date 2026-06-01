import './Footer.css'

export function Footer() {

  return (
    <footer className="soda-footer">
      <div className="footer-top">
        <div className="brand">
          <span className="brand-mark">S</span>
          <div>
            <p className="brand-name">sodaFlix</p>
            <p className="brand-tag">Stream your next favorite movie</p>
          </div>
        </div>
        <nav className="footer-nav">
          <a href="/browse">Browse</a>
          <a href="/favorites">Favorites</a>
          <a href="/about">About</a>
        </nav>
      </div>

      <div className="footer-bottom">
        <p>© 2026 sodaFlix. Movies made simple.</p>
        <div className="footer-social">
          <a href="https://twitter.com" aria-label="Twitter">
            Twitter
          </a>
          <a href="https://instagram.com" aria-label="Instagram">
            Instagram
          </a>
          <a href="https://facebook.com" aria-label="Facebook">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  )
}