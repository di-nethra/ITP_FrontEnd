import "./staffassign.css"
import 'date-fns';
import Swal from 'sweetalert2';
import React, { useState, useEffect } from "react";
import TestDataService from "../../../services/tests.service";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

export default function StaffAssign() {
    let history = useHistory();
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

        getTest(id.topicId);
    }, [id.topicId]);
    const demoform = () => {
        setCurrentTest({
            ...CurrentTest,
            inchargelabass: "Ilaki Silva",
            inchargelabassid: "LAB06"
        });
    };

    


    const updateTest = (event) => {
        event.preventDefault()
        //console.log(CurrentTest._id, "gdfghxdf")
        //console.log(CurrentTest.inchargelabassid, "gdfghxdf")
        var data = {
            status: "started",
            starteddate: new Date(),
            inchargelabass: CurrentTest.inchargelabass,
            inchargelabassid: CurrentTest.inchargelabassid,
        };
        //console.log(data)
        TestDataService.update(CurrentTest._id, data)
            .then(response => {
                //console.log(response.data,);
                Swal.fire(
                    'Test Updated!',
                    'You have updated the test! See the test in Intransist test table',
                    'success'
                  )
                history.push("/staff/labassistant/intrasisttests");
                setMessage("The test was updated successfully!");
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
                <span className="newUserTitle1">Details</span>
                <div className="detailsbock">
                    <div className="newUserItem">
                        <label>Specimen ID</label>
                        <input type="text"
                            style={{color:"black", borderRadius: "20px"}}
                            id="specimenid"
                            name="specimenid"
                            value={CurrentTest.specimenid}
                        />
                    </div>
                    <div className="newUserItem">
                        <label>Patient Name</label>
                        <input type="text"
                            style={{color:"black", borderRadius: "20px"}}
                            id="patientsname"
                            name="patientsname"
                            value={CurrentTest.patientsname}
                        />
                    </div>
                    <div className="newUserItem">
                        <label>Phone No</label>
                        <input type="text"
                            style={{color:"black", borderRadius: "20px"}}
                            id="contactnumber"
                            name="contactnumber"
                            value={CurrentTest.contactnumber}
                        />
                    </div>
                    <div className="newUserItem">
                        <label>Age of patient</label>
                        <input type="text"
                            style={{color:"black", borderRadius: "20px"}}
                            id="dateofbirth"
                            name="dateofbirth"
                            value={CurrentTest.dateofbirth}
                        />
                    </div>
                    <div className="newUserItem">
                        <label>Test Type</label>
                        <input type="text"
                            style={{color:"black", borderRadius: "20px"}}
                            id="testtype"
                            name="testtype"
                            value={CurrentTest.testtype}
                        />
                    </div>
                </div>
            </div>
            <div className="detailsbock1">
                <span className="newUserTitle1">Staff Assigning</span>
                <div className="detailsbock">
                    <form className="newUserForm" onSubmit={updateTest}>
                        <div className="newUserItem">
                            <label>Incharge Lab Assistant ID</label>
                            <input
                                style={{color:"black", borderRadius: "20px"}}
                                type="text"
                                id="inchargelabassid"
                                required
                                minLength="5"
                                maxLength="5"
                                name="inchargelabassid"
                                value={CurrentTest.inchargelabassid}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="newUserItem">
                            <label>Incharge Lab Assistant Name</label>
                            <input
                                style={{color:"black", borderRadius: "20px"}}
                                type="text"
                                id="inchargelabass"
                                required
                                name="inchargelabass"
                                value={CurrentTest.inchargelabass}
                                onChange={handleInputChange}
                            />
                        </div>

                        <button className="newUserButton">Assign Test(Update Test)</button>
                        <p>{message}</p>
                    </form>
                </div>
                <button className="demobutton" onClick={demoform}>DEMO</button>
            </div>
        </div>

    )
}
