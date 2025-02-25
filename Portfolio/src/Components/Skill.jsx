import React from 'react';
import '../CSS/Skill.css'; 

export default function Skill() {
  return (
    <>
      <div className="container-fluid border border-dark text-light" style={{minHeight:"91.5vh",backgroundColor:"#000000"}}>
        <p className="display-4 text-center fw-bolder pt-2">Skill</p>
        <div className="container">
          <div className="row"></div>
          <div className="container col-12 text-center fw-semibold">
            <p className='fs-4 col-sm-text-start'>I love to learn new things and experiment with new technologies. <br />
            These are some of the major languages, technologies, tools and platforms I have worked with:</p>  <br />
            <div className="row fs-4">
              <div className="col-md-3 col-sm-6 col-6 skill-item">
                <img src="/html.png" alt="Tailwind CSS Logo" className="skill-logo"/>
                <p>Html-5</p>
              </div>
              <div className="col-md-3 col-sm-6 col-6 skill-item">
                <img src="/css.svg" alt="Tailwind CSS Logo" className="skill-logo "/>
                <p>CSS-3</p>
              </div>
              <div className="col-md-3 col-sm-6 col-6 skill-item">
                <img src="/j_query.png" alt="Tailwind CSS Logo" className="skill-logo"/>
                <p>J Query</p>
              </div>
              <div className="col-md-3 col-sm-6 col-6 skill-item">
                <img src="/bootstrap.png" alt="Tailwind CSS Logo" className="skill-logo"/>
                <p>Bootstrap</p>
              </div>
              <div className="col-md-3 col-sm-6 col-6 skill-item">
                <img src="/tailwind.png" alt="Tailwind CSS Logo" className="skill-logo"/>
                <p>Tailwind CSS</p>
              </div>
              <div className="col-md-3 col-sm-6 col-6 skill-item">
                <img src="/c.png" alt="Tailwind CSS Logo" className="skill-logo"/>
                <p>C</p>
              </div>
              <div className="col-md-3 col-sm-6 col-6 skill-item">
                <img src="/c++.png" alt="Tailwind CSS Logo" className="skill-logo" />
                <p>C++</p>
              </div>
              <div className="col-md-3 col-sm-6 col-6 skill-item">
                <img src="/js.png" alt="Tailwind CSS Logo" className="skill-logo" />
                <p>Java Script</p>
              </div>
              <div className="col-md-3 col-sm-6 col-6 skill-item">
                <img src="/React.webp" alt="Tailwind CSS Logo" className="skill-logo"/>
                <p>React Js</p>
              </div>
              <div className="col-md-3 col-sm-6 col-6 skill-item">
                <img src="/node.png" alt="Tailwind CSS Logo" className="skill-logo"/>
                <p>Node Js</p>
              </div>
              <div className="col-md-3 col-sm-6 col-6 skill-item">
                <img src="/mongo.webp" alt="Tailwind CSS Logo" className="skill-logo"/>
                <p>Mongo db</p>
              </div>
              <div className="col-md-3 col-sm-6 col-6 skill-item">
                <img src="/git.png" alt="Tailwind CSS Logo" className="skill-logo"/>
                <p>Github</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
