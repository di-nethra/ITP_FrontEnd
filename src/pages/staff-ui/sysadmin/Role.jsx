import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";
import { Select } from "@material-ui/core";

const roles = [
  {
    value: "Doc",
    label: "Doctor",
  },
  {
    value: "Nur",
    label: "Nurse",
  },
  {
    value: "Pha",
    label: "Pharmasist",
  },
];

function Role(props) {
  const [role, setRole] = useState("");
  const handleRoleChange = event => {
    setRole(event.currentTarget.value);
    props.onChange(role);
    console.log(role);
  }
 

  return (
    <div>
      <Select
        id="standard-select-country"
        variant="outlined"
        value={role}
        onChange={handleRoleChange}
      >
        
          <MenuItem value="1">1 
          </MenuItem>
      
      </Select>
    </div>
  );
}

export default Role;