import React,{ useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
// import DirectionsRunOutlinedIcon from '@material-ui/icons/DirectionsRunOutlined';
import "../inventory/page.css"
import { useParams } from 'react-router';
import inventoryServices from '../../../services/inventoryServices'
import Swal from 'sweetalert2'

const useStyles = makeStyles((theme) => ({
  root: {
    //display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const b_useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

 function Restock() {
  const classes = useStyles();
  const b_classes = b_useStyles();

  const id = useParams();

  const initialRestock = {
    item_id:"",
    item_name:"",
    quantity:"",
    reorder_level:""
  }

  const [inventory, setInventory] = useState(initialRestock);

    //get inventory details by id
    const getInventory = (id) => {
      inventoryServices
        .getOneInventory(id)
        .then((response) => {
          setInventory(response.data);
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    };
  
    useEffect(() => {
      getInventory(id.topicId);
    }, [id.topicId]);

      //Restock Inventory
  const restockInventory = (event) => {
    event.preventDefault();
    if(inventory.item_id.length === 0){
      alert("ItemID is a required field");
      return null;
    }

    if(inventory.quantity.length === 0){
      alert("Quantity is a required field");
      return null;
    }

    if(inventory.reorder_level.length === 0){
      alert("Reorder Level is a required field");
      return null;
    }

    inventoryServices
    .update(inventory._id,inventory)
    .then((response) => {
      Swal.fire(
        "Restock Successfull",
        "You have successfully restocked the inventory item",
        "success"
      );
      //window.location.reload();
    })
  }

  // const restockDemo = () =>{
  //   setInventory({
  //     // item_id:"",
  //     // item_name:"",
  //     quantity:"1000",
  //   reorder_level:"100"
  //   })
  // }
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setInventory({
      ...inventory,
      [name]: value,
    });
  };  

    return(
      <div style = {{paddingLeft:"30%"}}>
        <div className="formCard">
            <div className={classes.root}>
              <h3>Restock Items</h3><br/>
            <TextField
              label="Item ID"
              id="outlined-margin-none"
              name = "item_id"
              value={inventory.item_id}
              onChange={handleInputChange}
              className={classes.textField}
              helperText="ID of the item"
              variant="outlined"
              required
            /> <br/><br/>

            <TextField
              label="Item Name"
              id="outlined-margin-none"
              name = "item_name"
              value={inventory.item_name}
              onChange={handleInputChange}
              className={classes.textField}
              helperText="Name of the item"
              variant="outlined"
            /><br/><br/>

            <TextField
              label="Quantity"
              id="outlined-margin-none"
              name = "quantity"
              value={inventory.quantity}
              onChange={handleInputChange}
              className={classes.textField}
              helperText="Enter the new quantity"
              required
              variant="outlined"
            /><br/><br/>

            <TextField
              label="Reorder Level"
              id="outlined-margin-none"
              name = "reorder_level"
              value={inventory.reorder_level}
              onChange={handleInputChange}
              className={classes.textField}
              style={{margin:8}}
              helperText="Enter the new Reorder Level"
              required
              variant="outlined"
            /><br/><br/>

            <Button
                variant="contained"
                color="primary"
                className={b_classes.button}
                endIcon={<AddCircleOutlineIcon />}
                onClick={restockInventory}
              >
              Restock
              </Button>

              {/* <Button
                variant="contained"
                color="primary"
                className={b_classes.button}
                // onClick={restockDemo}
                endIcon={<DirectionsRunOutlinedIcon />}
              >
              Demo
              </Button> */}

            </div>
        </div>
      </div>
    );
}
export default Restock
