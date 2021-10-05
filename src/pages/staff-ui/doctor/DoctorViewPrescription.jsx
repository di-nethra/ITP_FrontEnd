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
import Swal from "sweetalert2";
import { useTheme } from "@material-ui/core";
import PrintOutlinedIcon from '@material-ui/icons/PrintOutlined';
import PDF from "../../../components/PDF";
import { FormControl, FormHelperText, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";

export default function DoctorViewPrescription() {
    const theme = useTheme();
    const columns = [
        // {
        //     field: 'id',
        //     headerName: 'ID',
        //     width: 100
        // },
        {
            field: 'patientName',
            headerName: 'Patient Name',
            width: 245,
            editable: false,
        },
        {
            field: 'diagnosis',
            headerName: 'Diagnosis',
            width: 260,
            editable: false,
        },
        {
            field: 'med1',
            headerName: 'Medicine',
            width: 200,
            editable: false,
        },
        {
            field: 'dose1',
            headerName: 'Dosage',
            width: 150,
            editable: false,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 220,
            sortable: false,
            editable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/staff/doctor/printprescription/" + params.row.id}>
                            <Button size="small" color="primary" variant="contained" style={{ marginRight: 5 }}><PrintOutlinedIcon /></Button>
                        </Link>
                        <Link to={"/staff/doctor/editprescription/" + params.row.id}>
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
        let id = event.currentTarget.value;
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: theme.palette.secondary.main,
            cancelButtonColor: theme.palette.primary.main,
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                PrescriptionDataService.remove(id)
                    .then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Prescription has been deleted.',
                            'success'
                        )
                        window.location.reload();
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        })
    }

    const [prescriptions, setPrescriptions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState("");

    let { id } = useParams();

    useEffect( () => {
        getPrescriptionsByDoctorID(); // eslint-disable-next-line
    }, []);

    const getPrescriptionsByDoctorID = () => {
        PrescriptionDataService.get(id)
            .then(response => {
                setPrescriptions(response.data)
                setLoading(false)
            })
            .catch(err => {
                console.log("Error while getting data from database" + err);
            }
            )
    }

    const handleSearchChange = event => {
        setName(event.target.value);
        if (event.target.value !== "") {
            setLoading(true);
            PrescriptionDataService.search(event.target.value, id)
                .then(response => {
                    setPrescriptions(response.data)
                })
                .catch(err => {
                    console.log(err);
                }
                )
            setLoading(false);
        } else {
            getPrescriptionsByDoctorID();
        }
    }

    let rows = [];
    for (const prescription of prescriptions) {
        rows.push(
            {
                id: prescription._id,
                patientName: prescription.dPName,
                diagnosis: prescription.dPDignosis,
                med1: prescription.dMed1,
                dose1: prescription.dDose1,
                med2: prescription.dMed2,
                dose2: prescription.dDose2
            }
        )
    }

    const headers = ["ID", "Patient Name", "Diagnosis", "Medicine 1", "Dosage", "Medicine 2", "Dosage"]

    return (
        <div style={{ marginBottom: 10 }}>
            <Card>
                <CardContent>
                    <h3>PATIENT PRESCRIPTIONS</h3>
                    <br />

                    <Grid item xl={4} lg={4}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="search">Search Prescription</InputLabel>
                            <OutlinedInput
                                id="search"
                                name="search"
                                type="text"
                                value={name}
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
                            <FormHelperText id="search-helper-text">Search prescriptions by patient name</FormHelperText>
                        </FormControl>
                    </Grid>
                    <br />

                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            loading={loading}
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
                        {/* <Button size="medium" color="primary" variant="contained" style={{ marginTop: 10 }}>Create Report</Button> */}
                        <PDF data={rows} headers={headers} title="Total Prescription Report" />
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}