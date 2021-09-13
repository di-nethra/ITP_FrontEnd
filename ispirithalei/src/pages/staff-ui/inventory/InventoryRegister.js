import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ArrowForwardIosOutlinedIcon from '@material-ui/icons/ArrowForwardIosOutlined';
import DirectionsRunOutlinedIcon from '@material-ui/icons/DirectionsRunOutlined';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
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

  const b_useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
      
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

function InventoryRegister(){
    const classes = useStyles()
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
         <h3>Register a new Item</h3><br/>

         <TextField
          id="outlined-full-width"
          label="Item ID"
          style={{ margin: 8 }}
          placeholder="Enter Item ID"
          helperText=""
          required
          style={{width:600}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

         <TextField
          id="outlined-full-width"
          label="Item Name"
          style={{ margin: 8 }}
          placeholder="Enter Item Name"
          helperText=""
          style={{width:600}}
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
        />

        <TextField
          id="outlined-full-width"
          label="Supplier Name"
          style={{ margin: 8 }}
          placeholder="Enter Supplier Name"
          style={{width:600}}
          helperText=""
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
          style={{ margin: 8 }}
          placeholder="Enter Supplier Email"
          style={{width:600}}
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
          id="outlined-full-width"
          label="Supplier Contact Number"
          style={{ margin: 8 }}
          placeholder="Enter supplier contact number"
          style={{width:600}}
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
          id="outlined-full-width1"
          label="Purchase Price"
          style={{ margin: 8 }}
          placeholder="Enter Purchase Price"
          style={{width:300}}
          helperText=""
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
          style={{ margin: 8 }}
          placeholder="Enter the date"
          style={{width:200,marginLeft:100}}
          helperText=""
          fullWidth
          defaultValue={new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear()}
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
             {/* <input name = "name" type="text" placeholder = "Enter name" /><br/>
             <input name = "supplier" type="text" placeholder = "Enter Supplier Name" required/><br/>
             <input name = "supplierEmail" type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder = "Enter Supplier Email" required/><br/>
             <input name = "supplierContact" type="text" pattern="[0-9]{10}" required/> <br />
             <input name = "price" type="text" placeholder = "Enter purchase price" /><br/>
             <input name = "date" type = "text" value={new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear()} /><br/> */}
             {/* <select name="type" id="drugType">
                <option value="liquid">Liquid</option>
                <option value="tablet">Tablet</option>
                <option value="capsules">Capsules</option>
                <option value="inhalers">Inhaler</option>
                <option value="injections">Injection</option>
                <option value="other">Other</option>
            </select><br /> */}

            <Button
            variant="contained"
            color="primary"
            className={b_classes.button}
            endIcon={<ArrowForwardIosOutlinedIcon />}
            >
            Proceed to Register
            </Button> 
          

          <Button
            variant="contained"
            color="primary"
            className={b_classes.button}
            style={{marginLeft:'20px'}}
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