import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import { Button } from "@material-ui/core";
import { DeleteOutline } from "@material-ui/icons";
import inquiryServices from "../../../services/inquiry.Service";
import Swal from "sweetalert2";
import { useTheme } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { Card } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import PDF from "../../../components/PDFW";

function Inquiries() {
  const headers = ["ID", "Title", "Message"];

  useEffect(() => {
    getInqruiy();
  }, []);

  const [inquiries, setInquiries] = useState([]);

  const columns = [
    // { field: "id", headerName: "id", width: 0,  },
    { field: "title", headerName: "Title", width: 250 },
    {
      field: "message",
      headerName: "Message",
      width: 700,
      editable: false,
    },
    {
      field: "action",
      headerName: "Action",
      width: 160,
      sortable: false,
      editable: false,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/patient/inquiry/editinquiry/" + params.row.id}>
              <Button
                size="small"
                color="primary"
                variant="contained"
                style={{ width: "50%" }}
              >
                <EditIcon />
              </Button>
            </Link>

            <Button
              size="small"
              color="secondary"
              variant="contained"
              value={params.row.id}
              onClick={deleteInquiry}
              style={{ width: "20%" }}
              marginLeft="100px"
            >
              <DeleteOutline />
            </Button>
          </>
        );
      },
    },
  ];

  let rows = [];
  for (const inquiry of inquiries) {
    rows.push({
      id: inquiry._id,
      title: inquiry.title,
      message: inquiry.message,
    });
  }

  const getInqruiy = () => {
    inquiryServices
      .getAll()
      .then((response) => {
        setInquiries(response.data);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const theme = useTheme();

  const deleteInquiry = (event) => {
    let id = event.currentTarget.value;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: theme.palette.secondary.main,
      cancelButtonColor: theme.palette.primary.main,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        inquiryServices
          .remove(id)
          .then(() => {
            Swal.fire("Deleted!", "Your session has been deleted.", "success");
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };
  return (
    <Card>
      <CardContent>
        <h3>Inquiries </h3>
        <br />
        <PDF data={rows} headers={headers} title="Monthly Inquiry Report" />
        <br />
        <div style={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            disableSelectionOnClick
            style={{ backgroundColor: "white" }}
          />
        </div>
      </CardContent>
    </Card>
  );
}
export default Inquiries;
