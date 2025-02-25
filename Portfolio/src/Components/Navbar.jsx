import React from 'react';
import "../CSS/Navbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#212529"}}>
        <div className="container">
          <a className="navbar-brand text-light fs-3 ms-5" href="/">Portfolio</a>
          <button className="navbar-toggler custom-toggler border border-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse me-5" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-lg-0">
              <li className="nav-item ms-3">
              <Link to="/" className="nav-link active fs-5 text-light" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item ms-3">
                <Link to="/About" className="nav-link active fs-5 text-light" aria-current="page" >About</Link>
              </li>
              <li className="nav-item ms-3">
                <Link to="/Skill" className="nav-link active fs-5 text-light" aria-current="page">Skill</Link>
              </li>
              <li className="nav-item ms-3">
                <Link to="/Education" className="nav-link active fs-5 text-light" aria-current="page">Education</Link>
              </li>
              <li className="nav-item ms-3">
                <Link to="/Project" className="nav-link active fs-5 text-light" aria-current="page">Project</Link>
              </li>
              <li className="nav-item ms-3">
                <Link to="/Resume" className="nav-link active fs-5 text-light" aria-current="page">Resume</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
