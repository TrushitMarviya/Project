import js from "@eslint/js";
import React, { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [month, setMonth] = useState("");
  const [record, setRecord] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Record")) || [];
    setRecord(data);
  }, []);

  const handleAdd = () => {
    let r = rate / (12 * 100);
    let m = month * 1;
    let monthEmi = (principal * r * Math.pow(1 + r, m)) / (Math.pow(1 + r, m) - 1);
    let TotalEmi = monthEmi * month - principal;
    const oldRec = JSON.parse(localStorage.getItem("Record")) || [];
    if (editIndex) {
      let data = record.map((item) =>
        item.id == editIndex
          ? { id: item.id, name, principal, rate, month, monthEmi, TotalEmi }
          : item
      );
      setRecord(data);
      localStorage.setItem("Record", JSON.stringify(data));
      setEditIndex(null);
    } else {
      const obj = {
        id: Date.now(),
        name,
        principal,
        rate,
        month,
        monthEmi,
        TotalEmi,
      };
      oldRec.push(obj);
      setRecord(oldRec);
      localStorage.setItem("Record", JSON.stringify(oldRec));
    }
    setName("");
    setPrincipal("");
    setRate("");
    setMonth("");
  };

  const handleDelete = (id) => {
    let updatedRec = record.filter((item) => item.id != id);
    setRecord(updatedRec);
    localStorage.setItem("Record", JSON.stringify(updatedRec));
  };
  const handleEdit = (id) => {
    let editRec = record.find((item) => item.id == id);
    setName(editRec.name);
    setPrincipal(editRec.principal);
    setRate(editRec.rate);
    setMonth(editRec.month);
    setEditIndex(id);
  };

  return (
    <div className="container">
      <center>
        <h1>EMI Calculator</h1>
        <br />
        <br />
        <input
          type="text"
          placeholder="User Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Loan Amount"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Rate of Interest"
          value={rate}
          onChange={(e) => setRate(e.target.value)}
        />
        <br />
        <input
          type="number"
          placeholder="Time (Months)"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        />
        <br />
        <button id="bt1" onClick={handleAdd}>
          {editIndex ? " Update Detail" : " Add Detail"}
        </button>
        <br />
        <br />
        <table border={2} width={"100%"}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Loan Amount</th>
              <th>Rate Interest</th>
              <th>Time (Months)</th>
              <th>Monthly Interest</th>
              <th>Total Interest</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {record &&
              record.map((e, i) => (
                <tr key={i}>
                  <td>{e.name}</td>
                  <td>{e.principal}</td>
                  <td>{e.rate} %</td>
                  <td>{e.month}</td>
                  <td>{e.monthEmi.toFixed(0)} </td>
                  <td>{e.TotalEmi.toFixed(0)} </td>
                  <td>
                    <button id="bt2" onClick={() => handleDelete(e.id)}>
                      <i className="fa-solid fa-trash"></i>
                    </button>
                    <button id="bt3" onClick={() => handleEdit(e.id)}>
                      <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </center>
    </div>
  );
}
