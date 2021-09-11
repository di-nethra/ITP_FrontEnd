import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import "./doctor.css"



function DoctorAddNote() {
    const [note, setNote] = useState({
        pNoteId: "",
        pNoteName: "",
        pNoteMessage: ""
    });

    function handleNoteChange(event) {
        const { name, value } = event.target;

        setNote(prevValue => {
            return {
                ...prevValue,
                [name]: value
            };
        });
    }
    // console.log(note.pNoteId);
    // console.log(note.pNoteName);
    // console.log(note.pNoteMessage);

    const handleReset = (e) => {
        e.preventDefault();
        setNote(prevState => ({
            ...prevState,
            pNoteId: "",
            pNoteName: "",
            pNoteMessage: ""
        }))
    }

    return (
        <div style={{ marginBottom: 10 }}>
            <Card>
                <CardContent>
                    <h3>DOCTOR'S NOTE</h3>
                    <br />

                    <form>

                        <TextField
                            id="pNoteId"
                            name="pNoteId"
                            label="PATIENT ID"
                            style={{ margin: 0 }}
                            InputLabelProps={{ shrink: true, }}
                            placeholder="Enter patient ID"
                            helperText="Please enter a number only"
                            variant="outlined"
                            onChange={handleNoteChange}
                            value={note.pNoteId}
                            required /><br /><br />

                        <TextField
                            id="pNoteName"
                            name="pNoteName"
                            label="Patient Name"
                            style={{ margin: 0 }}
                            placeholder="Enter patient name"
                            helperText="ex: Kamal Wanshaka"
                            fullWidth
                            margin="normal"
                            InputLabelProps={{ shrink: true, }}
                            variant="outlined"
                            onChange={handleNoteChange}
                            value={note.pNoteName}
                            required /><br /><br />

                        <TextField
                            id="pNoteMessage"
                            name="pNoteMessage"
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
                            onChange={handleNoteChange}
                            value={note.pNoteMessage}
                            required /><br /><br />

                        <div className="buttonAlignRight">
                            <Button size="medium" variant="contained" style={{ marginRight: 8 }} type="reset" onClick={handleReset}>Clear</Button>
                            <Button size="medium" variant="contained" color="primary" type="submit">Send</Button>
                        </div>

                    </form>
                </CardContent>
            </Card>

        </div>
    );

}

export default DoctorAddNote;