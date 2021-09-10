import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
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

function DropDown() {
  const [Country, setCountry] = useState("");
  const handleChanges = (event) => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <TextField
        id="standard-select-country"
        select
        fullWidth="true"
        variant="outlined"
        value={Country}
        onChange={handleChanges}
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
