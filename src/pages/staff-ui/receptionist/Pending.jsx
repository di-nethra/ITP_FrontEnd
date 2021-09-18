import React, {useEffect, useState} from 'react';
import {DataGrid} from '@material-ui/data-grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Swal from "sweetalert2";
import {useTheme} from "@material-ui/core";
import channellServices from "../../../services/echannelling.Service";

export default function Pending() {
    const theme = useTheme();
    const columns = [
        {
            field: 'date',
            headerName: 'Date',
            width: 125,
            editable: false,
        },
        {
            field: 'time',
            headerName: 'Time',
            width: 125,
            editable: false,
        },

        {
            field: 'patientName',
            headerName: 'Patient Name',
            width: 250,
            editable: false,
        },

        {
            field: 'patientNIC',
            headerName: 'NIC',
            width: 150,
            editable: false,
        },

        {
            field: 'mobile',
            headerName: 'Mobile Number',
            width: 180,
            editable: false,
        },

        {
            field: 'action',
            headerName: 'Action',
            type: "number",
            width: 180,
            renderCell: (params) => {
                let sessionDate = new Date(params.row.date).getDate()
                return (
                    <Button
                        variant="contained"
                        color="primary"
                        value={params.row.id}
                        onClick={checkInPatient(params.row)}
                        { ...sessionDate !== new Date().getDate()? {disabled:true}:{disabled:false}}
                    >
                        Check In
                    </Button>
                )
            },
        },
    ];
    const checkInPatient = (params) => () => {
        let id = params.id;
        Swal.fire({
            title: 'Checkin ' + params.patientName + "?",
            icon: '',
            showCancelButton: true,
            confirmButtonColor: theme.palette.primary.main,
            cancelButtonColor: theme.palette.secondary.main,
            confirmButtonText: 'Yes, Mark as Checked In!'
        }).then((result) => {
            if (result.isConfirmed) {
                channellServices.updateStatus(id, "CheckedIn")
                    .then(() => {
                        Swal.fire(
                            'Updated',
                            'Patient was successfully checked in.',
                            'success'
                        )
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        })
    }

    const [appointments, setAppointments] = useState([]);
    useEffect(() => {
        getPendingAppointments();
    },[]);

    const getPendingAppointments = () => {
        channellServices.getByStatus("Pending")
            .then(response => {
                setAppointments(response.data)
            })
            .catch(err => {
                    alert("Error while getting data from database" + err);
                }
            )
    }

    let rows = [];
    for (const appointment of appointments) {
        rows.push(
            {
                id: appointment._id,
                date: appointment.dSession?.date || "Deleted",
                time: appointment.dSession?.time || "Deleted",
                patientName: appointment.fullname,
                patientNIC: appointment.nic,
                mobile: appointment.mobile,
            }
        )
    }


    return (
        <div>
            <Card>
                <CardContent>
                    <h3>Pending Appointments</h3>
                    <br/>

                    <div style={{height: 400}}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}

                        />
                    </div>
                    <div style={{marginTop: 15}} className="buttonAlignRight">
                        {/*<Link to="/staff/doctor/newsession">*/}
                        <Tooltip title="Create New Session" placement="bottom" aria-label="add">
                            <Fab color="primary">
                                <AddIcon fontSize="large"/>
                            </Fab>
                        </Tooltip>
                        {/*</Link>*/}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}