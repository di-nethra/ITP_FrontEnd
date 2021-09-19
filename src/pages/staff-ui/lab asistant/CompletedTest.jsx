import "./completedtest.css";
import Swal from 'sweetalert2';
import { DataGrid } from "@material-ui/data-grid";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import TestDataService from "../../../services/tests.service";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from '@material-ui/core/Button';

export default function SubbmittedTests() {

  const columns = [
    { field: 'specimenid', headerName: 'Specimen ID', width: 140 },
    {
      field: 'starteddate',
      headerName: 'Date Started',
      width: 200,
      type: 'date',
      editable: true,
    },
    {
      field: 'completeddate',
      headerName: 'Date Finished',
      width: 200,
      type: 'date',
      editable: true,
    },
    {
      field: 'testtype',
      headerName: 'Specimen Type',
      type: 'text',
      width: 130,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      type: 'text',
      width: 130,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 275,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/staff/labassistant/downloadform/" + params.row.id}>
              <button className="userListEdit2">Report Download</button>
            </Link>
            <Button
              variant="contained"
              color="secondary"
              value={params.row.id}
              onClick={deleteTest}
            >
              <DeleteIcon />
            </Button>
          </>
        );
      },
    }
  ];


  const deleteTest = event => {
    Swal.fire({
      icon: 'success',
      title: 'Test has been Deleted',
      showConfirmButton: false,
      timer: 1500
    })
    TestDataService.remove(event.currentTarget.value)
      .then(response => {
        window.location.reload();
      })
      .catch(error => {
        console.log(error);
      })
  }
  const [tests, setTests] = useState([]);
  useEffect(() => {
    retrieveCompletedTests();
  }, []);

  const retrieveCompletedTests = () => {
    TestDataService.getAllCompleted()
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
        starteddate: test.starteddate,
        completeddate: test.completeddate,
        testtype: test.testtype,
        patientsname: test.patientsname,
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

