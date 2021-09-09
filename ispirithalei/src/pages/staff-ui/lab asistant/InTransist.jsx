import React from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { testRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import './intransist.css'

export default function InTransist() {
  const [data, setData] = useState(testRows);
    console.log(data)
  
  const columns = [
    { field: 'id', headerName: 'Specimen ID', width: 140 },
    {
        field: 'dateStarted',
        headerName: 'Date Started',
        width: 200,
        type:'date',
        editable: true,
    },
    {
        field: 'patientName',
        headerName: 'Patient Name',
        width: 200,
        editable: true,
    },
    {
        field: 'labassistantname',
        headerName: 'Lab Assistant Name',
        type: 'text',
        width: 160,
        editable: true,
    },
    {
        field: 'status',
        headerName: 'Status',
        type: 'text',
        width: 150,
        editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/staff/labassistant/intransisttests/" + params.row.id}>
              <button className="userListEdit1">Input Test Results</button>
            </Link>
          </>
        );
      },
    }
  ];

  return (
    <div style={{ height: 550, width: '100%' }} className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}


