import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import MenuItem from "@material-ui/core/MenuItem";

const role = [
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

function Role() {
  const [Role, setRole] = useState("");
  const handleChanges = (event) => {
    setRole(event.target.value);
  };

  return (
    <div>
      <TextField
        id="standard-select-country"
        select
        variant="outlined"
        value={Role}
        onChange={handleChanges}
      >
        {role.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </div>
  );
}

export default Role;