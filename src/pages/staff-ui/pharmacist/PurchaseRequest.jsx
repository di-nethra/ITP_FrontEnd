import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { DataGrid } from '@material-ui/data-grid';
import purchaseRequestServices from '../../../services/purchaseRequestServices';
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { DeleteOutline } from "@material-ui/icons";
import Swal from "sweetalert2";
import { useTheme } from "@material-ui/core";
import {Link} from "react-router-dom";


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
    const theme = useTheme();
  
    const columns = [
      { field: 'drugid', headerName: 'ID', width: 150 },
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
                        onClick={deletepurchaseRequest}><DeleteOutline /></Button>

                    <Link to={"staff/pharmasist/editpurchasereq/"+ params.row.id} >
                        <button
                         style={{marginLeft:40}}
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
  
      purchaseRequestServices
        .create(data)
  
        .then((response) => {
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


  return (
    <div style={{marginLeft:120}}>
     
        <form className={classes.root} noValidate autoComplete="off" style={{marginTop:0}} onSubmit={handleSubmit}>
            <TextField 
            id="drug_id" 
            label="Medicine ID" 
            variant="outlined"
            placeholder="Input Medicine ID"
            value={drugid}
            onChange={handIdChange}
            required 
            style={{marginLeft: 40, width: 600}} />

            <TextField 
            id="medicine_name" 
            label="Medicine Name" 
            variant="outlined" 
            placeholder="Input Medicine Name"
            value={medicinename}
            required
            onChange={handlMedicineChange}
            style={{marginLeft: 40, width: 600}} />

            <TextField 
            id="mqty" 
            label="Quantity" 
            variant="outlined" 
            placeholder="Input Quantity"
            value={mqty}
            required
            onChange={handlQuantityChange}
            style={{marginLeft: 40, width: 600}} />

            <div style={{marginLeft:540}}>
                <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
                style={{marginTop:15, width: 100}}
                >
                Send
                </Button>
            </div>


            <div style={{ height: 200, width: '80%', marginTop:40 }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={4}
                   // checkboxSelection
                    //disableSelectionOnClick
                />
            </div>

        </form>
    </div>
  );
}

export default PurchaseRequestForm;