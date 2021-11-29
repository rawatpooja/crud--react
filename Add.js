import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Select from "react-select";
const Add = () => {
  let item = [];
  const [data, setdata] = useState(item);
  const [status1, setstatus1] = useState(true);
  const [status2, setstatus2] = useState(false);
  const [status3, setstatus3] = useState(false);
  const [status4, setstatus4] = useState(false);
  const [status5, setstatus5] = useState(false);
  const [displayValue, setdisplayValue] = useState([]);
  const [statusShow, setstatusShow] = useState(false);
  const [addData, setaddData] = useState({
    name: "",
    age: "",
    height: "",
    
  });
   const multiselect = [
    { label: "Batsman", value: "Batsman" },
    { label: "Bolwer", value: "Bolwer" },
    { label: "Wicket-keeper", value: "Wicket-keeper" },
    { label: "Fielder", value: "Fielder" },
    { label: "All-rounder", value: "All-rounder" },
  ];

  useEffect((data) => {
  // localStorage.setItem("data", JSON.stringify(data));
  // setdata(data);
  }, []);
  const selectChange = (e) => {
    setdisplayValue(Array.isArray(e) ? e.map((x) => x.value) : []);
    console.log(displayValue);
    console.log(e);
   };
   const addDataChange = (e) => {
    setaddData({ ...addData, [e.target.name]: e.target.value});
   };

  const onSubmit1 = (event) => {
    event.preventDefault();
    data.push({addData ,displayValue});
    localStorage.setItem("data", JSON.stringify(data));
    console.log("addFormData,", data);
    setdata([...data]);
    setstatus1(false);
    setstatus2(true);
    setaddData("");
  };
  const onSubmit2 = (event) => {
    event.preventDefault();
    data.push({addData ,displayValue});
    localStorage.setItem("data", JSON.stringify(data));
    console.log("addFormData,", data);
    setdata([...data]);
    setstatus2(false);
    setstatus3(true);
    setaddData("");
  };
  const onSubmit3 = (event) => {
    event.preventDefault();
    data.push({addData, displayValue});
    localStorage.setItem("data", JSON.stringify(data));
    console.log("addFormData,", data);
    setdata([...data]);
    setstatus3(false);
    setstatus4(true);
    setaddData("");
  };
  const onSubmit4 = (event) => {
    event.preventDefault();
    data.push({addData, displayValue});
    localStorage.setItem("data", JSON.stringify(data));
    console.log("addFormData,", data);
    setdata([...data]);
    setstatus4(false);
    setstatus5(true);
    setaddData("");
  };
  const onSubmit5 = (event) => {
    event.preventDefault();
    data.push({addData, displayValue});
    localStorage.setItem("data", JSON.stringify(data));
    console.log("addFormData,", data);
    setdata([...data]);
    setstatus5(false);
    setstatusShow(true);
    setaddData("");
  };

  return (
    <div>
      <div className="addp"><Link to="/">Add Player</Link></div>{" "}<div className="showp"><Link to="/show1">show Player</Link></div>
      <div className="App">
        {status1 ? (
          <form className="myForm" onSubmit={onSubmit1}>
            <h1>Choose Player</h1>
            Name
            <input type="text" className="formField" name="name" onChange={addDataChange} required/>
            Age
            <input type="number"  className="formField" name="age" onChange={addDataChange} required />
            Height
            <input type="text" className="formField" name="height" onChange={addDataChange} required/>
            Roll
            <Select name="roll" options={multiselect} isMulti onChange={selectChange} required/><br/>
            <button type="submit" className="btn2"> Add</button>
          </form>) : null}
         {status2 ? (
          <form className="myForm" onSubmit={onSubmit2}>
          Name
            <input type="text" className="formField" name="name" onChange={addDataChange} required/>
            Age
            <input type="text" className="formField" name="age" onChange={addDataChange} required/>
            Height
            <input type="text" className="formField" name="height" onChange={addDataChange} required/>
            Roll
            <Select name="roll" options={multiselect} isMulti onChange={selectChange} required/><br/>
            <button type="submit" className="btn2"> Add</button>
          </form> ) : null}
         {status3 ? (
          <form className="myForm" onSubmit={onSubmit3}>
          Name
            <input type="text" className="formField" name="name" onChange={addDataChange} required/>
            Age
            <input type="text" className="formField" name="age" onChange={addDataChange} required/>
            Height
            <input type="text" className="formField" name="height" onChange={addDataChange} required/>
            Roll
            <Select name="roll" options={multiselect} isMulti onChange={selectChange} required/><br/>
            <button type="submit" className="btn2"> Add</button>
          </form>) : null}
         {status4 ? (
          <form className="myForm" onSubmit={onSubmit4}>
          Name
            <input type="text" className="formField" name="name"  onChange={addDataChange} required/>
            Age
            <input type="text" className="formField" name="age" onChange={addDataChange} required/>
            Height
            <input type="text" className="formField" name="height" onChange={addDataChange} required/>
            Roll
            <Select name="roll" options={multiselect} isMulti onChange={selectChange} required/><br/>
            <button type="submit" className="btn2"> Add</button>
          </form>) : null}
        {status5 ? (
          <form className="myForm" onSubmit={onSubmit5}>
          Name
            <input type="text" className="formField" name="name" onChange={addDataChange} required/>
            Age
            <input type="text" className="formField" name="age" onChange={addDataChange} required/>
            Height
            <input type="text" className="formField" name="height" onChange={addDataChange} required/>
            Roll
            <Select name="roll" options={multiselect} isMulti onChange={selectChange} required/><br/>
            <button type="submit" className="btn2"> Add</button>
          </form> ) : null}
        {statusShow ? (
          <div>
            {data.length >= 5 && ( <div className="five"> Done five members
                <div>add more click add button</div>
                <button type="button" onClick={() => {
                    setstatus1(true);
                    setstatusShow(false);
                  }} >Add </button>
              </div>
            )}
          </div> ) : null}
      </div>
    </div>
  );
};
export default Add;
