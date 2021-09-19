import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";
import PrescriptionDataService from "../../../services/doctorPrescriptionService";

function DoctorPrescription() {
    let temp = sessionStorage.getItem("user");
    let currentUser = JSON.parse(temp);
    const [isDisabled, setIsDisabled] = useState(true);

    function changeCheck() {
        setIsDisabled(!isDisabled);
    }

    const initialPrescriptionState = {
        //id: null,
        dId: currentUser?.id,
        dPName: "",
        dPDignosis: "",
        dMed1: "",
        dDose1: "",
        dMed2: "",
        dDose2: ""
    };
    const [prescription, setPrescription] = useState(initialPrescriptionState);
    // const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setPrescription({ ...prescription, [name]: value });
    };

    const savePrescription = () => {
        var data = {
            dId: prescription.dId,
            dPName: prescription.dPName,
            dPDignosis: prescription.dPDignosis,
            dMed1: prescription.dMed1,
            dDose1: prescription.dDose1,
            dMed2: prescription.dMed2,
            dDose2: prescription.dDose2
        };

        PrescriptionDataService.create(data)
            .then(response => {
                setPrescription({
                    //id: response.data.id,
                    //dId: response.data.dId,
                    dPName: response.data.dPName,
                    dPDignosis: response.data.dPDignosis,
                    dMed1: response.data.dMed1,
                    dDose1: response.data.dDose1,
                    dMed2: response.data.dMed2,
                    dDose2: response.data.dDose2
                });
                // setSubmitted(true);
                //console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const newPrescription = () => {
        setPrescription(initialPrescriptionState);
        // setSubmitted(false);
    };

    return (
        <div style={{ marginBottom: 10 }} >
            <Card>
                <CardContent>
                    <h3>PRESCRIPTION FORM</h3>
                    <br />
                    <form>
                        <TextField id="dPName" name="dPName" label="PATIENT NAME" style={{ margin: 0 }} placeholder="Enter patient name" helperText="ex: Asel Jayasooriya"
                            fullWidth margin="normal" InputLabelProps={{ shrink: true, }} variant="outlined" required
                            onChange={handleInputChange} value={prescription.dPName}
                        />
                        <br /><br />

                        <TextField id="dPDignosis" name="dPDignosis" label="DIAGNOSIS" style={{ margin: 0 }} placeholder="Enter diagnosis" helperText="ex: Chronic heart failure"
                            fullWidth margin="normal" InputLabelProps={{ shrink: true, }} variant="outlined" required
                            onChange={handleInputChange} value={prescription.dPDignosis}
                        />
                        <br /><br />

                        <div>
                            <TextField id="dMed1" name="dMed1" label="MEDICINE 1" style={{ marginRight: 40 }} InputLabelProps={{ shrink: true, }}
                                placeholder="Enter medicine 1 name" helperText="ex: Valparine" variant="outlined" required
                                onChange={handleInputChange} value={prescription.dMed1}
                            />

                            <TextField id="dDose1" name="dDose1" label="DOSAGE" style={{ margin: 0 }} InputLabelProps={{ shrink: true, }}
                                placeholder="Enter medicine 1 dosage" helperText="ex: 2 tds" variant="outlined" required
                                onChange={handleInputChange} value={prescription.dDose1}
                            />

                        </div>
                        <br />

                        <div>
                            <TextField id="dMed2" name="dMed2" label="MEDICINE 2" style={{ marginRight: 40 }} InputLabelProps={{ shrink: true, }}
                                placeholder="Enter medicine 2 name" helperText="ex: Valparine" variant="outlined"
                                onChange={handleInputChange} value={prescription.dMed2}
                            />

                            <TextField id="dDose2" name="dDose2" label="DOSAGE" style={{ margin: 0 }} InputLabelProps={{ shrink: true, }}
                                placeholder="Enter medicine 2 dosage" helperText="ex: 2 tds" variant="outlined"
                                onChange={handleInputChange} value={prescription.dDose2}
                            />

                        </div>
                        <br />

                        <p><Checkbox onChange={changeCheck} name="submitCheck" color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
                            &ensp;Check to confirm the prescription submission.</p>

                        <div>
                            <Button size="large" variant="contained" style={{ marginRight: 8 }} type="reset" onClick={newPrescription}>Clear</Button>
                            <Button size="large" variant="contained" color="primary" type="submit" disabled={isDisabled} onClick={savePrescription}>Add Prescription</Button>
                        </div>


                    </form>
                </CardContent>
            </Card>

            <Card style={{ marginTop: 10, backgroundColor: "#D9FAFF" }}>
                <CardContent>
                    <center>
                        <p style={{ fontSize: 24, color: "#9D9D9D", fontWeight: "bold" }}>Click to send a medical note to the pharmacist&emsp;
                            <Link to="/staff/doctor/addnote">
                                <Button size="medium" color="primary" variant="contained" style={{ marginRight: 8 }}>Send Note</Button>
                            </Link>
                            <Link to="/staff/doctor/viewnote">
                                <Button size="medium" variant="contained">View Notes</Button>
                            </Link>
                        </p>
                    </center>
                </CardContent>
            </Card>
        </div>
    );
}

export default DoctorPrescription;