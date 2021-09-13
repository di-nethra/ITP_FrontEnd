import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import DirectionsRunOutlinedIcon from '@material-ui/icons/DirectionsRunOutlined';
import "../inventory/page.css"
import InventoryDataServices from '../../../services/inventoryServices';


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



const f_useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 220,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function InventoryRegister() {
  const b_classes = useStyles();

  // //date value
  // const date = new Date().getDate() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getFullYear();
  // const dateString = date.toString();

  const initialInventoryState = {
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
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.current.target;
    setInventory({ ...inventory, [name]: value });
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

    InventoryDataServices.create(data)
      .then(response => {
        console.log(data);
        setInventory({
          item_id: response.data.item_id,
          item_name: response.data.item_name,
          supplier_name: response.data.supplier_name,
          supplier_email: response.data.supplier_email,
          supplier_contact: response.data.supplier_contact,
          purchase_price: response.data.purchase_price,
          registered_date: response.data.registered_date,
          type_medicine: response.data.type_medicine
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newInventory = () => {
    setInventory(initialInventoryState);
    setSubmitted(false);
  };


  return (
    <div className="formCard"
    >
      <form style={{ marginLeft: '250px' }}>
        <h3>Register a new Item</h3><br />

        <TextField
          id="item_id"
          label="Item ID"
          defaultValue={inventory.item_id}
          onChange={handleInputChange}
          style={{ margin: 8 }}
          placeholder="Enter Item ID"
          helperText=""
          required
          style={{ width: 600 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <TextField
          id="item_name"
          label="Item Name"
          defaultValue={inventory.item_name}
          onChange={handleInputChange}
          style={{ margin: 8 }}
          placeholder="Enter Item Name"
          helperText=""
          style={{ width: 600 }}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <TextField
          id="supplier_name"
          label="Supplier Name"
          defaultValue={inventory.supplier_name}
          onChange={handleInputChange}
          style={{ margin: 8 }}
          placeholder="Enter Supplier Name"
          style={{ width: 600 }}
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <TextField
          id="supplier_email"
          label="Supplier Email"
          defaultValue={inventory.supplier_email}
          onChange={handleInputChange}
          style={{ margin: 8 }}
          placeholder="Enter Supplier Email"
          style={{ width: 600 }}
          required
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <TextField
          id="supplier_contact"
          label="Supplier Contact Number"
          defaultValue={inventory.supplier_contact}
          onChange={handleInputChange}
          style={{ margin: 8 }}
          placeholder="Enter supplier contact number"
          style={{ width: 600 }}
          helperText=""
          required
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <br />

        <TextField
          id="purchase_price"
          label="Purchase Price"
          defaultValue={inventory.purchase_price}
          onChange={handleInputChange}
          style={{ margin: 8 }}
          placeholder="Enter Purchase Price"
          style={{ width: 300 }}
          helperText=""
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <TextField
          id="registered_date"
          label="Registered Date"
          defaultValue={inventory.registered_date}
          onChange={handleInputChange}
          style={{ margin: 8 }}
          placeholder="Enter the date"
          style={{ width: 200, marginLeft: 100 }}
          helperText=""
          fullWidth
          // value={dateString}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />
        <br />

        <TextField
          id="type_medicine"
          label="Type of Medicine"
          defaultValue={inventory.type_medicine}
          onChange={handleInputChange}
          style={{ margin: 8 }}
          placeholder="Enter the type"
          style={{ width: 300 }}
          helperText=""
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
          onClick={saveInventory}
          endIcon={<ArrowForwardIosOutlinedIcon />}
        >
          Proceed to Register
        </Button>


        <Button
          variant="contained"
          color="primary"
          className={b_classes.button}
          onClick={newInventory}
          style={{ marginLeft: '20px' }}
          endIcon={<DirectionsRunOutlinedIcon />}
        >
          Demo
        </Button>

        {/* <button >Register</button><br />
            <button>Demo</button> */}
      </form>
    </div>
  );
}

export default InventoryRegister