import React, {useEffect, useState} from 'react';
import {DataGrid} from '@material-ui/data-grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import channellServices from "../../../services/echannelling.Service";
import PDF from "../../../components/PDF";
import {
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput
} from "@material-ui/core";
import {SearchRounded} from "@material-ui/icons";

export default function AllAppointments() {
    const columns = [
        {
            field: 'date',
            headerName: 'Date',
            width: 150,
            editable: false,
        },
        {
            field: 'time',
            headerName: 'Time',
            width: 150,
            editable: false,
        },

        {
            field: 'patientName',
            headerName: 'Patient Name',
            width: 280,
            editable: false,
        },

        {
            field: 'patientNIC',
            headerName: 'NIC',
            width: 180,
            editable: false,
        },

        {
            field: 'mobile',
            headerName: 'Mobile Number',
            width: 220,
            editable: false,
        },
    ];

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('');

    const handleSearchChange = (event) => {
        setQuery(event.target.value);
        if (event.target.value !== '') {
            setLoading(true);
            channellServices.search(event.target.value, "All")
                .then(response => {
                    setAppointments(response.data)
                })
                .catch(err => {
                        console.log(err);
                    }
                )
            setLoading(false);
        }
        else
            getAllAppointments();

    }

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
                    console.log("Error while getting data from database" + err);
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

    const headers = ["ID", "Date", "Time", "Name", "NIC", "Mobile Number"]


    return (
        <div>
            <Card>
                <CardContent>
                    <Grid container alignItems={"center"} justifyContent={"space-between"}>
                        <Grid item xl={6} lg={6}>
                            <h3>All Appointments</h3>
                        </Grid>
                        <Grid item xl={4} lg={4}>
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="search">Search Appointments</InputLabel>
                                <OutlinedInput
                                    id="search"
                                    type="text"
                                    value={query}
                                    onChange={handleSearchChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton>
                                                <SearchRounded/>
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={180}
                                />
                                <FormHelperText id="search-helper-text">Search Appointments by Patient NIC or
                                    Name</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid>

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
            <Card style={{margin: "15px 0", backgroundColor: "#D9FAFF"}}>
                <CardContent>
                    <p>
                        <strong>Disclaimer</strong> - You can produce a report of all the patient appointments. Please
                        use them
                        for your use only. We make it our obligation to protect patient privacy.
                    </p>
                    <div style={{marginTop: "15px"}}>
                        <PDF data={rows} headers={headers} title="Appointments Report"/>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}