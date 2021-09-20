import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import RefundServices from "../../../services/refundPageServices";

import { useEffect, useState } from "react";

const columns = [
  {
    field: "id",
    headerName: "Full Name",
    width: 275,
  },
  {
    field: "paymentid",
    headerName: "Full Name",
    width: 275,
  },
  {
    field: "paragraph",
    headerName: "Mobile Number",
    width: 275,
    editable: true,
  },
];

function RefundData() {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = () => {
    RefundServices.getAll()
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
      paymentid: detail.paymentid,
      paragraph: detail.paragraph
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

export default RefundData;
