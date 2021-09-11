import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import "./doctor.css"

function DoctorAddNote() {
    return (
        <div style={{marginBottom: 10}}>
            <Card>
                <CardContent>
                    <h3>DOCTOR'S NOTE</h3>
                    <br />

                    <form>

                        <TextField
                            id="pNoteId"
                            label="PATIENT ID"
                            style={{ margin: 0 }}
                            InputLabelProps={{ shrink: true, }}
                            placeholder="Enter patient ID"
                            helperText="Please enter a number only"
                            variant="outlined"
                            required /><br /><br />

                        <TextField
                            id="pNoteName"
                            label="Patient Name"
                            style={{ margin: 0 }}
                            placeholder="Enter patient name"
                            helperText="ex: Kamal Wanshaka"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true, }}
                            variant="outlined"
                            required /><br /><br />

                        <TextField
                            id="pNoteMessage"
                            label="Message"
                            style={{ margin: 0 }}
                            placeholder="Enter message"
                            helperText="ex: The patient is highly diabetic and prone to heart failure"
                            fullWidth
                            margin="normal"
                            multiline
                            rows={5}
                            InputLabelProps={{ shrink: true, }}
                            variant="outlined"
                            required /><br /><br />

                        <div className="buttonAlignRight">
                            <Button size="medium" variant="contained" style={{ marginRight: 8 }} type="reset">Clear</Button>
                            <Button size="medium" variant="contained" color="primary" type="submit">Send</Button>
                        </div>

                    </form>
                </CardContent>
            </Card>

        </div>
    );

}

export default DoctorAddNote;