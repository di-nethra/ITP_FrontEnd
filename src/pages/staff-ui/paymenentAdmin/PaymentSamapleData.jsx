import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.getValue(params.id, "firstName") || ""} ${
        params.getValue(params.id, "lastName") || ""
      }`,
  },
];

const rows = [
  { id: 1, lastName: "Samarakoon", firstName: "Anjana", age: 35 },
  { id: 2, lastName: "Jaysooriya", firstName: "Asel", age: 42 },
  { id: 3, lastName: "kahandawarachchi", firstName: "Aman", age: 45 },
  { id: 4, lastName: "Rathnaweera", firstName: "Wishwa", age: 16 },
  { id: 5, lastName: "Bandara", firstName: "Yomal", age: null },
  { id: 6, lastName: "Malinga", firstName: "Danushka", age: 150 },
  { id: 7, lastName: "Silva", firstName: "Chamara", age: 44 },
  { id: 8, lastName: "Mendis", firstName: "Kusal", age: 36 },
];

export default function PaymentSamapleData() {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
