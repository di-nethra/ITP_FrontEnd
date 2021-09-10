import "./patientslist.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { patientRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function PatientsLists() {
  const [data, setData] = useState(patientRows);
    console.log(data)
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: 'id', headerName: 'Specimen ID', width: 140 },
    {
        field: 'patientName',
        headerName: 'Patient Name',
        width: 200,
        type:'text',
        editable: true,
    },
    {
        field: 'contactno',
        headerName: 'Contact No',
        width: 200,
        type:'text',
        editable: true,
    },
    {
        field: 'dateofbirth',
        headerName: 'Date of Birth',
        type: 'date',
        width: 160,
        editable: true,
    },
    {
        field: 'specimenType',
        headerName: 'Test Type',
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
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
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