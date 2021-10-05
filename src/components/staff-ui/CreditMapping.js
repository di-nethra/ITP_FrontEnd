import React from "react";
import { useState } from "react";
import {
  Button,
  Card,
  CardActionArea,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import EditIcon from "@material-ui/icons/Edit";
import paymentCreditService from "../../services/paymentCredit.service";
import PaymentSearch from "./PaymentSearch";
import Swal from "sweetalert2";

const useStyles = makeStyles({
  root: {
    width: "1150px",
  },
  actionArea: {
    padding: "20px",
  },
  layout: {
    maxWidth: "fit-content",
  },
  rows: {
    paddingLeft: "10px",
  },
  icons: {
    paddingLeft: "0px",
  },
  deleteIcon: {
    color: "red",
  },
  editIcon: {
    color: "#005792",
  },
  Headings: {
    color: "#005792",
    paddingBottom: "10px",
  },
  hover: {
    "&:hover": {
      background: "#D9FAFF",
    },
  },
});

export default function CreditMapping(props) {
  // const history = useHistory();
  const [search, setSearch] = useState(" ");
  const [nameVal, setNameVal] = useState(" ");
  const [payVal, setPayVal] = useState(" ");
  const [emailVal, setEmailVal] = useState(" ");
  const [amountVal, setAmountVal] = useState(" ");
  const [dateVal, setDateVal] = useState(" ");

  function getFilter(e) {
    setSearch(e.target.value);
  }
  function searchRecord() {
    paymentCreditService
      .get(search)
      .then((value) => {
        console.log(value.data[0].name);

        setNameVal("Client Name :" + value.data[0].name);
        setEmailVal("Email:" + value.data[0].email);
        setPayVal("Payment ID:" + value.data[0].payment_id);
        setAmountVal("Amount:" + value.data[0].amount);
        setDateVal("Date:" + value.data[0].date);

        Swal.fire("Record Found", "Press Cancel to search Again", "success");
      })
      .catch((e) => {
        Swal.fire(
          "Record not Found!",
          "Check the Payment ID and try again! ",
          "error"
        );
      });
  }
  // console.log("value of search:" + search);

  function cancelButton() {
    window.location.reload();
  }

  function deleteRecord(event) {
    var id = event.currentTarget.value;
    Swal.fire({
      title: "Are you sure?",
      text: "This process canot be undone ",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        paymentCreditService
          .remove(id)
          .then(() => {
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          })
          .catch(() => {
            alert("error Delete");
          });
      }
      window.location.reload();
    });
  }

  function editRecord(event) {
    var id = event.currentTarget.value;
    Swal.fire({
      title: "Enter the new amount",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Update",
      showLoaderOnConfirm: true,
      preConfirm: (updatedAmount) => {
        var updatedamount = {
          amount: updatedAmount,
        };
        paymentCreditService
          .update(id, updatedamount)
          .then(() => {
            window.location.reload();
          })
          .catch((e) => {
            alert("error in update " + e);
          });
      },
    });
  }

  const classes = useStyles();

  return (
    <Grid container spacing={1}>
      <PaymentSearch handleChange={getFilter} />

      <Button
        variant="contained"
        color="primary"
        onClick={searchRecord}
        style={{ marginLeft: "10px" }}
      >
        Search
      </Button>
      <Grid container style={{ marginTop: "20px", marginBottom: "10px" }}>
        <Grid item xs={6}>
          <Card>
            <Grid container>
              <Grid item></Grid>
            </Grid>
            <Typography
              variant="h6"
              style={{ marginTop: "15px", marginLeft: "20px" }}
            >
              {payVal}
            </Typography>
            <Typography
              variant="h6"
              style={{ marginTop: "15px", marginLeft: "20px" }}
            >
              {nameVal}
            </Typography>
            <Typography
              variant="h6"
              style={{ marginTop: "15px", marginLeft: "20px" }}
            >
              {emailVal}
            </Typography>
            <Typography
              variant="h6"
              style={{ marginTop: "15px", marginLeft: "20px" }}
            >
              {amountVal}
            </Typography>
            <Typography
              variant="h6"
              style={{ marginTop: "15px", marginLeft: "20px" }}
            >
              {dateVal}
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={cancelButton}
              style={{
                marginLeft: "400px",
                marginBottom: "20px",
                marginTop: "5px",
              }}
              disabled={payVal === " "}
            >
              Cancel
            </Button>
          </Card>
        </Grid>
      </Grid>

      {props.creditCards.length ? (
        props.creditCards.map((creditCard, index) => (
          <Grid className={classes.layout} item xl={12} lg={12} key={index}>
            <Card className={classes.root}>
              <CardActionArea className={classes.actionArea} href="">
                <Grid container justifyContent="space-between">
                  <Grid item xs={1.5}>
                    <Typography className={classes.Headings}>
                      Payment ID
                    </Typography>
                    <Typography align="center">
                      {creditCard.payment_id}
                    </Typography>
                  </Grid>
                  <Grid item xs={1.5} className={classes.rows}>
                    <Typography align="center" className={classes.Headings}>
                      Email
                    </Typography>
                    <Typography align="center">{creditCard.email}</Typography>
                  </Grid>
                  <Grid item xs={1.5} className={classes.rows}>
                    <Typography align="center" className={classes.Headings}>
                      Client Name
                    </Typography>
                    <Typography align="center">{creditCard.name}</Typography>
                  </Grid>
                  <Grid item xs={1.5} className={classes.rows}>
                    <Typography align="center" className={classes.Headings}>
                      Amount
                    </Typography>
                    <Typography align="center">{creditCard.amount}</Typography>
                  </Grid>
                  <Grid item xs={1.5} className={classes.rows}>
                    <Typography align="center" className={classes.Headings}>
                      Date of Payment
                    </Typography>
                    <Typography align="center">{creditCard.date}</Typography>
                  </Grid>
                  <Grid container item xs={2} className={classes.rows}>
                    <Grid item>
                      <Button
                        className={classes.hover}
                        value={creditCard._id}
                        onClick={editRecord}
                      >
                        <EditIcon className={classes.editIcon} />
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        className={classes.hover}
                        value={creditCard._id}
                        onClick={deleteRecord}
                      >
                        <DeleteIcon className={classes.deleteIcon} />
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </CardActionArea>
            </Card>
          </Grid>
        ))
      ) : (
        <h1>No creditCard found</h1>
      )}
    </Grid>
  );
}
