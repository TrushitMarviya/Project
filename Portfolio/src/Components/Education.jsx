import React from 'react'
import '../CSS/Education.css'

const EducationCard = ({ title, university, year }) => (
  <div className="education-card unique-style">
    <p className='fs-2'>{title}</p>
    <p className="university fs-4">{university}</p>
    <p className="year fs-4" style={{ fontSize: '16px' }}>{year}</p>
    </div>
);

export default function Education() {
  return (
    <div className="container-fluid education-container">
      <p className="display-4 text-center fw-bolder pt-2">Education</p>
      <EducationCard
      details={[
      ]}
        title="Bachelor of Computer Apllication "
        university="Saurashtra University"
        year="2023 - 2026"
      />
      <EducationCard
        title="Higher Secondary Eduction"
        university="Shree Swaminarayan Gurukul"
        year="2021 - 2023"
        details={[
        ]}
      />
    </div>
  )
}
