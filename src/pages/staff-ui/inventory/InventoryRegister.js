import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import DirectionsRunOutlinedIcon from '@material-ui/icons/DirectionsRunOutlined';
import "../inventory/page.css"
import InventoryDataService from '../../../services/inventoryServices';
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


function InventoryRegister() {
  const b_classes = useStyles();

  // //date value
  // const date = new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear();
  // const dateString = date.toString();

  const initialInventoryState = {
    // id: null,
    item_id: "",
    item_name: "",
    supplier_name: "",
    supplier_email: "",
    supplier_contact: "",
    purchase_price: "",
    registered_date: "",
    type_medicine: ""
  };
  const [inventory, setInventory] = useState(initialInventoryState);
  // const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const {name, value} = event.target;
    setInventory({...inventory, [name]: value});
  };

  const saveInventory = () => {
    var data = {
      item_id: inventory.item_id,
      item_name: inventory.item_name,
      supplier_name: inventory.supplier_name,
      supplier_email: inventory.supplier_email,
      supplier_contact: inventory.supplier_contact,
      purchase_price: inventory.purchase_price,
      registered_date: inventory.registered_date,
      type_medicine: inventory.type_medicine
    };
    
    const tempid = data.item_id;
    if(tempid.length === 0){
      alert("Item ID is a required field");
      return null;
    }

    const tempsupEmail = data.supplier_email;
    if(tempsupEmail.length === 0){
      alert("Supplier Email is a required field");
      return null;
    }

    const tempsupContact = data.supplier_contact;
    if(tempsupContact.length === 0){
      alert("Supplier Contact is a required field");
      return null;
    }


    if(data.supplier_email.includes(".com",0) && (data.supplier_email.includes("@",0))){
      // alert("Email success");
    }else{
      alert("Email Error");
      return null;
    }

    const temp = data.supplier_contact;
    if(temp.length === 10){
      // alert("Success");
    }else{
      alert("Invalid contact number")
      return null;
    }
    InventoryDataService.create(data)
        .then(response => {
          setInventory({
            // id: response.data.id,
            item_id: response.data.item_id,
            item_name: response.data.item_name,
            supplier_name: response.data.supplier_name,
            supplier_email: response.data.supplier_email,
            supplier_contact: response.data.supplier_contact,
            purchase_price: response.data.purchase_price,
            registered_date: response.data.registered_date,
            type_medicine: response.data.type_medicine
          });
          // setSubmitted(true);
          console.log(response.data);
          Swal.fire(
            "Registration Successfull",
            "You have successfully registered the inventory item",
            "success"
          );
          window.location.reload();
        })
        .catch(e => {
          console.log(e);
        });
  };

  const newInventory = () => {
    setInventory(initialInventoryState);
    // setSubmitted(false);
  };


  return (
      <div className="formCard">
        <form style={{marginLeft: '250px'}}>
          <h3>Register a new Item</h3><br/>

          <TextField
              id="item_id"
              name="item_id"
              label="Item ID"
              value={inventory.item_id}
              onChange={handleInputChange}
              style={{margin: 8, width: 600}}
              placeholder="Enter Item ID"
              helperText=""
              required
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
          />

          <TextField
              id="item_name"
              name="item_name"
              label="Item Name"
              value={inventory.item_name}
              onChange={handleInputChange}
              style={{margin: 8, width: 600}}
              placeholder="Enter Item Name"
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
          />

          <TextField
              id="supplier_name"
              name="supplier_name"
              label="Supplier Name"
              value={inventory.supplier_name}
              onChange={handleInputChange}
              style={{margin: 8, width: 600}}
              placeholder="Enter Supplier Name"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
          />

          <TextField
              id="supplier_email"
              name="supplier_email"
              label="Supplier Email"
              value={inventory.supplier_email}
              onChange={handleInputChange}
              style={{margin: 8, width: 600}}
              placeholder="Enter Supplier Email"
              required
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
          />

          <TextField
              id="supplier_contact"
              name="supplier_contact"
              label="Supplier Contact Number"
              value={inventory.supplier_contact}
              onChange={handleInputChange}
              style={{margin: 8, width: 600}}
              placeholder="Enter supplier contact number"
              required
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
          />
          <br/>

          <TextField
              id="purchase_price"
              name="purchase_price"
              label="Purchase Price"
              value={inventory.purchase_price}
              onChange={handleInputChange}
              style={{margin: 8, width: 300}}
              placeholder="Enter Purchase Price"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
          />

          <TextField
              id="registered_date"
              name="registered_date"
              label="Registered Date"
              value={inventory.registered_date}
              onChange={handleInputChange}
              placeholder="Enter the date"
              style={{width: 200, marginLeft: 100, margin: 8}}
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
          />
          <br/>

          <TextField
              id="type_medicine"
              name="type_medicine"
              label="Type of Medicine"
              value={inventory.type_medicine}
              onChange={handleInputChange}
              style={{margin: 8, width: 300}}
              placeholder="Enter the type"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined"
          />


          <br/><br/>


          <Button
              variant="contained"
              color="primary"
              className={b_classes.button}
              onClick={saveInventory}
              endIcon={<ArrowForwardIosOutlinedIcon/>}

          >
            Proceed to Register
          </Button>


          <Button
              variant="contained"
              color="primary"
              className={b_classes.button}
              onClick={newInventory}
              style={{marginLeft: '20px'}}
              endIcon={<DirectionsRunOutlinedIcon/>}
          >
            Demo
          </Button>

        </form>
      </div>
  );
}

export default InventoryRegister