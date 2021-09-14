import * as React from 'react';
import {useEffect, useState} from 'react';
import {DataGrid} from '@material-ui/data-grid';
import {Link} from "react-router-dom";
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';
import InventoryDataService from '../../../services/inventoryServices';
import Button from '@material-ui/core/Button';

export default function InventoryList() {
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

    const hoveredStyle = {
        cursor: 'pointer'
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
            field: 'type_medicine',
            headerName: 'Type of Medicine',
            type: 'String',
            sortable: false,
            editable: true,
            width: 180,
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

                            <button className="userListEdit">Edit</button>
                        </Link>
                        <Button size="small" color="secondary" variant="contained" value={params.row.id}
                                onClick={deleteInventory}><DeleteSweepOutlinedIcon
                            color="primary"
                            style={hoveredStyle}/></Button>


                    </>
                );
            },
        }
    ];

    const deleteInventory = event => {
        console.log(event.currentTarget.value)
        InventoryDataService.remove(event.currentTarget.value)

            .then(response => {
                alert(response.statusText)
                window.location.reload();
            })
            .catch(error => {
                console.log(error);
            })
    }

    let rows = [];
    for (const inventoryy of inventory) {
        rows.push(
            {
                id: inventoryy._id,
                item_name: inventoryy.item_name,
                supplier_name: inventoryy.supplier_name,
                supplier_email: inventoryy.supplier_email,
                type_medicine: inventoryy.type_medicine

            }
        )
    }

    return (
        <div style={{height: 400, width: '100%'}}>
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