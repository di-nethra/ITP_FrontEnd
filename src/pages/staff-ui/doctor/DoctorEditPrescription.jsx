import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import "./doctor.css"
import { Link } from "react-router-dom";
import PrescriptionDataService from "../../../services/doctorPrescriptionService";
import Swal from "sweetalert2";

function DoctorPrescription() {
    const [isDisabled, setIsDisabled] = useState(true);

    function changeCheck() {
        setIsDisabled(!isDisabled);
    }

    const { id } = useParams();
    //console.log(id);

    const initialPrescription = {
        dPName: "",
        dPDignosis: "",
        dMed1: "",
        dDose1: "",
        dMed2: "",
        dDose2: "",
    };

    const [prescription, setPrescription] = useState(initialPrescription);

    //get employee details by id
    const getPrescription = (id) => {
        PrescriptionDataService
            .getOnePrescription(id)
            .then((response) => {
                setPrescription(response.data);
                //console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
        //console.log("name print", employee.firstName);
    };

    useEffect(() => {
        getPrescription(id);
    }, [id]);

    const updatePrescription = (event) => {

        event.preventDefault();
        PrescriptionDataService
            .update(prescription._id, prescription)
            .then((response) => {
                //console.log(response.prescription);
                Swal.fire(
                    "Update Successfull",
                    "You have successfully updated the prescription",
                    "success"
                );
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleInputChange = (e) => {
        //console.log(e);
        const { name, value } = e.target;

        setPrescription({
            ...prescription,
            [name]: value,
        });
    };

    return (
        <div style={{ marginBottom: 10 }}>
            <Card>
                <CardContent>
                    <h3>EDIT PRESCRIPTION FORM</h3>
                    <br />
                    <form onSubmit={updatePrescription}>
                        <TextField id="dPName" name="dPName" label="PATIENT NAME" style={{ margin: 0 }}
                            placeholder="Enter patient name" helperText="ex: Asel Jayasooriya"
                            fullWidth margin="normal" InputLabelProps={{ shrink: true, }} variant="outlined"
                            value={prescription.dPName} onChange={handleInputChange} required />
                        <br /><br />

                        <TextField id="dPDignosis" name="dPDignosis" label="DIAGNOSIS" style={{ margin: 0 }}
                            placeholder="Enter diagnosis" helperText="ex: Chronic heart failure"
                            fullWidth margin="normal" InputLabelProps={{ shrink: true, }} variant="outlined"
                            value={prescription.dPDignosis} onChange={handleInputChange} required />
                        <br /><br />

                        <div>
                            <TextField id="dMed1" name="dMed1" label="MEDICINE 1" style={{ marginRight: 40 }}
                                InputLabelProps={{ shrink: true, }}
                                placeholder="Enter medicine 1 name" helperText="ex: Valparine" variant="outlined"
                                value={prescription.dMed1} onChange={handleInputChange} required />

                            <TextField id="dDose1" name="dDose1" label="DOSAGE" style={{ margin: 0 }}
                                InputLabelProps={{ shrink: true, }}
                                placeholder="Enter medicine 1 dosage" helperText="ex: 2 tds" variant="outlined"
                                value={prescription.dDose1} onChange={handleInputChange} required />

                        </div>
                        <br />

                        <div>
                            <TextField id="dMed2" name="dMed2" label="MEDICINE 2" style={{ marginRight: 40 }}
                                InputLabelProps={{ shrink: true, }}
                                placeholder="Enter medicine 2 name" helperText="ex: Valparine"
                                value={prescription.dMed2} onChange={handleInputChange} variant="outlined" />

                            <TextField id="dDose2" name="dDose2" label="DOSAGE" style={{ margin: 0 }}
                                InputLabelProps={{ shrink: true, }}
                                placeholder="Enter medicine 2 dosage" helperText="ex: 2 tds"
                                value={prescription.dDose2} onChange={handleInputChange} variant="outlined" />

                        </div>
                        <br />

                        <p><Checkbox onChange={changeCheck} name="submitCheck" color="primary"
                            inputProps={{ 'aria-label': 'secondary checkbox' }} />
                            &ensp;Check to confirm the edited prescription submission.</p>

                        <div className="buttonAlignRight">
                            <Link to={"/staff/doctor/viewprescription/" + prescription.dId}>
                                <Button size="large" variant="contained" style={{ marginRight: 8 }}>Cancel</Button>
                            </Link>
                            <Button size="large" variant="contained" color="primary" type="submit"
                                disabled={isDisabled}>Edit Prescription</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default DoctorPrescription;