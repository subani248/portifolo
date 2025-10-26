import { useState } from 'react'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitStatus('sending')

    // EmailJS configuration
    const serviceID = 'service_z54sn3m' // Replace with your EmailJS service ID
    const templateID = 'template_mt09fnl' // Replace with your EmailJS template ID
    const publicKey = 'xqlHmdSQBgFUo9RAk' // Replace with your EmailJS public key

    // Prepare template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
      to_email: 'subanishaik248@gmail.com' // Your email
    }

    // Send email using EmailJS
    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
        
        setTimeout(() => {
          setSubmitStatus('')
        }, 3000)
      })
      .catch((error) => {
        console.error('Email sending failed:', error)
        setSubmitStatus('error')
        
        setTimeout(() => {
          setSubmitStatus('')
        }, 3000)
      })
  }

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <p className="section-subtitle">Let's collaborate on your next project</p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <FaEnvelope />
              </div>
              <div>
                <h4>Email</h4>
                <a href="mailto:subanishaik248@gmail.com">subanishaik248@gmail.com</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaPhone />
              </div>
              <div>
                <h4>Phone</h4>
                <a href="tel:+917569337729">+91 7569337729</a>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4>Location</h4>
                <p>Hyderabad, India</p>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/subani248" className="social-link" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/subani-shaik-3201a42a9/" className="social-link" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="https://www.instagram.com/beyond_lens_subani/" className="social-link" title="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn btn-primary" disabled={submitStatus === 'sending'}>
              {submitStatus === 'sending' ? 'Sending...' : submitStatus === 'success' ? 'Message Sent! ✓' : submitStatus === 'error' ? 'Failed. Try Again' : 'Send Message'}
            </button>
            
            {submitStatus === 'success' && (
              <p className="form-message success">Thank you! Your message has been sent successfully.</p>
            )}
            {submitStatus === 'error' && (
              <p className="form-message error">Oops! Something went wrong. Please try again.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
