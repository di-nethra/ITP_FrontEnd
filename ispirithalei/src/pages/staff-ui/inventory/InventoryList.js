import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from "react-router-dom";
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';

const hoveredStyle = {
  cursor: 'pointer'
};

const columns = [
  { field: 'id', headerName: 'Item ID', width: 127 },
  {
    field: 'item_name',
    headerName: 'Item Name',
    width: 160,
    editable: true,
  },
  {
    field: 'supplier_name',
    headerName: 'Supplier Name',
    width: 195,
    editable: true,
  },
  {
    field: 'supplier_email',
    headerName: 'Supplier Email',
    type: 'String',
    width: 180,
    editable: true,
  },
  {
    field: 'type_medicine',
    headerName: 'Type of Medicine',
    type:'String',
    // description: 'This column has a value getter and is not sortable.',
    sortable: false,
    editable: true,
    width: 180,
    // valueGetter: (params) =>
    //   `${params.getValue(params.id, 'firstName') || ''} ${
    //     params.getValue(params.id, 'lastName') || ''
    //   }`,
  },
  {
    field: "action",
    headerName: "Action",
    width: 180,
    align: 'center',
    renderCell: (params) => {
      return (
        <>
          <Link to={"/staff/inventorymanager/viewregistereditem/" + params.row.id}>
          
          <button className="userListEdit" >Edit</button>
            </Link>
            <DeleteSweepOutlinedIcon
            color = "secondary"
            style={hoveredStyle}
             />
  
        </>
      );
    },
  }
];

const rows = [
  { id: 1, item_name: 'Panadol', supplier_name: 'Jon', supplier_email: 'jon@gmail.com', type_medicine:'Capsule'},
  { id: 2, item_name: 'Piriton', supplier_name: 'Cersei', supplier_email: 'carsie@mail.com' , type_medicine:'Capsule'},
  { id: 3, item_name: 'Brufen', supplier_name: 'Jaime', supplier_email: 'jaime@gmail.com',type_medicine: 'Capsule' },
  { id: 4, item_name: 'Vitamin C', supplier_name: 'Arya', supplier_email: 'arya@gmail.com',type_medicine: 'Capsule'},
  { id: 5, item_name: 'Voltaren', supplier_name: 'Daenerys', supplier_email: 'daen@ymail.com', type_medicine: 'Capsule'},
  { id: 6, item_name: 'Candid B', supplier_name: null, supplier_email: null,type_medicine: 'Liquid'},
  { id: 7, item_name: 'Zaart', supplier_name: 'Ferrara', supplier_email: 'ferrera@mail.com',type_medicine:'Capsule' },
  { id: 8, item_name: 'Roparc', supplier_name: 'Rossini', supplier_email: 'Rossini@ymail.com',type_medicine: 'Capsule'},
  { id: 9, item_name: 'Penicilin', supplier_name: 'Harvey', supplier_email: 'harvey@yahoo.com',type_medicine: 'Capsule'},
];

export default function InventoryList() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}