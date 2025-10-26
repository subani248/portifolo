import { FaCertificate, FaAward, FaTrophy, FaMedal, FaArrowRight, FaTimes } from 'react-icons/fa'
import { useState } from 'react'
import './Certifications.css'
import chatgptImg from '../image/chatgpt.png'
import git from '../image/git.png'
import ai from '../image/ai.png'
import nptel from '../image/nptel.png'
import python from '../image/python.png'


const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null)

  const openCertificate = (cert) => {
    setSelectedCert(cert)
  }

  const closeCertificate = () => {
    setSelectedCert(null)
  }
  const certifications = [
    {
      id: 1,
      icon: <FaCertificate />,
      title: 'Mastering git for efficient version control',
      issuer: 'vignan university',
      date: 'march 2024',
      image: git,
      link: '#'
    },
    {
      id: 2,
      icon: <FaCertificate />,
      title: 'AI & ChatGPT hackathon',
      issuer: 'trchgyan (IIT hyd)',
      date: 'June 2025',
      image: chatgptImg,
      link: '#'
    },
    {
      id: 3,
      icon: <FaCertificate />,
      title: 'AI and ML with data science workshop', 
      issuer: 'edufabrica (IIT hyd)',
      date: 'March 2025',
      image: ai,
      link: '#'
    },
    {
      id: 4,
      icon: <FaCertificate />,
      title: 'princile of management (nptel)',
      issuer: 'NPTEL',
      date: 'April 2025',
      image: nptel,
      link: '#'
    },
    {
      id: 5,
      icon: <FaCertificate />,
      title: 'python programming',
      issuer: 'orcadehub',
      date: 'March  2025',
      image: python,
      link: '#'
    }
  ]

  return (
    <section id="certifications" className="certifications-section section">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">My professional achievements and credentials</p>

        <div className="certifications-grid">
          {certifications.map((cert, index) => (
            <div key={cert.id} className="cert-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="cert-icon">{cert.icon}</div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">Issued: {cert.date}</p>
              <button onClick={() => openCertificate(cert)} className="cert-link">
                View Certificate <FaArrowRight />
              </button>
            </div>
          ))}
        </div>

        {selectedCert && (
          <div className="cert-modal" onClick={closeCertificate}>
            <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="cert-modal-close" onClick={closeCertificate}>
                <FaTimes />
              </button>
              <div className="cert-modal-image-wrapper">
                <img src={selectedCert.image} alt={selectedCert.title} className="cert-modal-image" />
              </div>
              <div className="cert-modal-info">
                <h3>{selectedCert.title}</h3>
                <p className="modal-issuer">{selectedCert.issuer}</p>
                <p className="modal-date">Issued: {selectedCert.date}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Certifications
