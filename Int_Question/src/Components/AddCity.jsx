import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddCity() {
    const [city , setCity] = useState('');
    const navigate = useNavigate();
    const handleAdd = async()=>{
        let cityName = {id: Date.now().toString(),name:city}
        await axios.post("http://localhost:3000/city",cityName)
        setCity('');
        navigate('/addUser')
    }


  return (
    <>
<center> <br /><br />
<h1>Add-City</h1> <br /><br />
    <input type="text" placeholder='Enter City Name' value={city} onChange={(e)=>setCity(e.target.value)} /> <br /><br />
    <button id='bt1' onClick={handleAdd}>Add City</button>
</center>
    </>
  )
}
