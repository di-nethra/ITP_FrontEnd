import labreport from '../../assets/images/labreport.svg'
import './labreport.css'
import TestDataService from '../../services/tests.service';
import React, { useState } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";
export default function LabReport() {

    let history = useHistory();

    const [specimenid, setSpecimenid] = useState("");
    const [contactnumber, setContactnumber] = useState("");

    const handleInputChangespecimenid = (event) => {
        setSpecimenid(event.target.value);
    };
    const handleInputChangecontact = (event) => {
        setContactnumber(event.target.value);
    };

    const submitTest = (e) => {
        e.preventDefault();
        //const data = {
        // specimenid: specimenid,
        // contactnumber: contactnumber,
        //};

        TestDataService.findByCNandID(contactnumber, specimenid)
            .then((response) => {
                //const data = response.data
                if (response.status === 200) {
                    //console.log(response.data._id);   
                    history.push("/labreport/download/" + response.data._id);
                }

            }
            )
            .catch((e) => {
                Swal.fire(
                    "Test Not Found",
                    "Please Check the bill and enter correct specimen id and contact number",
                    "error"
                );
                // alert(e);
                console.log("ERROR : " + e);
            });
    };


    return (
        <div class="detailsbock11">
            <span className="newUserTitle11">Lab Reports</span><br></br>
            <div class="detailsbock12">
                <form className="newUserForm11" onSubmit={submitTest}>
                    <div className="newUserItem11">
                        <label>Specimen ID(Printed on bill)</label>
                        <input
                            name="specimenid"
                            required
                            type="text"
                            minLength="3"
                            maxLength="3"
                            value={specimenid}
                            placeholder="Ex:100"
                            onChange={handleInputChangespecimenid}
                        />
                    </div>
                    <div className="newUserItem11">
                        <label>Mobile Number(Printed on bill)</label>
                        <input

                            name="contactnumber"
                            type="text"
                            required
                            minLength="10"
                            maxLength="10"
                            placeholder="Enter mobile number"
                            value={contactnumber}
                            onChange={handleInputChangecontact}

                        />
                    </div>

                    <button className="newUserButton11">Get Lab Reports</button>
                </form>
                <img src={labreport} alt="labreports" style={{ height: 400, width: 400 }} class="imglab" />
            </div>

        </div>


    )
}
