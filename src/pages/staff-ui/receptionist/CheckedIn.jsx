import React, {useEffect, useState} from 'react';
import {DataGrid} from '@material-ui/data-grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Swal from "sweetalert2";
import {useTheme} from "@material-ui/core";
import channellServices from "../../../services/echannelling.Service";

export default function CheckedIn() {
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
            width: 200,
            editable: false,
        },

        {
            field: 'action',
            headerName: 'Action',
            type: "number",
            width: 200,
            renderCell: (params) => {
                return (
                    <Button
                        variant="contained"
                        color="secondary"
                        value={params.row.id}
                        onClick={undoCheckInPatient(params.row)}
                        {...params.row.date === "Deleted" && {disabled: true}}
                    >
                        Cancel CheckIn
                    </Button>
                )
            },
        },
    ];
    const undoCheckInPatient = (params) => () => {
        let id = params.id;
        Swal.fire({
            title: 'Checkin ' + params.patientName + "?",
            icon: '',
            showCancelButton: true,
            confirmButtonColor: theme.palette.secondary.main,
            cancelButtonColor: theme.palette.primary.main,
            confirmButtonText: 'Yes, Undo Check In!'
        }).then((result) => {
            if (result.isConfirmed) {
                channellServices.updateStatus(id, "Pending")
                    .then(() => {
                        Swal.fire(
                            'Updated',
                            'Appointment status set to Pending.',
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
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getAppointmentsByStatus();
    },);

    const getAppointmentsByStatus = () => {
        channellServices.getByStatus("CheckedIn")
            .then(response => {
                setAppointments(response.data)
                setLoading(false)
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
                    <h3>CheckedIn Appointments</h3>
                    <br/>

                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        autoHeight={true}
                        loading={loading}
                    />

                </CardContent>
            </Card>
        </div>
    );
}