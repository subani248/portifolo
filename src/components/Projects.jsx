import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import './Projects.css'
import learnifyImage from '../image/learnify.png'
import adviceImage from '../image/advice.png'
import clock from '../image/clock.png'
import form from '../image/form.png'
import vignan from '../image/vignan.png'
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Learnify (Learning Platform)',
      description: 'A modern learning platform featuring video courses, interactive quizzes, and a student-faculty dashboard.',
      image: learnifyImage,
      tags: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      liveLink: 'https://learnify-gq2h.vercel.app/',
      githubLink: 'https://github.com/subani248/learnify'
    },
    {
      id: 2,
      title: 'Random advice generator',
      description: 'Generate random advice with this simple and interactive advice generator.',
      image: adviceImage,
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://random-advice-generator-six-ashen.vercel.app/',
      githubLink: 'https://github.com/subani248/Random-advice-generator'
    },
    {
      id: 3,
      title: 'Clock/Stopwatch app',
      description: 'A simple clock and stopwatch app built with HTML, CSS, and JavaScript.',
      image: clock,
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://clock-one-beta.vercel.app/',
      githubLink: 'https://github.com/subani248/clock'
    },
    {
      id: 4,
      title: 'Form Validation',
      description: 'A simple form validation app built with HTML, CSS, and JavaScript.',
      image: form,
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveLink: 'https://from-validation-six.vercel.app/',
      githubLink: 'https://github.com/subani248/from-validation-'
    },
    {
      id: 5,
      title: 'student attendance system through qr code',
      description: 'A full-featured student attendance system through qr code with real-time tracking and analytics.',
      image: vignan,
      tags: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
      liveLink: 'https://capstone-project-ewlgkvhvk-subani248s-projects.vercel.app/',
      githubLink: 'https://github.com/subani248/capstone_project'
    }
  ]

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">Check out some of my recent work</p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={project.id} className="project-card" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.liveLink} className="project-link" title="View Live">
                      <FaExternalLinkAlt />
                    </a>
                    <a href={project.githubLink} className="project-link" title="View Code">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

