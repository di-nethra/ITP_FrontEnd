import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import "../inventory/page.css"
import { useParams } from 'react-router';
import inventoryServices from '../../../services/inventoryServices'
import Swal from 'sweetalert2'

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      width: '25ch',
    },
  }));



function InventoryItem(){
    const b_classes = useStyles();

    const id = useParams();

    const initialInventory = {
      item_name : "",
      supplier_name: "",
      supplier_email:"",
      supplier_contact:"",
      purchase_price:"",
      registered_date:"",
      type_medicine:""

    };

    const [inventory, setInventory] = useState(initialInventory);
    
      //get inventory details by id
    const getInventory = (id) => {
    inventoryServices
      .getOneInventory(id)
      .then((response) => {
        setInventory(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getInventory(id.topicId);
  }, [id.topicId]);

  //Update Inventory
  const updateInventory = (event) => {
    event.preventDefault();
    if(inventory.supplier_email.includes("@",0) && inventory.supplier_email.includes(".com",0)){
    }else{
      alert("Invalid Email address used to update");
      return null;
    }

    var temp = inventory.supplier_contact;
    if(temp.length === 10 ){
    }else{
      alert("Invalid contact number used to update");
      return null;
    }

    inventoryServices
    .update(inventory._id,inventory)
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
      ...inventory,
      [name]: value,
    });
  };  


 return (
     <div className="formCard"
     >
         <form  style={{marginLeft:'250px'}}>
         <h3>Edit Details of an Item</h3>
         <TextField
            id="outlined-full-width"
            name = "item_name"
            value={inventory.item_name}
            onChange={handleInputChange}
            label="Item Name"
            style={{ margin: 8,width:600 }}
            placeholder="Enter Item Name"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />

        <TextField
            id="outlined-full-width"
            name = "supplier_name"
            value={inventory.supplier_name}
            onChange={handleInputChange}
            label="Supplier Name"
            style={{ margin: 8,width:600 }}
            placeholder="Enter Supplier Name"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />

        <TextField
            id="outlined-full-width"
            name = "supplier_email"
            value={inventory.supplier_email}
            onChange={handleInputChange}
            label="Supplier Email"
            style={{ margin: 8,width:600 }}
            placeholder="Enter Supplier Email"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
          />

        <TextField
          id="outlined-full-width"
          name = "supplier_contact"
          value={inventory.supplier_contact}
          onChange={handleInputChange}
          label="Supplier Contact Number"
          style={{ margin: 8 , width:600}}
          placeholder="Enter supplier contact number"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          />
        <br />

        <TextField
          id="outlined-full-width1"
          name="purchase_price"
          value={inventory.purchase_price}
          onChange={handleInputChange}
          label="Purchase Price"
          style={{ margin: 8 , width:300}}
          placeholder="Enter Purchase Price"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
         
         <TextField
          id="outlined-full-width"
          name = "registered_date"
          value={inventory.registered_date}
          onChange={handleInputChange}
          label="Registered Date"
          placeholder="Enter the date"
          style={{width:200,marginLeft:100, margin: 8}}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
          <br/>

          <TextField
          id="outlined-full-width"
          name = "type_medicine"
          value={inventory.type_medicine}
          onChange={handleInputChange}
          label="Type of Medicine"
          placeholder="Enter the type"
          style={{width:200,marginLeft:100, margin: 8}}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <br /><br />
             

            <Button
            variant="contained"
            color="primary"
            className={b_classes.button}
            style = {{backgroundColor:'green'}}
            endIcon={<EditOutlinedIcon />}
            onClick={updateInventory}
            >
            Update
            </Button> 
          

            
         </form>
     </div>
 );
}

export default InventoryItem
