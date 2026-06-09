import { Link } from '../router'
import './CtaBanner.css'

export default function CtaBanner() {
  return (
    <section className="cta-banner-wrap" id="contact">
      <div className="cta-banner">
        <span className="cta-banner__dot" aria-hidden="true" />
        <h2 className="cta-banner__heading">Let's</h2>

        <p className="cta-banner__body">
          Whether you have a vision in mind or are just exploring, our team is
          here to bring beauty, purpose, and elegance to your space.
        </p>

        <Link to="/contact" className="cta-banner__btn">
          Let's talk&nbsp; -&gt;
        </Link>
      </div>
    </section>
  )
}
