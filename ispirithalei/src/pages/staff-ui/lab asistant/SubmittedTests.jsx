import "./sbbmittedtests.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function SubbmittedTests() {
  const [data, setData] = useState(userRows);
    console.log(data)
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'dateSubbmitted',
        headerName: 'Date Subbmitted',
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
        field: 'specimenType',
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

