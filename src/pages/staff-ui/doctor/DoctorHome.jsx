import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Calendar from './Calendar';
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player/youtube';
import channellServices from "../../../services/echannelling.Service";

export default function DoctorHome(props) {
    // let temp = sessionStorage.getItem("user");
    // let currentUser = JSON.parse(temp);

    const columns = [
        { field: 'id', headerName: 'PATIENT ID', width: 150 },
        {
            field: 'pName',
            headerName: 'PATIENT NAME',
            width: 400,
            editable: false,
        },
        {
            field: 'pPhone',
            headerName: 'PHONE NUMBER',
            width: 250,
            editable: false,
        },
        {
            field: 'pAge',
            headerName: 'AGE',
            type: 'number',
            width: 185,
            editable: false,
        },
    ];

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllAppointments();
    }, []);

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
        console.log("CUser:" + props.user)
        console.log("DSession:" + appointment.dSession)
        if (appointment.dSession?.doctor_id == props.user) {
            rows.push(
                {
                    id: appointment._id,
                    pName: appointment.fullname,
                    pPhone: appointment.mobile,
                    pAge: appointment.age
                }
            )
        }
    }

    return (
        <div style={{ marginBottom: 10 }}>
            <div>
                <Card style={{ float: "right", backgroundColor: "#005792" }}>
                    <CardContent style={{ float: "right", width: 690, height: 295, }}>
                        <ReactPlayer
                            url='https://www.youtube.com/watch?v=eUAp3lWxJSo&ab_channel=Minist%C3%A8redelaSant%C3%A9etdesServicessociaux'
                            width="100%" height="100%" controls="true" volume="0.09" loop="true" />
                    </CardContent>
                </Card>
                <Card style={{ width: 380, backgroundColor: "#005792" }}>
                    <CardContent>
                        <Calendar />
                    </CardContent>
                </Card>
                <br />
            </div>
            <Card>
                <CardContent style={{ backgroundColor: "#005792" }}>
                    <h3 style={{ color: "white" }}>PATIENT APPOINTMENTS</h3>
                    <br />
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            checkboxSelection
                            disableSelectionOnClick
                            style={{ backgroundColor: "white" }}
                        />
                    </div>

                    <div style={{ marginTop: 15 }} className="buttonAlignRight">
                        <Link to="/staff/doctor/addprescription">
                            <Tooltip title="Add Prescription" placement="bottom" aria-label="add">
                                <Fab style={{ backgroundColor: "#D9FAFF" }}>
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