import '../css/Projects.css';

function Project({ projects }) {
  return (
    <div id='projects'>
        <h2>Projects And Work</h2>
        <div className="projects-cards-container">
          {projects.map((project, index) => (
            <div className="projects-card" key={index}>
              <div className="projects-card-image-container">
                <img src={project.image} alt={project.title} className="projects-card-image" />
              </div>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link back-black">
                <i class="zmdi zmdi-github-alt font-white github-logo"></i>
              </a>
              <div className="projects-card-content">
                <h3>{project.language}</h3>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default Project;