import { Link } from '../router'
import HeroSlider from '../components/HeroSlider'
import residentialImg from '../assets/residential.avif'
import housingImg from '../assets/housing.avif'
import Footer from '../components/Footer'
import { heroSlides } from '../content/heroSlides'
import './AboutPage.css'

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

const team = [
  {
    id: 1,
    name: 'Ar. Varun Kumar Devra',
    role: 'Director & Principal Architect',
    img: residentialImg,
  },
  {
    id: 2,
    name: 'Pooja Devra',
    role: 'Director',
    img: housingImg,
  },
  {
    id: 3,
    name: 'Lakshay Devra',
    role: 'Director',
    img: housingImg,
  },
]

export default function AboutPage() {
  return (
    <div className="about-page">
      <HeroSlider hideContent slides={heroSlides} />

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
        <div className="about-team__header">
          <span className="about-team__pill">The People</span>
          <h2 className="about-team__heading">Meet the team</h2>
        </div>
        <div className="about-team__grid">
          {team.map((member) => (
            <div key={member.id} className="about-team__card">
              <div className="about-team__card-img-wrap">
                <img
                  src={member.img}
                  alt={member.name}
                  className="about-team__card-img"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="about-team__card-body">
                <h3 className="about-team__card-name">{member.name}</h3>
                <p className="about-team__card-role">{member.role}</p>
              </div>
            </div>
          ))}
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
