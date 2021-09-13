import React from 'react'
import { useEffect, useState } from 'react';
import { DataGrid } from "@material-ui/data-grid";
/*import { testRows } from "../../../dummyData";*/
import { Link } from "react-router-dom";
import './intransist.css';
import TestDataService from "../../../services/tests.service";

export default function InTransist() {
  /*const [data, setData] = useState(testRows);
    console.log(data)*/
  
  const columns = [
    { field: 'specimenid', headerName: 'Specimen ID', width: 140 },
    {
        field: 'starteddate',
        headerName: 'Date Started',
        width: 200,
        type:'date',
        editable: true,
    },
    {
        field: 'patientsname',
        headerName: 'Patient Name',
        width: 200,
        editable: true,
    },
    {
        field: 'inchargelabass',
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

  const [tests, setTests] = useState([]);
  useEffect(() => {
    retrieveStartedTests();
  }, []);

  const retrieveStartedTests = () => {
    TestDataService.getAllStarted()
      .then(response => {
        setTests(response.data)
      })
      .catch(err => {
        console.log("Error while getting data from database" + err);
      }
      )
  };

  let rows = [];
  for (const test of tests) {
    rows.push(
      {
        id: test._id,
        specimenid: test.specimenid,
        starteddate:test.starteddate,
        patientsname: test.patientsname,
        inchargelabass:test.inchargelabass,
        status: test.status

      }
    )
  }

  return (
    <div style={{ height: 550, width: '100%' }} className="userList">
      <DataGrid
        rows={rows}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}


