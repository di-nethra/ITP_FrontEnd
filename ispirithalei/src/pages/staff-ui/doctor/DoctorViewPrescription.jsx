import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import './doctor.css';

const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
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
    },
];

const rows = [
    { id: 1, patientName: 'Praveen Dias', diagnosis: 'Common Cold', action: 35 },
    { id: 2, patientName: 'David Perera', diagnosis: 'Head ache and Cough', action: 35 },
    { id: 3, patientName: 'Kamal Jayantha', diagnosis: 'Chest Pain', action: 35 },
    { id: 4, patientName: 'Namal Ranawaka', diagnosis: 'Cough', action: 35 },
    { id: 5, patientName: 'Amali Priyawansa', diagnosis: 'Heart burns', action: 35 },
    { id: 6, patientName: 'Kamal Gunawansa', diagnosis: 'Heart attack', action: 35 },
    { id: 7, patientName: 'Janaka Sampath', diagnosis: 'Headache', action: 35 },
    { id: 8, patientName: 'Supun Shantha', diagnosis: 'Covid-19', action: 35 },
    { id: 9, patientName: 'Shantha Sanath', diagnosis: 'Cold', action: 35 },
    { id: 10, patientName: 'Janaka Jayasinghe', diagnosis: 'Cough', action: 35 },
];

export default function DoctorViewPrescription() {

    return (
        <div>
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
                    <div style={{ marginTop: 15 }}  className="buttonAlignRight">
                        <Tooltip title="Add Prescription" placement="bottom" aria-label="add">
                            <Fab color="primary">
                                <AddIcon fontSize="large" />
                            </Fab>
                        </Tooltip>
                    </div>
                </CardContent>
            </Card>

            <Card style={{marginTop: 15, backgroundColor: "#D9FAFF" }}>
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