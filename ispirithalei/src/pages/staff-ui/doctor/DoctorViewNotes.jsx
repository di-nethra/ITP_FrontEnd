import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';

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

const rows = [
    { id: 1, pNName: 'Praveen Dias', pMessage: 'Terminal illness stop unnessasary treatments', },
    { id: 2, pNName: 'Nipuna Dias', pMessage: 'Lung cancer patient', },
    { id: 3, pNName: 'Nalaka Silva', pMessage: 'Prolonged radiation exposure and cancer', },
    { id: 4, pNName: 'Ananda Silva', pMessage: 'Extreme paranoia', },
    { id: 5, pNName: 'Darley Samararathne', pMessage: 'Terminal illness stop unnessasary treatments', },
    { id: 6, pNName: 'Dudley Alvis', pMessage: 'Chronic heart failure', },
    { id: 7, pNName: 'Janaka Dias', pMessage: 'Unmanaged diabetes', },
];

export default function DoctorViewNotes() {
    return (
        <div>
            <Card>
                <CardContent>
                    <h3>DOCTOR NOTES LIST</h3>
                    <br />
                    <div style={{ height: 400, width: '100%' }}>
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            checkboxSelection
                            disableSelectionOnClick
                        />
                    </div>

                    <div style={{ marginTop: 15 }} className="buttonAlignRight">
                        <Tooltip title="Add another note" placement="bottom" aria-label="add">
                            <Fab color="primary">
                                <AddIcon fontSize="large" />
                            </Fab>
                        </Tooltip>
                    </div>
                </CardContent>
            </Card>

        </div>
    );
}