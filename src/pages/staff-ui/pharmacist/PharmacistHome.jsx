import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'patientname', headerName: 'Patient Name', width: 280 },
  { field: 'diagnosis', headerName: 'Diagnosis', width: 280},
  { field: 'action', headerName: 'Action',type:'button', width: 180},
];

const rows = [
 // { id: 1, patientname: 'Snow', diagnosis: 'Jon', action: 35 },
 // { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
 // { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
 // { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
];

export default function PharmacistHome() {
  return (
    <div style={ {marginTop: 20, marginLeft: 40 } }>
    <h3>PATIENT PRESCRIPTION</h3>
    <div style={{ height: 400, width: '80%', marginLeft: 80, marginTop: 40}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
      />
    </div>
    </div>
  );
}