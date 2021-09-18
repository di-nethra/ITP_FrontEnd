import React, {useEffect, useState} from 'react';
import {DataGrid} from '@material-ui/data-grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import channellServices from "../../../services/echannelling.Service";

export default function AllAppointments() {
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
    ];

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllAppointments();
    },);

    const getAllAppointments = () => {
        channellServices.getAll()
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
                    <h3>All Appointments</h3>
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