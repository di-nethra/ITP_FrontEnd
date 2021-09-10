import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { Grid } from "@material-ui/core";
import { Card } from "@material-ui/core";
import { CardActionArea } from "@material-ui/core";
import { Typography } from "@material-ui/core";
export default function DataTable(props) {
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

  console.log(props.creditCards[0]);

  const rows = [
    { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
    // { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
    // { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
    // { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
    // { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
    // { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
    // { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
    // { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
    // { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  ];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
      <Grid container spacing={8} justifyContent={"space-evenly"}>
        {props.creditCards.length ? (
          props.creditCards.map((creditCard, index) => (
            <Grid item xl={4} lg={4} key={index}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
              ></DataGrid>
              <Card>
                <CardActionArea href="">
                  <Typography align="center">
                    {creditCard.payment_id}
                  </Typography>
                  <Typography align="center">{creditCard.email}</Typography>
                  <Typography align="center">{creditCard.name}</Typography>
                  <Typography align="center">{creditCard.amount}</Typography>
                  <Typography align="center">{creditCard.date}</Typography>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        ) : (
          <h1>No creditCard found</h1>
        )}
      </Grid>
    </div>
  );
}
