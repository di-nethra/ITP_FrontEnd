import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import "../inventory/page.css"


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

function InventoryItem(){
    const b_classes = useStyles();
    const f_classes = f_useStyles();

    const [state, setState] = React.useState({
        type: '',
        name: 'hai',
      });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
          ...state,
          [name]: event.target.value,
        });
      };


 return (
     <div className="formCard"
     >
         <form  style={{marginLeft:'250px'}}>
         <h3>Edit Details of an Item</h3>
         <TextField
          id="outlined-full-width"
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

          <FormControl variant="outlined" className={f_classes.formControl}>
            <InputLabel htmlFor="outlined-age-native-simple">Type of medicine</InputLabel>
                <Select
                    native
                    value={state.type}
                    onChange={handleChange}
                    label="Type of medicine"
                    inputProps={{
                        name: 'type',
                        id: 'outlined-age-native-simple',
                    }}
                >
                <option aria-label="None" value="" />
                <option value={"liquid"}>Liquid</option>
                <option value={"injection"}>Injection</option>
                <option value={"capsules"}>Capsules</option>
                </Select>
      </FormControl>

        <br /><br />
             

            <Button
            variant="contained"
            color="primary"
            className={b_classes.button}
            style = {{backgroundColor:'green'}}
            endIcon={<EditOutlinedIcon />}
            >
            Update
            </Button> 
          
            {/* <Button
            variant="contained"
            color="primary"
            className={b_classes.button}
            style = {{backgroundColor:'red',marginLeft:'20px'}}
            endIcon={<DeleteOutlineOutlinedIcon />}
            >
            Delete
            </Button>  */}

            
         </form>
     </div>
 );
}

export default InventoryItem
