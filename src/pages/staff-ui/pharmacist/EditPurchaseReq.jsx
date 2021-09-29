import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import purchaseRequestServices from '../../../services/purchaseRequestServices';
import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { useParams } from 'react-router';


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function EditPurchaseReq() {
    const classes = useStyles();
   
    // useEffect(() => {
    //   getPurchaseRequest();
    // }, []);

    const initialReq = {
        drugid :"",
        medicinename:"",
        mqty:""
  
      };

    const id = useParams();
  
    const [mdrequests, setmdRequests] = useState(initialReq);
    //const theme = useTheme();

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
          console.log("drugid" +id.topicId);
        getPurchaseRequest(id.topicId);
      }, [id.topicId]);
  
    //Update 
  const updatePurchaseReq = (event) => {
    event.preventDefault();
    purchaseRequestServices
    .update(mdrequests._id,mdrequests)
    .then((response) => {
      Swal.fire(
        "Update Successfull",
        "You have successfully updated the inventory item",
        "success"
      );
      //window.location.reload();
    }).catch((e)=>{
        console.log(e);
    }) 
  }

  const handleInputChange = (e) => {
    console.log(e);
    const { name, value } = e.target;

    setmdRequests({
      ...mdrequests,
      [name]: value,
    });
  };  



  return (
    <div style={{marginLeft:120}}>
     
        <form className={classes.root} noValidate autoComplete="off" style={{marginTop:0}}>
        <h3>Edit Purchase Request</h3>
            <TextField 
            id="drugid" 
            name="drugid" 
            label="Medicine ID" 
            variant="outlined"
            placeholder="Input Medicine ID"
            value={mdrequests.drugid}
            onChange={handleInputChange}
            required 
            style={{marginLeft: 40, width: 600}} />

            <TextField 
            id="medicinename" 
            name="medicinename"
            label="Medicine Name" 
            variant="outlined" 
            placeholder="Input Medicine Name"
            value={mdrequests.medicinename}
            required
            onChange={handleInputChange}
            style={{marginLeft: 40, width: 600}} />

            <TextField 
            id="mqty" 
            name="mqty"
            label="Quantity" 
            variant="outlined" 
            placeholder="Input Quantity"
            value={mdrequests.mqty}
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

export default EditPurchaseReq;