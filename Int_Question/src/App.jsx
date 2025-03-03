import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddCity from './Components/AddCity'
import SelectCity from './Components/SelectCity'

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AddCity/>}/>
      <Route path='/addUser' element={<SelectCity/>} />
    </Routes>
    </BrowserRouter>
    </>
  )
}
