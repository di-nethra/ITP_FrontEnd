import React, { useState } from "react";
import DoctorHome from "./DoctorHome";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from "react-router-dom";

function DoctorPrescription() {
    const [isDisabled, setIsDisabled] = useState(true);

    function changeCheck() {
        setIsDisabled(!isDisabled);
    }

    return (
        <div style={{marginBottom: 10}} >
            <Card>
                <CardContent>
                    <h3>PRESCRIPTION FORM</h3>
                    <br />
                    <form>
                        <TextField id="dPName" label="PATIENT NAME" style={{ margin: 0 }} placeholder="Enter patient name" helperText="ex: Asel Jayasooriya"
                            fullWidth margin="normal" InputLabelProps={{ shrink: true, }} variant="outlined" required />
                        <br /><br />

                        <TextField id="dPDignosis" label="DIAGNOSIS" style={{ margin: 0 }} placeholder="Enter diagnosis" helperText="ex: Chronic heart failure"
                            fullWidth margin="normal" InputLabelProps={{ shrink: true, }} variant="outlined" required />
                        <br /><br />

                        <div>
                            <TextField id="dMed1" label="MEDICINE 1" style={{ marginRight: 40 }} InputLabelProps={{ shrink: true, }}
                                placeholder="Enter medicine 1 name" helperText="ex: Valparine" variant="outlined" required />

                            <TextField id="dDose1" label="DOSAGE" style={{ margin: 0 }} InputLabelProps={{ shrink: true, }}
                                placeholder="Enter medicine 1 dosage" helperText="ex: 2 tds" variant="outlined" required />

                        </div>
                        <br />

                        <div>
                            <TextField id="dMed2" label="MEDICINE 2" style={{ marginRight: 40 }} InputLabelProps={{ shrink: true, }}
                                placeholder="Enter medicine 2 name" helperText="ex: Valparine" variant="outlined" />

                            <TextField id="dDose2" label="DOSAGE" style={{ margin: 0 }} InputLabelProps={{ shrink: true, }}
                                placeholder="Enter medicine 2 dosage" helperText="ex: 2 tds" variant="outlined" />

                        </div>
                        <br />

                        <p><Checkbox onChange={changeCheck} name="submitCheck" color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
                            &ensp;Check to confirm the prescription submission.</p>

                        <div>
                            <Button size="large" variant="contained" style={{ marginRight: 8 }} type="reset">Reset</Button>
                            <Button size="large" variant="contained" color="primary" type="submit" disabled={isDisabled}>Add Prescription</Button>
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