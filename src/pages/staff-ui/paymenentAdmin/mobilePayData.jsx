import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import MobileServices from "../../../services/MobilePay.service";

import { useEffect, useState } from "react";

const columns = [
  {
    field: "id",
    headerName: "Full Name",
    width: 275,
  },
  {
    field: "name",
    headerName: "Full Name",
    width: 275,
  },
  {
    field: "phonenumber",
    headerName: "Mobile Number",
    width: 275,
    editable: true,
  },
];

function MobilePayPayments() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    MobileServices.getAll()
      .then((response) => {
        setDetails(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let rows = [];
  for (const detail of details) {
    rows.push({
      id: detail._id,
      name: detail.name,
      phonenumber: detail.phonenumber,
    });
  }
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}

export default MobilePayPayments;
