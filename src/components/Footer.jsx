import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <p>&copy; {currentYear} Mahabu Suabni Shaik. All rights reserved.</p>
          </div>
          <div className="footer-right">
            <a href="https://github.com/subani248" className="footer-link" title="GitHub">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/subani-shaik-3201a42a9/" className="footer-link" title="LinkedIn">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
