import React, { useState } from "react";
import DoctorHome from "./DoctorHome";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import "./doctor.css"

function DoctorPrescription() {
    const [isDisabled, setIsDisabled] = useState(true);

    function changeCheck() {
        setIsDisabled(!isDisabled);
    }

    return (
        <div>
            <Card>
                <CardContent>
                    <h3>EDIT PRESCRIPTION FORM</h3>
                    <br />
                    <form>
                        <TextField id="dEditPName" label="PATIENT NAME" style={{ margin: 0 }} placeholder="Enter patient name" helperText="ex: Asel Jayasooriya"
                            fullWidth margin="normal" InputLabelProps={{ shrink: true, }} variant="outlined" required />
                        <br /><br />

                        <TextField id="dEditPDignosis" label="DIAGNOSIS" style={{ margin: 0 }} placeholder="Enter diagnosis" helperText="ex: Chronic heart failure"
                            fullWidth margin="normal" InputLabelProps={{ shrink: true, }} variant="outlined" required />
                        <br /><br />

                        <div>
                            <TextField id="dEditMed1" label="MEDICINE 1" style={{ marginRight: 40 }} InputLabelProps={{ shrink: true, }}
                                placeholder="Enter medicine 1 name" helperText="ex: Valparine" variant="outlined" required />

                            <TextField id="dEditDose1" label="DOSAGE" style={{ margin: 0 }} InputLabelProps={{ shrink: true, }}
                                placeholder="Enter medicine 1 dosage" helperText="ex: 2 tds" variant="outlined" required />

                        </div>
                        <br />

                        <div>
                            <TextField id="dEditMed2" label="MEDICINE 2" style={{ marginRight: 40 }} InputLabelProps={{ shrink: true, }}
                                placeholder="Enter medicine 2 name" helperText="ex: Valparine" variant="outlined" />

                            <TextField id="dEditDose2" label="DOSAGE" style={{ margin: 0 }} InputLabelProps={{ shrink: true, }}
                                placeholder="Enter medicine 2 dosage" helperText="ex: 2 tds" variant="outlined" />

                        </div>
                        <br />

                        <p><Checkbox onChange={changeCheck} name="submitCheck" color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />
                            &ensp;Check to confirm the edited prescription submission.</p>

                        <div className="buttonAlignRight">
                            <Button size="large" variant="contained" style={{ marginRight: 8 }} >Cancel</Button>
                            <Button size="large" variant="contained" color="primary" type="submit" disabled={isDisabled}>Edit Prescription</Button>
                        </div>


                    </form>
                </CardContent>
            </Card>
        </div>
    );
}

export default DoctorPrescription;