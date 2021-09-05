import React from "react";
import "./styles/EmpForm.css";

function Add() {
    document.getElementById("empForm").submit();
}

function Reset() {
    document.getElementById("empForm").reset();
}

function EmpForm (){
    return(
        <div className="container">
            <h1>Employee form</h1>
            <form id="empForm" action="post">

                <div className="row">
                    <div className="col-25">
                        <label>ROLE: </label>
                    </div>
                    <div className="col-75">
                        <select name="role" id="role">
                            <option value="Doctor">Doctor</option>
                            <option value="Nurse">Nurse</option>
                            <option value="Pharmacist">Pharmacist</option>
                        </select><br></br>
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label>EMPLOYEE NAME: </label>
                    </div>
                    <div className="col-75">
                        <input type="text" name="employee name" placeholder="John Doe"></input><br></br>
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label>EMAIL:  </label>
                    </div>
                    <div className="col-75">
                        <input type="email" name="email" placeholder="John23@gmail.com"></input><br></br>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-25">
                        <label>MOBILE: </label>
                    </div>
                    <div className="col-75">
                        <input type="numbers" name="mobile" placeholder="07xxxxxxxx"></input><br></br>
                    </div>
                </div>

                <div className="row">
                    <div className="col-25">
                        <label>ADDRESS:  </label>
                    </div>
                    <div className="col-75">
                        <input type="text" name="address" placeholder="No 10 West st, colombo"></input><br></br>
                    </div>
                </div>
                <br></br> 
                
                <div className="row-btn">
                    <input className="btn-danger" type="submit" onclick="Reset()" value="Reset"></input>
                    <input className="btn-primary"type="submit" onclick="Add()" value="Add"></input>
                </div>
                

            </form>
        </div>

    );
}

export default EmpForm;