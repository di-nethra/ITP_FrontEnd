import * as React from 'react';
import {DataGrid} from '@material-ui/data-grid';
import {useEffect, useState} from 'react';
import InventoryDataService from '../../../services/inventoryServices';
import PDF from "../../PDF";

export default function InventoryReportTable(){
  const [inventory, setInventory] = useState([]);

    useEffect(() => {
        retrieveInventory();
    }, []);

    const retrieveInventory = () => {
        InventoryDataService.getAll()
            .then(response => {
                setInventory(response.data);
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const columns = [
      {field: 'id', headerName: 'Item ID', width: 127},
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
        field: 'supplier_contact',
        headerName: 'Supplier Mobile No.',
        type: 'String',
        sortable: false,
        editable: true,
        width: 180,
      },
      {
          field: 'purchase_price',
          headerName: 'Purchase Price',
          type: 'String',
          sortable: false,
          editable: true,
          width: 180,
      },
      {
        field: 'registered_date',
        headerName: 'Registered Date',
        type: 'String',
        sortable: false,
        editable: true,
        width: 180,
      },
      {
        field: 'type_medicine',
        headerName: 'Type of Medicine',
        type: 'String',
        sortable: false,
        editable: true,
        width: 180,
      },
    ];
    
    
    let rows = [];
    for (const inventoryy of inventory) {
        rows.push(
            {
                id: inventoryy.item_id,
                item_name: inventoryy.item_name,
                supplier_name: inventoryy.supplier_name,
                supplier_email: inventoryy.supplier_email,
                supplier_contact:inventoryy.supplier_contact,
                purchase_price: inventoryy.purchase_price,
                registered_date:inventoryy.registered_date,
                type_medicine:inventoryy.type_medicine
            }
        )
    }

    const headers = ["Item ID","Item Name","Supplier Name", "Supplier Email","Supplier Contact","Purchase Price","Registered Date","Type of Medicine"];

    return (
    <div>
        <div style={{height: 400, width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                checkboxSelection
                disableSelectionOnClick
            />
        </div><br/>
        <PDF data={rows} headers={headers} title="Inventory Report" />
    </div>
    );

}
