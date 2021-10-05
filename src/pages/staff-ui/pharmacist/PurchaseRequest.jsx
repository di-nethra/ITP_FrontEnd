import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {DataGrid} from '@material-ui/data-grid';
import purchaseRequestServices from '../../../services/purchaseRequestServices';
import {toast} from "react-toastify";
import {DeleteOutline, SearchRounded} from "@material-ui/icons";
import Swal from "sweetalert2";
import {
    FormControl,
    FormHelperText,
    Grid,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    useTheme
} from "@material-ui/core";
import {Link} from "react-router-dom";
import PDF from "../../../components/PDF";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function PurchaseRequestForm() {
    const classes = useStyles();

    useEffect(() => {
        getmdRequest();
    }, []);

    const [mdrequests, setmdRequests] = useState([]);
    const [query, setQuery] = useState('');

    const handleSearchChange = (event) => {
        setQuery(event.target.value);
        if (event.target.value !== '') {
            console.log(query);
            purchaseRequestServices.search(event.target.value)
                .then(response => {
                    setmdRequests(response.data)
                })
                .catch(err => {
                        console.log(err);
                    }
                )
        } else {
            getmdRequest()
        }

    }
    const theme = useTheme();


    const columns = [
        {field: 'drugid', headerName: 'ID', width: 150},
        {
            field: 'medicinename',
            headerName: 'Medicine Name',
            width: 200,
            editable: true,
        },
        {
            field: 'mqty',
            headerName: 'Medicine Quantity',
            width: 220,
            editable: true,
        },
        {
            field: 'action',
            headerName: 'Action',
            width: 180,
            sortable: false,
            editable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Button size="small" color="secondary" variant="contained" value={params.row.id}
                                onClick={deletepurchaseRequest}><DeleteOutline/></Button>

                        <Link to={"/staff/pharmasist/editpurchasereq/" + params.row.id}>
                            <button
                                style={{marginLeft: 40}}
                                className="userListEdit">
                                Edit
                            </button>
                        </Link>

                    </>
                );
            },
        },
    ];

    let rows = [];
    for (const mdrequest of mdrequests) {
        rows.push({
            id: mdrequest._id,
            drugid: mdrequest.drugid,
            medicinename: mdrequest.medicinename,
            mqty: mdrequest.mqty,
        });
    }

    const headers = ["Request ID", "Drug ID", "Medicine Name", "Quantity"];

    const getmdRequest = () => {
        purchaseRequestServices
            .getAll()
            .then((response) => {
                setmdRequests(response.data);
                // console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const deletepurchaseRequest = event => {
        let id = event.currentTarget.value;
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: theme.palette.secondary.main,
            cancelButtonColor: theme.palette.primary.main,
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                purchaseRequestServices.remove(id)
                    .then(() => {
                        Swal.fire(
                            'Deleted!',
                            'Request has been deleted.',
                            'success'
                        )
                        window.location.reload();
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        })
    }

    const handleSubmit = (e) => {
        console.log("submitted");

        e.preventDefault();

        const data = {
            drugid: drugid,
            medicinename: medicinename,
            mqty: mqty,
        };

        const tempid = data.drugid;
        if (tempid.length === 0) {
            alert("Medicine ID is a required field");
            return null;
        }

        const tempname = data.medicinename;
        if (tempname.length === 0) {
            alert("Medicine Name is a required field");
            return null;
        }

        const tempqt = data.mqty;
        if (tempqt.length === 0) {
            alert("Medicine Quantity is a required field");
            return null;
        }

        purchaseRequestServices
            .create(data)
            .then(() => {
                toast.success("Sucesfully Submitted the request", {
                    className: "error-toast",
                    draggable: true,
                    position: toast.POSITION.TOP_RIGHT,
                    autoClose: false,
                });
                window.location.reload();
            })
            .catch((e) => {
                console.log("this is the error:" + e);
            });
    };

    const [drugid, setDrugID] = useState("");
    const [medicinename, setMedicine] = useState("");
    const [mqty, setMQuantity] = useState("");

    const handIdChange = (event) => {
        setDrugID(event.target.value);
    };
    const handlMedicineChange = (event) => {
        setMedicine(event.target.value);
    };
    const handlQuantityChange = (event) => {
        setMQuantity(event.target.value);
    };

    const Demo = () => {
        setDrugID("1234");
        setMedicine("Panadol");
        setMQuantity("200");
    }


    return (
        <div style={{marginLeft: 120}}>

            <form className={classes.root} noValidate autoComplete="off" style={{marginTop: 0}} onSubmit={handleSubmit}>
                <h3>Purchase Request</h3>
                <TextField
                    id="drug_id"
                    label="Medicine ID"
                    variant="outlined"
                    placeholder="Input Medicine ID"
                    value={drugid}
                    onChange={handIdChange}
                    required
                    style={{marginLeft: 40, width: 600}}/>

                <TextField
                    id="medicine_name"
                    label="Medicine Name"
                    variant="outlined"
                    placeholder="Input Medicine Name"
                    value={medicinename}
                    required
                    onChange={handlMedicineChange}
                    style={{marginLeft: 40, width: 600}}/>

                <TextField
                    id="mqty"
                    label="Quantity"
                    variant="outlined"
                    placeholder="Input Quantity"
                    value={mqty}
                    required
                    onChange={handlQuantityChange}
                    style={{marginLeft: 40, width: 600}}/>

                <div style={{marginLeft: 420}}>


                    <Button
                        variant="contained"
                        color="secondary"
                        className={classes.button}
                        onClick={Demo}
                        style={{marginTop: 15, width: 100, marginRight: 20}}
                    >
                        Demo
                    </Button>

                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className={classes.button}
                        style={{marginTop: 15, width: 100}}
                    >
                        Send
                    </Button>

                </div>


                <div style={{height: 400, width: '80%', marginTop: 40}}>
                    <Grid container alignItems={"center"} justifyContent={"space-between"}>
                        {/* <Grid item xl={6} lg={6}>
                    <h3>Registered Items</h3>
                </Grid> */}
                        <Grid item xl={4} lg={4}>
                            <FormControl variant="outlined" style={{width: 350}}>
                                <InputLabel htmlFor="search">Search Requested Medicine</InputLabel>
                                <OutlinedInput
                                    id="search"
                                    type="text"
                                    value={query}
                                    onChange={handleSearchChange}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                            >
                                                <SearchRounded/>
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    labelWidth={180}
                                />
                                <FormHelperText id="search-helper-text">Search Medicine by the name</FormHelperText>
                            </FormControl>
                        </Grid>
                    </Grid><br/>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        // checkboxSelection
                        //disableSelectionOnClick
                    />
                </div>
                <br/>

                <PDF data={rows} headers={headers} title="Purchase Request Report"/>

            </form>
        </div>
    );
}

export default PurchaseRequestForm;