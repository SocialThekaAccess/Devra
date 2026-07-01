import { Link } from '../router'
import HeroSlider from '../components/HeroSlider'
import residentialImg from '../assets/residential.avif'
import Footer from '../components/Footer'
import { heroSlides } from '../content/heroSlides'
import { useMeta } from '../hooks/useMeta'
import { seoConfig } from '../seoConfig'
import './AboutPage.css'

const studioNotes = [
  'Luxury residences, hospitality spaces, schools, housing and commercial projects across Chandigarh, Mohali and Punjab.',
  'A process built around research, client clarity, technical coordination and long-term material value.',
  'Design language that moves between modern, classical, neo and parametric architecture with disciplined detailing.',
]

const values = [
  {
    id: 'vision',
    label: 'Our Vision',
    heading: 'Design depth\n& versatility',
    body: 'To build a practice trusted for its design depth and versatility, delivering modern, classical, neo and parametric architecture with one promise: thoughtful, precise and enduring work.',
  },
  {
    id: 'mission',
    label: 'Our Mission',
    heading: 'Clear, responsible\n& well-executed',
    body: 'To create architecture that is clear, responsible and well-executed. Every project follows a disciplined process, from research to coordination, ensuring spaces that serve people beautifully.',
  },
  {
    id: 'value',
    label: 'Core Value',
    heading: 'Integrity,\ncraft & trust',
    body: 'We work with integrity, technical rigor and transparent collaboration. Respect for context, craft and client trust guides every decision, shaping architecture built to last.',
  },
]

export default function AboutPage() {
  useMeta(seoConfig['/about-us'])

  return (
    <div className="about-page">
      <HeroSlider hideContent slides={heroSlides} />

      <section className="about-intro">
        <div className="about-intro__copy">
          <span className="about-intro__pill">About Devra Architects</span>
          <h1 className="about-intro__heading">
            Architecture shaped by clarity, craft and trust.
          </h1>
        </div>
        <p className="about-intro__body">
          Devra Architects is a New Chandigarh based architecture and interior
          design studio creating spaces that balance expressive design with
          practical execution. Each project is approached with careful planning,
          technical discipline and a deep respect for how people live, work and
          gather.
        </p>
      </section>

      <section className="about-values">
        {values.map((value, index) => (
          <div
            key={value.id}
            className={`about-values__item ${index % 2 !== 0 ? 'about-values__item--alt' : ''}`}
          >
            <div className="about-values__text">
              <span className="about-values__label">{value.label}</span>
              <h2 className="about-values__heading">
                {value.heading.split('\n').map((line, lineIndex, lines) => (
                  <span key={line}>
                    {line}
                    {lineIndex < lines.length - 1 && <br />}
                  </span>
                ))}
              </h2>
              <p className="about-values__body">{value.body}</p>
            </div>
            <div className="about-values__number" aria-hidden="true">
              0{index + 1}
            </div>
          </div>
        ))}
      </section>

      <section className="about-team">
        <div className="about-team__profile">
          <div className="about-team__image-wrap">
            <img
              src={residentialImg}
              alt="Ar. Varun Devra"
              className="about-team__image"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="about-team__content">
            <span className="about-team__pill">Studio Lead</span>
            <h2 className="about-team__heading">Ar. Varun Devra</h2>
            <p className="about-team__body">
              The studio is led with a focus on well-resolved planning,
              proportion, detailing and site coordination. The result is
              architecture that feels considered from first sketch to final
              handover.
            </p>
            <div className="about-team__notes">
              {studioNotes.map((note) => (
                <p key={note} className="about-team__note">
                  {note}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <h2 className="about-cta__heading">
          Ready to start
          <br />
          your project?
        </h2>
        <p className="about-cta__sub">Let's create something enduring together.</p>
        <Link to="/contact" className="about-cta__btn">
          Get in touch -&gt;
        </Link>
      </section>

      <Footer />
    </div>
  )
}
