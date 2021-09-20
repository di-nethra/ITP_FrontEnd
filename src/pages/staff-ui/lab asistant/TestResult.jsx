import "./testresult.css"
import Swal from 'sweetalert2';
import React, { useState, useEffect } from "react";
import TestDataService from "../../../services/tests.service";
import { useParams } from "react-router";



export default function TestReslt() {
    const id = useParams();
    console.log(id.testId);
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
        specimenproperty: '',
        specimenpropertyresult: '',


    };
    const initialValues = {

        specimenproperty: '',
        specimenpropertyresult: '',

    };
    const [CurrentTest, setCurrentTest] = useState(initialTestState);
    const [message, setMessage] = useState("");

    const handleInputChange = (e) => {
        //console.log(e)
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

        getTest(id.testId);
    }, [id.testId]);




    const updateTest = (event) => {
        event.preventDefault()
        //console.log(CurrentTest._id, "gdfghxdf")
        //console.log(CurrentTest.inchargelabassid, "gdfghxdf")
        var data = {
            status: "completed",
            completeddate: new Date(),
            specimenproperty: CurrentTest.specimenproperty,
            specimenpropertyresult: CurrentTest.specimenpropertyresult,
        };
        console.log(data)
        TestDataService.update(CurrentTest._id, data)
            .then(response => {
                console.log(response.data,);
                Swal.fire(
                    'Test Updated!',
                    'You have updated the test! Please move in to completed test table',
                    'success'
                )
                setMessage("The test was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
        setCurrentTest(initialValues)
    };
    return (

        <div className="newUser">
            <span className="newUserTitle">Specimen Result Insertion Form</span>
            <div class="detailsbock1">
                <span className="newUserTitle1">Details</span>
                <div class="detailsbock">
                    <div className="newUserItem">
                        <label>Specimen ID</label>
                        <input type="text"
                            id="specimenid"
                            name="specimenid"
                            value={CurrentTest.specimenid}
                        />
                    </div>
                    <div className="newUserItem">
                        <label>Patient Name</label>
                        <input type="text"
                            id="patientsname"
                            name="patientsname"
                            value={CurrentTest.patientsname}
                        />
                    </div>
                    <div className="newUserItem">
                        <label>Phone No</label>
                        <input type="text"
                            id="contactnumber"
                            name="contactnumber"
                            value={CurrentTest.contactnumber}
                        />
                    </div>
                    <div className="newUserItem">
                        <label>Age of patient</label>
                        <input type="text"
                            id="dateofbirth"
                            name="dateofbirth"
                            value={CurrentTest.dateofbirth}
                        />
                    </div>
                    <div className="newUserItem">
                        <label>Test Type</label>
                        <input type="text"
                            id="testtype"
                            name="testtype"
                            value={CurrentTest.testtype}
                        />
                    </div>
                </div>
            </div>
            <div class="detailsbock1">
                <span className="newUserTitle1">Insert Test Results</span>
                <div class="detailsbock">
                    <form className="newUserForm" onSubmit={updateTest}>
                        <div className="newUserItem">
                            <label>Specimen Property</label>
                            <input
                                type="text"
                                id="specimenproperty"
                                required
                                name="specimenproperty"
                                value={CurrentTest.specimenproperty}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="newUserItem">
                            <label>Specimen Property Result</label>
                            <input
                                type="text"
                                id="specimenpropertyresult"
                                required
                                name="specimenpropertyresult"
                                value={CurrentTest.specimenpropertyresult}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="newUserItem1">
                            <label>Before subbmit results please double check</label>
                        </div>

                        <button className="newUserButton">Submit test reults</button>
                        <p>{message}</p>
                    </form>
                </div>
            </div>
        </div>

    )
}

