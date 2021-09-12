// noinspection DuplicatedCode

import * as React from 'react';
import {useEffect, useState} from 'react';
import {DataGrid} from '@material-ui/data-grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import './doctor.css';
import {Link, useParams} from "react-router-dom";
import SessionDataService from "../../../services/doctorSession.service";
import DeleteIcon from "@material-ui/icons/Delete";

const columns = [
    {
        field: 'date',
        headerName: 'Date',
        width: 200,
        editable: false,
    },
    {
        field: 'time',
        headerName: 'Time',
        width: 200,
        editable: false,
    },

    {
        field: 'currentAppointments',
        headerName: 'Current Appointments',
        width: 250,
        editable: false,
    },

    {
        field: 'maximumAppointments',
        headerName: 'Max Appointments',
        width: 250,
        editable: false,
    },
    {
        field: 'action',
        headerName: 'Action',
        width: 180,
        renderCell: (params) => (
            <Button
                variant="contained"
                color="secondary"
                value={params.row.id}
                onClick={() => {
                    alert(params.row.id);
                }}
            >
                <DeleteIcon/>
            </Button>
        ),
    },
];

export default function DoctorViewSessions() {
    const [sessions, setSessions] = useState([]);
    let {id} = useParams();
    useEffect(() => {
        getSessionsByDoctorID(id);
    }, [id]);

    const getSessionsByDoctorID = (id) => {
        SessionDataService.get(id)
            .then(response => {
                setSessions(response.data)
                console.log(response.data)
            })
            .catch(err => {
                    console.log(err);
                }
            )
    }

    let rows = [];
    for (const session of sessions) {
        rows.push(
            {
                id: session._id,
                date: session.date,
                time: session.time,
                currentAppointments: session.currentAppointments,
                maximumAppointments: session.maxAppointments,
            }
        )
    }

    return (
        <div>
            <Card>
                <CardContent>
                    <h3>My Sessions</h3>
                    <br/>

                    <div style={{height: 400}}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                        />
                    </div>
                    <div style={{marginTop: 15}} className="buttonAlignRight">
                        <Link to="/staff/doctor/newsession">
                            <Tooltip title="Create New Session" placement="bottom" aria-label="add">
                                <Fab color="primary">
                                    <AddIcon fontSize="large"/>
                                </Fab>
                            </Tooltip>
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}