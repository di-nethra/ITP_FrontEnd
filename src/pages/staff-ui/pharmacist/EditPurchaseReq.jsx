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

function EditPurchaseRequest() {
    const classes = useStyles();
   
    useEffect(() => {
      getmdRequest();
    }, []);

    const initialReq = {
        drug_id : "",
        medicine_name: "",
        mqty:""
  
      };
  
    const [mdrequests, setmdRequests] = useState(initialReq);
    const theme = useTheme();

    const getPurchaseRequest = (id) => {
        purchaseRequestServices
          .getOnePurchaseRequest(id)
          .then((response) => {
            setmdRequests(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
      };

      useEffect(() => {
        getPurchaseRequest(id.topicId);
      }, [id.topicId]);
  
    //Update 
  const updatePurchaseReq = (event) => {
    event.preventDefault();

    var temp = mdrequests.drug_id;
    if(temp.length === 3 ){
    }else{
      alert("Invalid contact number used to update");
      return null;
    }

    purchaseRequestServices
    .update(mdrequests._id,mdrequests)
    .then((response) => {
      Swal.fire(
        "Update Successfull",
        "You have successfully updated the inventory item",
        "success"
      );
      //window.location.reload();
    })
  }

  const handleInputChange = (e) => {
    console.log(e);
    const { name, value } = e.target;

    setInventory({
      ...mdrequests,
      [name]: value,
    });
  };  



  return (
    <div style={{marginLeft:120}}>
     
        <form className={classes.root} noValidate autoComplete="off" style={{marginTop:0}}>
            <TextField 
            id="drug_id" 
            label="Medicine ID" 
            variant="outlined"
            placeholder="Input Medicine ID"
            value={drugid}
            onChange={handleInputChange}
            required 
            style={{marginLeft: 40, width: 600}} />

            <TextField 
            id="medicine_name" 
            label="Medicine Name" 
            variant="outlined" 
            placeholder="Input Medicine Name"
            value={medicinename}
            required
            onChange={handleInputChange}
            style={{marginLeft: 40, width: 600}} />

            <TextField 
            id="mqty" 
            label="Quantity" 
            variant="outlined" 
            placeholder="Input Quantity"
            value={mqty}
            required
            onChange={handleInputChange}
            style={{marginLeft: 40, width: 600}} />

            <div style={{marginLeft:540}}>
                <Button
                variant="contained"
                color="primary"
                type="submit"
                className={classes.button}
                style={{marginTop:15, width: 100}}
                onClick={updatePurchaseReq}
                >
                Update
                </Button>
            </div>
        </form>
    </div>
  );
}

export default EditPurchaseRequest;