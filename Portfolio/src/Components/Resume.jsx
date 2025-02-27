import React from "react";
import CV from "../assets/resume.pdf";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export default function Resume() {
  return (
    <>
      <div className="container-fluid education-container">
        <p className="display-4 text-center fw-bolder pt-2">Resume</p>
        <div className="text-center">
          <img src="/resume.png" alt="Resume" className="img-fluid border border-2 border-dark" /> <br /><br />
          <a href={CV} download className="btn btn-success mt-3"><FontAwesomeIcon icon={faDownload} /> Download </a>
        </div>
      </div>
    </>
  );
}
