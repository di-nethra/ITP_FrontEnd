import Swal from 'sweetalert2';
import React, { useState, useEffect } from "react";
import TestDataService from "../../../services/tests.service";
import { useParams } from "react-router";

export default function PatientUpdate() {

    const id = useParams();
    //console.log(id.topicId);
    const initialTestState = {
        specimenid: "",
        subbmitteddate: "",
        testtype: "",
        contactnumber: "",
        patientsname: "",
        status: "",
        dateofbirth: '',
        inchargelabass: "",
        inchargelabassid: "",
        starteddate: "",
        specimenproperty: "",

    };
    const initialValues = {
        specimenid: "",
        contactnumber: "",
        patientsname: "",
        dateofbirth: '',


    };
    const [CurrentTest, setCurrentTest] = useState(initialTestState);
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        console.log(e)
        const { name, value } = e.target;

        setCurrentTest({
            ...CurrentTest,
            [name]: value,
        });
    };

    const getTest = id => {
        TestDataService.getOneTest(id)
            .then(response => {
                setCurrentTest(response.data);
                //console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    useEffect(() => {

        getTest(id.topicId);
    }, [id.topicId]);




    const updateTest = (event) => {
        event.preventDefault()
        //console.log(CurrentTest._id, "gdfghxdf")
        //console.log(CurrentTest.inchargelabassid, "gdfghxdf")
        var data = {
            specimenid: CurrentTest.specimenid,
            contactnumber: CurrentTest.contactnumber,
            patientsname:CurrentTest.patientsname,
            dateofbirth: CurrentTest.dateofbirth,
        };
        //console.log(data)
        TestDataService.update(CurrentTest._id, data)
            .then(response => {
                //console.log(response.data,);
                Swal.fire(
                    'Patient Info Updated',
                    'You have updated the patient Information. Please see the patient page',
                    'success'
                )
                setMessage("The patient info was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
        setCurrentTest(initialValues)
    };

    return (

        <div className="newUser">
            <span className="newUserTitle">Specimen Staff Assigning Form</span>
            <div className="detailsbock1">
                <span className="newUserTitle1">Full details of the test</span>
                <div className="detailsbock">
                    <div className="newUserItem">
                        <label>Incharge Lab Assistant ID</label>
                        <input
                            style={{color:"black", borderRadius: "20px"}}
                            id="inchargelabassid"
                            name="inchargelabassid"
                            value={CurrentTest.inchargelabassid}

                        />
                    </div>
                    <div className="newUserItem">
                        <label>Incharge Lab Assistant Name</label>
                        <input
                            style={{color:"black", borderRadius: "20px"}}
                            id="inchargelabass"
                            name="inchargelabass"
                            value={CurrentTest.inchargelabass}
                        />
                    </div>
                    <div className="newUserItem">
                        <label>Specimen Property</label>
                        <input
                            style={{color:"black", borderRadius: "20px"}}
                            id="specimenproperty"
                            name="specimenproperty"
                            value={CurrentTest.specimenproperty}
                        />
                    </div>
                    <div className="newUserItem">
                        <label>Specimen Property Result</label>
                        <input
                            style={{color:"black", borderRadius: "20px"}}
                            id="specimenpropertyresult"
                            name="specimenpropertyresult"
                            value={CurrentTest.specimenpropertyresult}
                        />
                    </div>
                </div>
            </div>
            <div className="detailsbock1">
                <span className="newUserTitle1">Update patient infromation form</span>
                <div className="detailsbock">
                    <form className="newUserForm" onSubmit={updateTest}>


                        <div className="newUserItem">
                            <label>Specimen ID</label>
                            <input
                                style={{color:"black", borderRadius: "20px"}}
                                id="specimenid"
                                required
                                type="number"
                                min="100"
                                max="999"
                                name="specimenid"
                                value={CurrentTest.specimenid}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="newUserItem">
                            <label>Patient Name</label>
                            <input type="text"
                                style={{color:"black", borderRadius: "20px"}}
                                id="patientsname"
                                name="patientsname"
                                required
                                value={CurrentTest.patientsname}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="newUserItem">
                            <label>Phone No</label>
                            <input type="text"
                                style={{color:"black", borderRadius: "20px"}}
                                id="contactnumber"
                                name="contactnumber"
                                required
                                minlength="10"
                                maxlength="10"
                                value={CurrentTest.contactnumber}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="newUserItem">
                            <label>Age of patient</label>
                            <input type="text"
                                style={{color:"black", borderRadius: "20px"}}
                                id="dateofbirth"
                                name="dateofbirth"
                                required
                                value={CurrentTest.dateofbirth}
                                onChange={handleInputChange}
                            />
                        </div>
                        <button className="newUserButton">Update patient info</button>
                        <p>{message}</p>
                    </form>
                </div>
            </div>
        </div>

    )
}

