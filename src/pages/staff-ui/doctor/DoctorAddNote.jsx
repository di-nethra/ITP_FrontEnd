import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";
import "./doctor.css"
import NoteDataService from "../../../services/doctorNoteService";
import { Link } from "react-router-dom";

const DoctorAddNote = () => {
    const initialNoteState = {
        //id: null,
        pNoteId: "",
        pNoteName: "",
        pNoteMessage: ""
    };

    const noteDemo = () => {
        setNote({
            //id: null,
            pNoteId: "991992787V",
            pNoteName: "Asel Jayasooriya",
            pNoteMessage: "Clinically genius"
        });
    };

    const [note, setNote] = useState(initialNoteState);
    // const [submitted, setSubmitted] = useState(false);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setNote({ ...note, [name]: value });
    };

    const saveNote = () => {
        var data = {
            pNoteId: note.pNoteId,
            pNoteName: note.pNoteName,
            pNoteMessage: note.pNoteMessage
        };

        NoteDataService.create(data)
            .then(response => {
                setNote({
                    //id: response.data.id,
                    pNoteId: response.data.pNoteId,
                    pNoteName: response.data.pNoteName,
                    pNoteMessage: response.data.pNoteMessage
                });
                // setSubmitted(true);
                //console.log(response.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const newNote = () => {
        setNote(initialNoteState);
        // setSubmitted(false);
    };

    //console.log(note.id);
    //console.log(note.pNoteId);
    //console.log(note.pNoteName);
    //console.log(note.pNoteMessage);

    return (
        <div style={{ marginBottom: 10 }}>
            <Card>
                <CardContent>
                    <h3>DOCTOR'S NOTE</h3>
                    <br />

                    <form>

                        <TextField
                            type="text"
                            id="pNoteId"
                            name="pNoteId"
                            label="PATIENT ID"
                            style={{ margin: 0 }}
                            InputLabelProps={{ shrink: true, }}
                            placeholder="Enter patient ID"
                            helperText="Please enter the patient NIC number"
                            variant="outlined"
                            onChange={handleInputChange}
                            value={note.pNoteId}
                            InputProps={{ inputProps: { minlength: 10, maxlength: 10 } }}
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
                            onChange={handleInputChange}
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
                            onChange={handleInputChange}
                            value={note.pNoteMessage}
                            required /><br /><br />

                        <div className="buttonAlignRight">
                            <Link to="/staff/doctor/viewnote">
                                <Button size="medium" variant="contained" style={{ marginRight: 8 }}>View Added Notes</Button>
                            </Link>
                            <Button size="medium" variant="contained" style={{ marginRight: 8 }} type="reset"
                                onClick={newNote}>Clear</Button>
                            <Button size="medium" variant="contained" style={{ marginRight: 8 }} color="primary" type="submit"
                                onClick={saveNote}>Send</Button>
                            <Button size="medium" variant="contained" color="secondary"
                                onClick={noteDemo}>DEMO</Button>
                        </div>

                    </form>
                </CardContent>
            </Card>

        </div>
    );

};

export default DoctorAddNote;