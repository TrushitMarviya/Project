import React from 'react'

export default function Home() {
  return (
    <>
    <div className="container-fluid border border-dark text-light" style={{height:"91.5vh",backgroundColor:"#000000"}}>
        <div className="row mt-5 pt-5">
        <div className="col-12 mt-5 pt-5">
            <p className="text-center display-2 fw-bolder">Trushit Marviya </p>
            <p className="text-center fs-2 fw-bolder mb-5">I'm Fullstack Web Developer</p>
            <center>
            <a href="https://www.linkedin.com/feed/" target='_blank'>
            <button type='button' className="btn btn-light text-center"  style={{backgroundColor:"white"}}>
            <i class="fa-brands fa-linkedin-in fs-3"></i>
            </button>
            </a>
            <a href="https://github.com/TrushitMarviya" target='_blank'>
            <button type='button' className="btn btn-light text-center ms-5"  style={{backgroundColor:"white"}}>
            <i class="fa-brands fa-github fs-3"></i>
            </button>
            </a>
            <a href="mailto:marviyatrushit0@gmail.com" target='_blank'>
            <button type='button' className="btn btn-light text-center ms-5 " style={{backgroundColor:"white"}}>
            <i class="fa-solid fa-envelope fs-3"></i>
            </button>
            </a>     
            </center>
        </div>
        </div>
    </div>
    </>
  )
}
