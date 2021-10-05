import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Link } from "react-router-dom";
import DeleteSweepOutlinedIcon from '@material-ui/icons/DeleteSweepOutlined';
import InventoryDataService from '../../../services/inventoryServices';
import Button from '@material-ui/core/Button';
import {
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@material-ui/core";
import {SearchRounded} from "@material-ui/icons";

export default function InventoryList() {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [query, setQuery] = useState('');

    const handleSearchChange = (event) => {
        setQuery(event.target.value);
        if (event.target.value !== '') {
            console.log(query);
            setLoading(true);
            InventoryDataService.search(event.target.value)
                .then(response => {
                    setInventory(response.data)
                })
                .catch(err => {
                        console.log(err);
                    }
                )
            setLoading(false);
        }
        else{
            retrieveInventory()
        }

    }

    useEffect(() => {
        retrieveInventory();
    }, []);

    const retrieveInventory = (event) => {
        setQuery(event?.target.value)
        InventoryDataService.getAll()
            .then(response => {
                setInventory(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    };

    const hoveredStyle = {
        cursor: 'pointer'
    };

    const columns = [
        { field: 'item_id', headerName: 'Item ID', width: 127 },
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
            width: 220,
            align: 'center',
            renderCell: (params) => {
                return (
                    <>
                        <Link to={"/staff/inventorymanager/viewregistereditem/" + params.row.id}>

                            <button className="userListEdit">Edit</button>
                        </Link>

                        <Link to={"/staff/inventorymanager/restockitems/" + params.row.id}>
                            <button className="userListEdit" >Restock</button>
                        </Link>

                        <Button size="small" color="secondary" variant="contained" value={params.row.id}
                            onClick={deleteInventory}><DeleteSweepOutlinedIcon
                                color="primary"
                                style={hoveredStyle} /></Button>




                    </>
                );
            },
        }
    ];

    const deleteInventory = event => {
        InventoryDataService.remove(event.currentTarget.value)

            .then(response => {
                alert("Delete Item?")
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
                item_id: inventoryy.item_id,
                item_name: inventoryy.item_name,
                supplier_name: inventoryy.supplier_name,
                supplier_email: inventoryy.supplier_email,
                type_medicine: inventoryy.type_medicine

            }
        )
    }

    return (
        <div style={{ height: 400, width: '100%' }}>
            <Grid container alignItems={"center"} justifyContent={"space-between"}>
                {/* <Grid item xl={6} lg={6}>
                    <h3>Registered Items</h3>
                </Grid> */}
                <Grid item xl={4} lg={4}>
                    <FormControl variant="outlined">
                        <InputLabel htmlFor="search">Search Supplier Name</InputLabel>
                        <OutlinedInput
                            id="search"
                            type="text"
                            value={query}
                            onChange={ handleSearchChange}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                    >
                                        <SearchRounded />
                                    </IconButton>
                                </InputAdornment>
                            }
                            labelWidth={180}
                        />
                        <FormHelperText id="search-helper-text">Search Items by the name of the Supplier provided</FormHelperText>
                    </FormControl>
                </Grid>
            </Grid><br/>

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