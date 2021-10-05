import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import NoteDataService from "../../../services/doctorNoteService";
import { FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";

export default function DoctorViewNotes() {
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('');

    const handleSearchChange = (event) => {
        setQuery(event.target.value);
        if (event.target.value !== '') {
            setLoading(true);
            NoteDataService.search(event.target.value)
                .then(response => {
                    setNotes(response.data)
                })
                .catch(err => {
                    console.log(err);
                }
                )
            setLoading(false);
        }
        else {
            retrieveNotes()
        }
    }

    useEffect(() => {
        retrieveNotes();
    }, []);

    const retrieveNotes = () => {
        NoteDataService.getAll()
            .then(response => {
                setNotes(response.data);
                setLoading(false);
                //console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const columns = [
        { field: 'id', headerName: 'PATIENT ID', width: 150 },
        {
            field: 'pNName',
            headerName: 'PATIENT NAME',
            width: 310,
            editable: false,
        },
        {
            field: 'pMessage',
            headerName: 'MESSAGE',
            width: 550,
            editable: false,
        },
    ];

    let rows = [];
    for (const note of notes) {
        rows.push(
            {
                id: note.pNoteId,
                pNName: note.pNoteName,
                pMessage: note.pNoteMessage,
            }
        )
    }


    return (
        <div style={{ marginBottom: 10 }} >
            <Card>
                <CardContent>
                    <h3>DOCTOR NOTES LIST</h3>
                    <br />

                    <Grid item xl={4} lg={4}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="search">Search Notes</InputLabel>
                            <OutlinedInput
                                id="search"
                                name="search"
                                type="text"
                                value={query}
                                onChange={handleSearchChange}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="search-icon">
                                            <SearchRounded />
                                        </IconButton>
                                    </InputAdornment>
                                }
                                labelWidth={180}
                            />
                            <FormHelperText id="search-helper-text">Search notes by patient NIC or patient name</FormHelperText>
                        </FormControl>
                    </Grid>
                    <br />

                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            loading = {loading}
                            checkboxSelection
                            disableSelectionOnClick
                            style={{ backgroundColor: "#D9FAFF" }}
                        />
                    </div>

                    <div style={{ marginTop: 15 }} className="buttonAlignRight">
                        <Link to="/staff/doctor/addnote">
                            <Tooltip title="Add another note" placement="bottom" aria-label="add">
                                <Fab color="primary">
                                    <AddIcon fontSize="large" />
                                </Fab>
                            </Tooltip>
                        </Link>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}