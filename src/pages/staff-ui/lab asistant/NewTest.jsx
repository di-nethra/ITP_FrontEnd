import './newtest.css'
import Swal from 'sweetalert2'
import { React, useState } from 'react';
import TestDataService from '../../../services/tests.service';
import { useHistory } from "react-router-dom";
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

const initialValues = {
    specimenid: '',
    patientsname: '',
    contactnumber: '',
    dateofbirth: '',
    testtype: '',
    collectedperson: '',
    inchargelabass: '',
    inchargelabassid: '',
    specimenproperty: '',
    specimenpropertyresult: '',

};
const Demovalues = {

    specimenid: '120',
    patientsname: 'Shanya Kaluthota',
    contactnumber: '0774020028',
    dateofbirth: '21',
    testtype: 'Covid-19',
    collectedperson: 'Damien',

};

export default function NewTest() {
    let history = useHistory();
    const [values, setValues] = useState(initialValues)

    const handleInputChange = (e) => {
        //const name = e.target.name 
        //const value = e.target.value 
        //console.log(e)
        const { name, value } = e.target;

        setValues({
            ...values,
            [name]: value,
        });
    };

    const addTest = (event) => {
        event.preventDefault()
        Swal.fire(
            'Test Subbmitted!',
            'You have subbmitted the test!',
            'success'
        )
        var data = {
            specimenid: values.specimenid,
            patientsname: values.patientsname,
            contactnumber: values.contactnumber,
            dateofbirth: values.dateofbirth,
            testtype: values.testtype,
            collectedperson: values.collectedperson,
            inchargelabass: "Not yet assigned",
            inchargelabassid: "Not yet assigned",
            specimenproperty: "Not yet Inserted",
            specimenpropertyresult: "Not yet Inserted",
        };
        TestDataService.create(data)
            .then(response => {
                /*setValues({
                    specimenid: response.data.specimenid,
                    patientsname: response.data.patientsname,
                    contactnumber: response.data.contactnumber,
                    dateofbirth: response.data.dateofbirth,
                    testtype: response.data.testtype,
                    collectedperson: response.data.collectedperson,
                });*/
                //console.log(response.data);
                history.push("/staff/labassistant/submittedtests");
            })
            .catch(e => {
                console.log(e);
            });
        setValues(initialValues)
    };
    const demoform = () => {
        setValues(Demovalues)
    };



    return (
        <div className="newUser">
            <Card style={{ width: "60%", margin: "auto", padding:"20px"}}>
                <span className="newUserTitle">New Test Form</span>
                <CardContent>
                    <div class="detailsbock1" style={{ display: "flex", justifyContent: "center" }}>
                        {/*<span className="newUserTitle1" style={{align:"center"}}>Details</span>*/}
                        <div class="detailsbock">
                            <form className="newUserForm" onSubmit={addTest}>
                                <div className="newUserItem">
                                    <label>Patients Name</label>
                                    <input
                                        style={{color:"black", borderRadius: "20px", width: "450px"}}
                                        value={values.patientsname}
                                        name="patientsname"
                                        required
                                        type="text"
                                        placeholder="Enter Patient Name"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="newUserItem">
                                    <label>Specimen ID</label>
                                    <input
                                        style={{color:"black", borderRadius: "20px", width: "450px"}}
                                        value={values.specimenid}
                                        name="specimenid"
                                        type="number"
                                        required
                                        min="100"
                                        max="999"
                                        placeholder="Enter Specimen ID"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="newUserItem">
                                    <label>Contact Number</label>
                                    <input
                                        style={{color:"black", borderRadius: "20px", width: "450px"}}
                                        value={values.contactnumber}
                                        name="contactnumber"
                                        type="text"
                                        minlength="10"
                                        maxlength="10"
                                        required
                                        placeholder="Enter Contact Number"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="newUserItem">
                                    <label>Age of the patient</label>
                                    <input
                                        style={{color:"black", borderRadius: "20px", width: "450px"}}
                                        value={values.dateofbirth}
                                        name="dateofbirth"
                                        type="text"
                                        required
                                        placeholder="Enter Patients Age"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                {/*<div className="newUserItem">
                            <label>Date of Birth</label>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                                </div>*/}
                                {/*<div className="newUserItem">
                            <label>Test Type</label>
                            <div className="newUserGender">
                                <input type="radio" name="testtype" id="TSH" value="TSH" />
                                <label for="TSH">TSH</label>
                                <input type="radio" name="testtype" id="FBC" value="FBC" />
                                <label for="FBC">FBC</label>
                                <input type="radio" name="testtype" id="COVID19" value="COVID19" />
                                <label for="COVID19">COVID-19</label>
                                <input type="radio" name="testtype" id="BG" value="BG" />
                                <label for="BG">Blood Glucose</label>  
                            </div>
                            </div>*/}
                                <div className="newUserItem">
                                    <label>Test Type</label>
                                    <input
                                        style={{color:"black", borderRadius: "20px", width: "450px"}}
                                        value={values.testtype}
                                        name="testtype"
                                        type="text"
                                        required
                                        placeholder="Enter test type"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="newUserItem">
                                    <label>Collected Person Name</label>
                                    <input
                                        style={{color:"black", borderRadius: "20px", width: "450px"}}
                                        value={values.collectedperson}
                                        name="collectedperson"
                                        ype="text"
                                        required
                                        placeholder="Enter the collected person name"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                {/*<div className="newUserItem">
                            <label>Sample Collected Person</label>
                            <select className="newUserSelect" name="active" id="active">
                                <option value="Jagath">Jagath</option>
                                <option value="Kalusundara">Kalusundara</option>
                            </select>
                        </div>*/}
                                <div className="newUserItem1">
                                    <label>Before subbmit results please double check</label>
                                </div>
                                <button className="newUserButton">Subbmit the Sample</button>
                            </form>

                        </div>
                    </div>
                    <button className="demobutton11" onClick={demoform}>DEMO</button>
                </CardContent>
            </Card>
        </div>
    )
}
