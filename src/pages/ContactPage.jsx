import { useState } from 'react'
import { Link } from '../router'
import devraLogo from '../assets/devraLogo.png'
import recognitionImg from '../assets/residential.avif'
import Footer from '../components/Footer'
import './ContactPage.css'

const subjects = [
  'Design a housing project',
  'Residential architecture',
  'Commercial architecture',
  'Interior design / Room transformation',
  'Hospitality project',
  'School / Institutional project',
  'Farm house design',
  'Other',
]

export default function ContactPage() {
  const [form, setForm] = useState({
    subject: subjects[0],
    fullName: '',
    phone: '',
    location: '',
    email: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handle = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const emailSubject = encodeURIComponent(`Devra enquiry: ${form.subject}`)
    const emailBody = encodeURIComponent(
      [
        `Subject: ${form.subject}`,
        `Name: ${form.fullName || 'Not provided'}`,
        `Phone: ${form.phone || 'Not provided'}`,
        `Location: ${form.location}`,
        `Email: ${form.email}`,
        '',
        'Project description:',
        form.description,
      ].join('\n'),
    )

    window.location.href = `mailto:info@devra.in?subject=${emailSubject}&body=${emailBody}`
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      <Link to="/" className="contact-back">
        &lt;- Back
      </Link>

      <header className="contact-logo-wrap">
        <Link to="/">
          <img src={devraLogo} alt="Devra" className="contact-logo" />
        </Link>
      </header>

      <main className="contact-main">
        <div className="contact-heading-wrap">
          <h1 className="contact-heading">
            Where your vision
            <br />
            takes form
          </h1>
          <p className="contact-sub">
            Our team is ready to listen, imagine, and craft spaces that breathe with purpose.
          </p>
        </div>

        <div className="contact-info-bar">
          <a href="tel:+919779662286" className="contact-info-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.65 3.3 2 2 0 0 1 3.62 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 5.49 5.49l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z" />
            </svg>
            Call us: +91 9779662286
          </a>
          <div className="contact-info-divider" />
          <a href="mailto:info@devra.in" className="contact-info-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email us: info@devra.in
          </a>
        </div>

        {!submitted ? (
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="subject">
                Subject*
              </label>
              <div className="contact-form__select-wrap">
                <select
                  id="subject"
                  name="subject"
                  className="contact-form__select"
                  value={form.subject}
                  onChange={handle}
                  required
                >
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
                <svg className="contact-form__select-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </div>
            </div>

            <div className="contact-form__row">
              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  className="contact-form__input"
                  placeholder="Varun"
                  value={form.fullName}
                  onChange={handle}
                />
              </div>
              <div className="contact-form__group">
                <label className="contact-form__label" htmlFor="phone">Phone Number</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="contact-form__input"
                  placeholder="+91 83480..."
                  value={form.phone}
                  onChange={handle}
                />
              </div>
            </div>

            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="location">
                Project Location*
              </label>
              <input
                id="location"
                name="location"
                type="text"
                className="contact-form__input"
                placeholder="District, State, Country"
                value={form.location}
                onChange={handle}
                required
              />
            </div>

            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="email">Email Address*</label>
              <input
                id="email"
                name="email"
                type="email"
                className="contact-form__input"
                placeholder="you@gmail.com"
                value={form.email}
                onChange={handle}
                required
              />
            </div>

            <div className="contact-form__group">
              <label className="contact-form__label" htmlFor="description">Project Description*</label>
              <textarea
                id="description"
                name="description"
                className="contact-form__textarea"
                placeholder="Explain it in detail..."
                rows={4}
                value={form.description}
                onChange={handle}
                required
              />
            </div>

            <button type="submit" className="contact-form__submit">Submit</button>
          </form>
        ) : (
          <div className="contact-success">
            <h2 className="contact-success__heading">Check your email app</h2>
            <p className="contact-success__body">
              Your message details were prepared for `info@devra.in`. If no email window opened,
              you can also reach the team directly at +91 9779662286.
            </p>
            <Link to="/" className="contact-success__btn">Back to Home</Link>
          </div>
        )}
      </main>

      <div className="contact-recognition">
        <div className="contact-recognition__img-wrap">
          <img
            src={recognitionImg}
            alt="Royal Recognition - Architects Diary"
            className="contact-recognition__img"
            loading="lazy"
            decoding="async"
          />
          <div className="contact-recognition__badge">
            <div className="contact-recognition__badge-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
              </svg>
            </div>
            <div className="contact-recognition__badge-text">
              <span className="contact-recognition__badge-title">Royal Recognition</span>
              <span className="contact-recognition__badge-sub">Architects Diary</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
