import React from "react";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles } from "@material-ui/core/styles";
const countries = [
  {
    value: "Rs",
    label: "Sri Lanka",
  },
  {
    value: "IRs",
    label: "India",
  },
  {
    value: "USD",
    label: "USA",
  },
  {
    value: "Yen",
    label: "Japan",
  },
];
const useStyles = makeStyles({
  TextField1: {
    marginTop: "20px",
    textAlign: "left",
  },
});

function DropDown() {
  const classes = useStyles();
  const [Country, setCountry] = useState("");
  const handleChanges = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <TextField
        id="standard-select-country"
        select
        label="Country"
        fullWidth="true"
        variant="outlined"
        value={Country}
        onChange={handleChanges}
        className={classes.TextField1}
      >
        {countries.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}

export default DropDown;
