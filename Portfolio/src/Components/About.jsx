import React from "react";
import "../CSS/About.css";
export default function About() {
  return (
    <>
      <div
        className="container-fluid border border-dark text-light"
        style={{ minHeight: "91.5vh", backgroundColor: "#000000" }}
      >
        <p className="display-4 text-center fw-bolder pt-2"> About</p>
        <div className="container mt-5">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <p className="fs-5  text-justify-custom pt-5">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Hello, my name is Trushit Marviya
                and I am a full stack developer. I have a strong command over
                both front-end and back-end technologies, allowing me to build
                complete scalable applications.
              </p>
              <p className="fs-5  sm-fs-6  text-justify-custom">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  I am a dedicated and passionate full stack developer with a comprehensive understanding of both front-end and back-end technologies. My goal is to create efficient, scalable, and user-friendly applications.
              </p>
              <p className="fs-5 sm-fs-6  text-justify-custom">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  I specialize in JavaScript, CSS, React.Js, Node.js, and have experience
                working with various databases such as MongoDB . My
                passion for coding drives me to continue learn and adopt new
                technologies, ensure that the solutions I build are efficient
                and up-to-date. possess strong problem-solving abilities, excellent communication skills, and proficiency in both front-end and back-end development. I have experience with database management, am adaptable and a quick learner, and thrive as a team player with leadership qualities.
              </p>
            </div>
            <div className="col-lg-6 sm-fs-6 col-md-12 col-sm-12  ">
              <img src="/about.jpg" alt="" className="img-fluid  p-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
