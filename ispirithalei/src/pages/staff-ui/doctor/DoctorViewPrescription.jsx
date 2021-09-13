import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import './doctor.css';
import { Link, useParams } from "react-router-dom";
import { DeleteOutline } from "@material-ui/icons";
import PrescriptionDataService from "../../../services/doctorPrescriptionService";
import PrescriptionDataServices from '../../../services/doctorPrescriptionService';

export default function DoctorViewPrescription() {
    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 100
        },
        {
            field: 'patientName',
            headerName: 'Patient Name',
            width: 300,
            editable: false,
        },
        {
            field: 'diagnosis',
            headerName: 'Diagnosis',
            width: 475,
            editable: false,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 200,
            sortable: false,
            editable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/staff/doctor/editprescription" /*+ params.row.id*/}>
                            <Button size="small" color="primary" variant="contained" style={{ marginRight: 5 }}>Edit</Button>
                        </Link>
                        <Button size="small" color="secondary" variant="contained" value={params.row.id}
                            onClick={deletePrescription}><DeleteOutline /></Button>
                    </>
                );
            },
        },
    ];

    const deletePrescription = event => {
        PrescriptionDataServices.remove(event.currentTarget.value)
            .then(response => {
                alert(response.statusText)
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            })
    }

    const [prescriptions, setPrescriptions] = useState([]);
    let { id } = useParams();
    useEffect(() => {
        getPrescriptionsByDoctorID(id);
    }, [id]);

    const getPrescriptionsByDoctorID = (id) => {
        PrescriptionDataService.get(id)
            .then(response => {
                setPrescriptions(response.data)
            })
            .catch(err => {
                console.log("Error while getting data from database" + err);
            }
            )
    }

    let rows = [];
    for (const prescription of prescriptions) {
        rows.push(
            {
                id: prescription._id,
                patientName: prescription.dPName,
                diagnosis: prescription.dPDignosis,
            }
        )
    }

    return (
        <div style={{ marginBottom: 10 }}>
            <Card>
                <CardContent>
                    <h3>PATIENT PRESCRIPTIONS</h3>
                    <br />

                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                        // checkboxSelection
                        // disableSelectionOnClick
                        />
                    </div>
                    <div style={{ marginTop: 15 }} className="buttonAlignRight">
                        <Link to="/staff/doctor/addprescription">
                            <Tooltip title="Add Prescription" placement="bottom" aria-label="add">
                                <Fab color="primary">
                                    <AddIcon fontSize="large" />
                                </Fab>
                            </Tooltip>
                        </Link>
                    </div>
                </CardContent>
            </Card>

            <Card style={{ marginTop: 15, backgroundColor: "#D9FAFF" }}>
                <CardContent>
                    <p>
                        <strong>Disclaimer</strong> - You are able to produce prescription reports of you patients. Please use them
                        for your use only. We make it our obligation to protect patient privacy.
                    </p>
                    <div className="buttonAlignRight">
                        <Button size="medium" color="primary" variant="contained" style={{ marginTop: 10 }}>Create Report</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}