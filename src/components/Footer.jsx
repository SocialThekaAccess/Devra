import devraLogoFooter from '../assets/devraLogoFooter.png'
import { Link } from '../router'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__left">
          <h2 className="footer__heading">
            Your ideas matter - together, we'll turn<br />
            them into timeless spaces.
          </h2>
          <Link to="/contact" className="footer__cta-btn">
            Get in touch&nbsp; -&gt;
          </Link>
        </div>

        <div className="footer__right">
          <div className="footer__nav">
            <h3 className="footer__nav-heading">Navigation</h3>
            <ul className="footer__nav-list">
              <li>
                <Link to="/services">Services&nbsp; -&gt;</Link>
              </li>
              <li>
                <Link to="/features">Features&nbsp; -&gt;</Link>
              </li>
              <li>
                <Link to="/vision">Vision&nbsp; -&gt;</Link>
              </li>
              <li>
                <Link to="/projects">Projects&nbsp; -&gt;</Link>
              </li>
            </ul>
          </div>

          <div className="footer__contact">
            <h3 className="footer__contact-heading">Contact us</h3>
            <a href="mailto:info@devra.in" className="footer__email">
              info@devra.in
            </a>
            <a href="tel:+919779662286" className="footer__phone">
              +91 9779662286
            </a>
            <div className="footer__socials">
              <a
                href="https://instagram.com/devra.architects"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.849s-.012 3.584-.07 4.85c-.063 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.335-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.063-1.366.335-2.633 1.31-3.608C4.517 2.567 5.784 2.295 7.15 2.233 8.416 2.175 8.796 2.163 12 2.163M12 0C8.741 0 8.332.014 7.052.072 5.197.155 3.497.675 2.343 1.829 1.189 2.983.669 4.683.586 6.538.528 7.818.514 8.227.514 12s.014 4.182.072 5.462c.083 1.855.603 3.555 1.757 4.709 1.154 1.154 2.854 1.674 4.709 1.757C8.332 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.855-.083 3.555-.603 4.709-1.757 1.154-1.154 1.674-2.854 1.757-4.709.058-1.28.072-1.689.072-5.462s-.014-4.182-.072-5.462c-.083-1.855-.603-3.555-1.757-4.709C20.503.675 18.803.155 16.948.072 15.668.014 15.259 0 12 0z" />
                  <path d="M12 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                  <circle cx="18.406" cy="5.594" r="1.44" />
                </svg>
              </a>
              <a
                href="https://x.com/devra_architects"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-btn"
                aria-label="X (Twitter)"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__watermark" aria-hidden="true">
        <img
          src={devraLogoFooter}
          alt=""
          className="footer__watermark-img"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="footer__bottom">
        &copy; {currentYear} DEVRA Architects. All rights reserved.
      </div>
    </footer>
  )
}
