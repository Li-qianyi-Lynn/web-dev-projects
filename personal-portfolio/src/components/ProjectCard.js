import { Col } from "react-bootstrap";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const ProjectCard = ({ title, description, imgUrl, link, githubLink }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div>
        {link ? (
          <a href={link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="proj-imgbx">
              <img src={imgUrl} alt={title} />
              <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
              </div>
            </div>
          </a>
        ) : (
          <div className="proj-imgbx">
            <img src={imgUrl} alt={title} />
            <div className="proj-txtx">
              <h4>{title}</h4>
              <span>{description}</span>
            </div>
          </div>
        )}
        {githubLink && (
          <div className="proj-github-link" style={{ textAlign: 'center', marginTop: '10px' }}>
            <a 
              href={githubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '8px',
                color: '#fff',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'opacity 0.3s ease-in-out'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
            >
              <img src={navIcon2} alt="GitHub" style={{ width: '20px', height: '20px' }} />
              <span>View on GitHub</span>
            </a>
          </div>
        )}
      </div>
    </Col>
  )
}
