import "./testresult.css"
import Swal from 'sweetalert2';
import React, { useState, useEffect } from "react";
import TestDataService from "../../../services/tests.service";
import { useParams } from "react-router";



export default function TestReslt() {
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

    };
    const initialValues = {

        inchargelabass: "",
        inchargelabassid: "",

    };
    const [CurrentTest, setCurrentTest] = useState(initialTestState);
    const [message, setMessage] = useState("");
    const [values, setValues] = useState(initialValues)

    const handleInputChange = (e) => {
        console.log(e)
        const { name, value } = e.target;

        setValues({
            ...values,
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
        console.log(CurrentTest._id, "gdfghxdf")
        console.log(values.inchargelabassid, "gdfghxdf")
        var data = {
            status: "started",
            starteddate: new Date(),
            inchargelabass: values.inchargelabass,
            inchargelabassid: values.inchargelabassid,
        };
        console.log(data)
        TestDataService.update(CurrentTest._id, data)
            .then(response => {
                console.log(response.data,);
                Swal.fire(
                    'Test Updated!',
                    'You have updated the test! Please move in to Intransist test table',
                    'success'
                )
                setMessage("The test was updated successfully!");
            })
            .catch(e => {
                console.log(e);
            });
        setValues(initialValues)
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
                    <form className="newUserForm">
                        <div className="newUserItem">
                            <label>Specimen Property</label>
                            <input type="text" placeholder="Insert Specimen property" required />
                        </div>
                        <div className="newUserItem">
                            <label>Specimen Property Result</label>
                            <input type="text" placeholder="Insert specimen property reslt" required />
                        </div>
                        <div className="newUserItem1">
                            <label>Before subbmit results please double check</label>
                        </div>

                        <button className="newUserButton">Submit test reults</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

