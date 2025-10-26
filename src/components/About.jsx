import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaJava, FaPython } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import profileImage from '../image/subani.jpg'
import './About.css'

const About = () => {
  const [sectionRef, isVisible] = useScrollAnimation(0.2)
  
  const skills = [
    { icon: <FaPython />, name: 'python' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <FaJs />, name: 'JavaScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaGitAlt />, name: 'Git' }
  ]

  return (
    <section id="about" className="about-section section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">{isVisible && 'About Me'}</h2>
        
        <div className="about-content">
          <div className={`about-image ${isVisible ? 'animate-in' : ''}`}>
            <div className="profile-card">
              <div className="profile-img-wrapper">
                <img 
                  src={profileImage} 
                  alt="Profile" 
                  className="profile-img"
                />
                <div className="profile-overlay"></div>
              </div>
            </div>
          </div>

          <div className={`about-text ${isVisible ? 'animate-in' : ''}`}>
            <h3 className="about-heading">Passionate MERN developer </h3>
            <p className="about-description">
              I'm a MERN stack developer with a passion for creating innovative and user-friendly digital experiences.
            </p>
            <p className="about-description">
             My journey in web development began during my B.Tech, and now, as a third-year student, I’ve worked on several projects ranging from responsive websites to dynamic web applications. I’m continuously learning and exploring the latest technologies to enhance my skills.
            </p>  
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
