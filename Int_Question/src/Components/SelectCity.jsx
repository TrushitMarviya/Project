import axios from "axios";
import React, { useEffect, useState } from "react";

export default function SelectCity() {
  const [cityName, setCityName] = useState([]);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [salary, setSalary] = useState("");
  const [mobile, setMobile] = useState("");
  const [users, setUser] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetchcity();
    fetchuser();
  },[]);

  const fetchcity = async () => {
    await axios.get("http://localhost:3000/city").then((res) => {
      setCityName(res.data);
    });
  };
  const fetchuser = async () => {
    await axios.get("http://localhost:3000/user").then((res) => {
      setUser(res.data);
    });
  };

  const handleAdd = async ()=>{

    if(editIndex == null){
    let addUser = await axios.post("http://localhost:3000/user",{id :Date.now().toString(),name,city,salary,mobile});
    console.log(addUser.data);
    setUser([...users,addUser.data]); 
  }else{
    let updateUser = await axios.put(`http://localhost:3000/user/${editIndex}`,{id : editIndex.toString(),name,city,salary,mobile});
    let updateData = users.map((item)=>{
      item.id === editIndex ?
      {
        ...item ,
      name: updateData.data.name,
      city: updateData.data.city,
      salary: updateData.data.salary,
      mobile: updateData.data.mobile
      } : item ;
    })
    setUser(updateData)
  }
  setName('');
  setCity('');
  setSalary('');
  setMobile('');
  }

  const handleDelete = async (id)=>{
    let delUser = await axios.delete(`http://localhost:3000/user/${id}`);
    setUser(users.filter((e)=>e.id !== id));    
  }
  
  const handleEdit = async (id) =>{
    let editUser = await axios.get(`http://localhost:3000/user/${id}`);
    setName(editUser.data.name);
    setCity(editUser.data.city);
    setSalary(editUser.data.salary);
    setMobile(editUser.data.mobile);
    setEditIndex(id);
  }

  return (
    <>
      <center>
        <br />
        <br />
        <h1>User Form</h1>
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <select name="city" value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">--Select City--</option>
          {cityName &&
           cityName.map((city)=>(
            <option key={city.id} value={city.name}>{city.name}</option>
           ))
          }
        </select>
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Salary"
          name="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Enter Mobile"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />
        <br />
        <br />
        <button id="bt1" onClick={handleAdd}>Add Data</button> <br />
        <br />
        <table width={"100%"} border={2}>
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Name</th>
              <th>City</th>
              <th>Salary</th>
              <th>Mobile No.</th>
              <th colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users &&
             users.map((e,i)=>{
              <tr key={i}>
                <td>{i+1}</td>
                <td>{e.name}</td>
                <td>{e.city}</td>
                <td>{e.salary}</td>
                <td>{e.mobile}</td>
                <td>
                  <button onClick={()=>handleEdit(e.id)}>
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button onClick={()=>handleDelete(e.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </td>
              </tr>
              })
            }
          </tbody>
        </table>
      </center>
    </>
  );
}
