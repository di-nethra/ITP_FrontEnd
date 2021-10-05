import React from "react";
import TextField from "@material-ui/core/TextField";

export default function PaymentSearch(props) {
  console.log("heading:" + props.heading);
  return (
    <div>
      <TextField
        label="Enter Payment ID to Search"
        variant="outlined"
        type="search"
        onChange={props.handleChange}
      />
      <h1>{props.heading}</h1>
    </div>
  );
}
