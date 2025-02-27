import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const projects = [
  {
    title: "My Portfolio",
    description: [
      "My Portfolio Website made in React",
      "Making Responsive and userFriendly using Bootstrap",
      "Add the Resume also in Portfolio"
    ],
    github: "https://github.com/TrushitMarviya/Project/tree/main/Portfolio",
    live: "https://portfolioweb-a0711.web.app/",
    tags: ["React", "Bootstrap", "JavaScript","Firebase"], 
  },
  {
    title: "Money Manager",
    description: [
      "Money Manager Website made in React",
      "Fully customizable and dynamic, easily Add data.",
      "Making Responsive and userFriendly using MediaQuery"
    ],
    github: "https://github.com/TrushitMarviya/React-Js/tree/main/Money-Manager",
    live: "https://money-manager-3d85d.web.app/",
    tags: ["React", "Media Query","Firebase"],
  },
  {
    title: "Task Manager",
    description: [
      "Task Manager Website made in React",
      "Making Responsive and userFriendly using Bootstrap",
      "Uses Firebase for backend services"
    ],
    github: "https://github.com/TrushitMarviya/React-Js/tree/main/Task-Manager",
    live: "https://crud-project-1450e.web.app/",
    tags: ["React", "Firebase","MediaQuery"],
  },
  {
    title: "Number Counter",
    description: [
      "Number Counter Website made in React",
      "Making Responsive and userFriendly using Media Query",
      "Uses MediaQuery for responsive design"
    ],
    github: "https://github.com/TrushitMarviya/React-Js/tree/main/Counter%20React%20Project",
    live: "https://counter-app-62de7.web.app/",
    tags: ["React", "MediaQuery","Firebase"],
  },
  {
    title: "EMI Calculator",
    description: [
      "EMI Calculator Website UI made in React",
      "Making Responsive and userFriendly using Media Query",
      "Uses JavaScript for calculations"
    ],
    github: "https://github.com/TrushitMarviya/Project/tree/main/EMI%20Calculator",
    live: "https://emi-15537.web.app/",
    tags: ["React", "JavaScript","Firebase"],
  },
];

const Projects = () => {
  return (
    <div
    className="container-fluid border border-dark text-light" style={{ minHeight: "91.5vh", backgroundColor: "#000000" }}>
    <p className="display-4 text-center fw-bolder pt-2"> About</p>
    <div className="row mt-5">
{projects.map((project, index) => (
  <div key={index} className="col-md-4 mb-4">
    <div className="card  text-light border-light" style={{backgroundColor:"black"}}>
      <div className="card-body">
        <h5 className="card-title fw-bold">{project.title}</h5>
        <ul className="list-unstyled">
          {project.description.map((desc, i) => (
            <li key={i}>⚪  {desc}</li>
          ))}
        </ul>
        <div className="d-flex justify-content-center gap-2">
          {project.github && (
            <a href={project.github} className="btn btn-outline-light" target="_blank">
              GitHub
            </a>
          )}
          {project.live && (
            <a href={project.live} className="btn btn-outline-light" target="_blank">
              Live
            </a>
          )}
        </div>
      </div>
      <div className="card-footer bg-dark text-center">
        {project.tags.map((tag, i) => (
          <span key={i} className="badge bg-light text-dark me-2">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
))}
</div>
    </div>
  );
};

export default Projects;


