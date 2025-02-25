import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Skill from "./Components/Skill";
import Education from "./Components/Education";
import Project from "./Components/Project";
import Resume from "./Components/Resume";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Skill" element={<Skill />} />
          <Route path="/Education" element={<Education />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
