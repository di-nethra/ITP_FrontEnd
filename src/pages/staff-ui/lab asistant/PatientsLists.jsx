import "./patientslist.css";
import Swal from 'sweetalert2';
import {DataGrid} from "@material-ui/data-grid";
import {useEffect, useState} from 'react';
import TestDataService from "../../../services/tests.service";
import DeleteIcon from "@material-ui/icons/Delete";
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

export default function PatientsLists() {


  const columns = [
    {field: 'specimenid', headerName: 'Specimen ID', width: 140},
    {
      field: 'patientsname',
      headerName: 'Patient Name',
      width: 200,
      type: 'text',
      editable: true,
    },
    {
      field: 'contactnumber',
      headerName: 'Contact No',
      width: 160,
      type: 'text',
      editable: true,
    },
    {
      field: 'dateofbirth',
      headerName: 'Age',
      type: 'date',
      width: 130,
      editable: true,
    },
    {
      field: 'testtype',
      headerName: 'Test Type',
      type: 'text',
      width: 130,
      editable: true,
    },
    {
      field: "action",
      headerName: "Action",
      width: 230,
      renderCell: (params) => {
        return (
            <>
              <Link to={"/staff/labassistant/patientupdate/" + params.row.id}>
                <button className="userListEdit">Update Details</button>
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
    retieveAllPatients();
  }, []);

  const retieveAllPatients = () => {
    TestDataService.getAll()
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
          status: test.status,
          contactnumber: test.contactnumber,
          dateofbirth: test.dateofbirth

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