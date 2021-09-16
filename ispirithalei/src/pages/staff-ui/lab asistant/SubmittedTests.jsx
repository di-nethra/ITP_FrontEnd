import "./sbbmittedtests.css";
import Swal from 'sweetalert2';
import {DataGrid} from "@material-ui/data-grid";
import {Link} from "react-router-dom";
import {useEffect, useState} from 'react';
import TestDataService from "../../../services/tests.service";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from '@material-ui/core/Button';

export default function SubbmittedTests() {


  const columns = [
    {field: 'specimenid', headerName: 'Specimen ID', width: 140},
    {
      field: 'subbmitteddate',
      headerName: 'Date Subbmitted',
      width: 200,
      type: 'date',
      editable: true,
    },
    {
      field: 'patientsname',
      headerName: 'Patient Name',
      width: 200,
      editable: true,
    },
    {
      field: 'testtype',
      headerName: 'Specimen Type',
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
              <Link to={"/staff/labassistant/submittedtest/" + params.row.id}>
                <button className="userListEdit">Assign Staff</button>
              </Link>
              <Button
                  variant="contained"
                  color="secondary"
                  value={params.row.id}
                  onClick={deleteTest}
              >
                <DeleteIcon/>
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
        .then(() => {
          window.location.reload();
        })
        .catch(error => {
          console.log(error);
        })
  }
  const [tests, setTests] = useState([]);
  useEffect(() => {
    retieveSubbmittedTests();
  }, []);

  const retieveSubbmittedTests = () => {
    TestDataService.getAllSubbmited()
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
          subbmitteddate: test.subbmitteddate,
          testtype: test.testtype,
          patientsname: test.patientsname,
          status: test.status

        }
    )
  }


  return (
      <div style={{height: 550, width: '100%'}} className="userList">
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

