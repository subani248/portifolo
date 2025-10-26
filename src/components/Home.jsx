import { useEffect, useRef } from 'react'
import './Home.css'

const Home = () => {
  const particlesRef = useRef(null)

  useEffect(() => {
    const createParticles = () => {
      const particles = particlesRef.current
      if (!particles) return

      for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div')
        particle.className = 'particle'
        const size = Math.random() * 4 + 2
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.left = `${Math.random() * 100}%`
        particle.style.top = `${Math.random() * 100}%`
        particle.style.animationDelay = `${Math.random() * 8}s`
        particle.style.animationDuration = `${10 + Math.random() * 15}s`
        
        // Random colors
        const colors = ['var(--primary-color)', 'var(--secondary-color)', 'var(--accent-color)']
        particle.style.background = colors[Math.floor(Math.random() * colors.length)]
        
        particles.appendChild(particle)
      }
    }

    createParticles()
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="home-section">
      <div className="particles" ref={particlesRef}></div>
      <div className="animated-bg">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
        <div className="bg-shape shape-4"></div>
        <div className="scanline"></div>
      </div>
      
      <div className="home-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="greeting">Hello, I'm</span>
            <span className="name">mahabu suabni shaik</span>
          </h1>
          <p className="hero-subtitle">
            <span className="typing-text">MERN Stack Developer</span>
          </p>
          <p className="hero-description">
            I'm a MERN Stack Developer with a passion for creating beautiful and functional websites.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary" onClick={(e) => {
              e.preventDefault()
              scrollToSection('projects')
            }}>
              projects
            </a>
            <a href="#contact" className="btn btn-secondary" onClick={(e) => {
              e.preventDefault()
              scrollToSection('contact')
            }}>
              contact me
            </a>
          </div>
        </div>

        <div className="hero-image">
          <div className="image-wrapper">
            <div className="floating-card card-1"></div>
            <div className="floating-card card-2"></div>
            <div className="floating-card card-3"></div>
          </div>
        </div>
      </div>

      <div className="scroll-arrow">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  )
}

export default Home
