import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Page from "../components/Page";
import { Srch } from "../components/Search";
import "./HomePage.css";

function Home({ darkMode }) {
  const [employeeData, setEmployeeData] = useState([]);
  const [newEmployee, setEmployee] = useState({ name: "", price: "" });
  const [edit, setEdit] = useState(false);
  const [uid, setIndex] = useState(0);
  const [t, setTitle] = useState("");
  const [login, setT] = useState(false);

  function handleNameChange(e) {
    let emp = {
      name: e.target.value,
      age: newEmployee.age,
    };
    setEmployee(emp);
  }

  function handleAgeChange(e) {
    setEmployee({ ...newEmployee, age: e.target.value });
  }

  function handleSubmit(e) {
    if (edit) {
      setEmployeeData([
        ...employeeData.slice(0, uid),
        newEmployee,
        ...employeeData.slice(uid + 1, employeeData.length),
      ]);
      setEdit(false);
    } else {
      console.log(e);
      setEmployeeData([...employeeData, newEmployee]);
    }
    document.getElementById("name").value = "";
    document.getElementById("age").value = "";
  }

  const handleUpdate = (id) => {
    setEdit(true);
    setIndex(parseInt(id));
    document.getElementById("name").value = employeeData[id].name;
    document.getElementById("age").value = employeeData[id].age;
  };

  const handleDelete = (id) => {
    setEmployeeData([
      ...employeeData.slice(0, id),
      ...employeeData.slice(id + 1, employeeData.length),
    ]);

    console.log(id, [
      ...employeeData.slice(0, id),
      ...employeeData.slice(id + 1, employeeData.length),
    ]);
  };

  useEffect(() => {
    console.log("vakj");
    if (edit) {
      setTitle("You are updating an user");
    } else {
      setTitle("Crud operations");
    }
  },[edit]);

  // let employeeData = this.state.employeeData;
  return (
    <Page>
      <div
        id="id1"
        className="container App border0 font-family-sans-serif bgblue"
      >
        <h2>{t}</h2>
        <form onSubmit={(e) => handleSubmit(e)} className="myForm">
          <label> Name </label>
          <input
            type="text"
            placeholder="Enter your name"
            onChange={(e) => handleNameChange(e)}
            className="formField"
            id="name"
          />
          <label> Age </label>
          <input
            type="text"
            placeholder="Enter your Age"
            onChange={(e) => handleAgeChange(e)}
            className="formField"
            id="age"
          />
          <button type="submit"> Save-Submit </button>
        </form>
        <div className="container font-family-sans-serif bgblue">
          {employeeData.map((data) => (
            <div key={employeeData.indexOf(data)}>
              <label>{data.name} </label>
              <label>{data.age} </label>
              <button onClick={() => handleUpdate(employeeData.indexOf(data))}>
                {edit ? "" : "Edit"}
              </button>
              <button onClick={() => handleDelete(employeeData.indexOf(data))}>
                Delete
              </button>
            </div>
          ))}
        </div>
        <Srch SrchData={employeeData} />
        {/* <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        {employeeData.map((data) => {
          return (
            <tr key={employeeData.indexOf(data)}>
              
              <label>{data.name} </label>
              <label>{data.age} </label>
              <button onClick={() => handleUpdate(data.id)}>Edit</button>
              <button onClick={() => handleDelete(data.id)}>Delete</button>
            </tr>
          );
        })}
      </table> */}
        <style>{`.container{
        background: ${darkMode ? "#000" : "#fff"};
        color: ${darkMode ? "#fff" : "#000"}
      }
      .App{
        height: 100vh;
        width: 100vw;
      }
      
      `}</style>
      </div>
    </Page>
  );
}

export default Home;

/* import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

export default function HomePage({ darkMode, text }) {
  const [a, setA] = useState(10);
  const [b, setB] = useState(16);

  function fn1() {
    setA(a + 1);
    setB(b + 1);
    console.log("Working");
  }
  if (darkMode) {
    document.getElementsByTagName("html")[0].style.background = "#000";
  }
  else{
    document.getElementsByTagName("html")[0].style.background = "#fff";
  }
  return (
    <>
      <div id="home">Home</div>
      <Button fn={fn1} a={a} b={b} rohan={"rohan"}>
        <button>go to Aboutpage {text}</button>
      </Button>
      <br />
      <a href="https://google.com">Google</a>
    </>
  );
}
 */
