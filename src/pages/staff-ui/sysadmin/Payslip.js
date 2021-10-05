import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Card } from "@material-ui/core";
import ISPIRITHALEI from "../../../assets/2.png";
import "../../../components/staff-ui/sidebar/sidebar.css";
import Pdf from "react-to-pdf";
import Button from "@material-ui/core/Button";
import empformServices from "../../../services/empForm.service";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

const ref = React.createRef();

//date generation
var today = new Date();
// var dd = String(today.getDate()).padStart(2, "0");
// var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
// var yyyy = today.getFullYear();

let longMonth = today.toLocaleString("en-us", { month: "long" }); /* June */

function Payslip() {
  const id = useParams();

  //salary calculation
  function total() {
    let salary1 = checkRole1().substring(1);
    let totalSalary = Number(salary1) + 6.52;

    return "$" + totalSalary;
  }

  //salary check
  function checkRole1() {
    let salary = "";

    if (employee.role === "Doctor") {
      salary = "$2500";
    } else if (employee.role === "InventoryManager") {
      salary = "$800";
    } else if (employee.role === "Labassistant") {
      salary = "$600";
    } else if (employee.role === "Pharmasist") {
      salary = "$1000";
    } else if (employee.role === "PaymentAdmin") {
      salary = "$700";
    } else if (employee.role === "Receptionist") {
      salary = "$300";
    } else if (employee.role === "SysAdmin") {
      salary = "$1100";
    }
    return salary;
  }

  const initialEmployee = {
    id: "",
    role: "",
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
  };

  const [employee, setEmployee] = useState(initialEmployee);

  //get employee details by id
  const getEmployee = (id) => {
    empformServices
      .getOneEmployee(id)
      .then((response) => {
        setEmployee(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  useEffect(() => {
    getEmployee(id.id);
  }, [id.id]);

  return (
    <>
      <Container>
        <React.Fragment>
          <Card style={{ width: "70%", margin: "auto" }}>
            <div ref={ref}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <div className="logo">
                      <a className="logo1" href="/">
                        <img
                          src={ISPIRITHALEI}
                          alt="brandLogo"
                          className="img-logo"
                        />
                      </a>
                    </div>
                  </Grid>
                  <Grid item xs={12}>
                    <p>NO 647, Utuwakanda,Mawanella</p>
                    <p>Ispirithalei@outlook.com</p>
                    <p>Tel: &nbsp; +9411 2696 696/ +9411 269 696</p>
                  </Grid>
                  <Grid item xs={12}>
                    <p>{employee.role}</p>
                    <p>
                      {employee.firstName}
                      {employee.lastName}
                    </p>
                    <p>{employee.email}</p>
                    <p>{employee.address}</p>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      style={{ textAlign: "center", marginTop: "40px" }}
                    >
                      Payslip for {longMonth}
                    </Typography>
                  </Grid>
                  <Typography style={{ marginTop: "10px" }}>
                    Earnings
                  </Typography>
                  <Grid container style={{ marginTop: "10px" }}>
                    <Grid item xs={10}>
                      <p>Basic Salary</p>
                    </Grid>
                    <Grid item xs={2}>
                      <p>{checkRole1()}</p>
                    </Grid>
                  </Grid>
                  <Grid container style={{ marginTop: "2px" }}>
                    <Grid item xs={10}>
                      <p>House Rent Allowence</p>
                    </Grid>
                    <Grid item xs={2}>
                      <p>$9.45</p>
                    </Grid>
                  </Grid>
                  <Grid container style={{ marginTop: "2px" }}>
                    <Grid item xs={10}>
                      <p>Gas Allowence</p>
                    </Grid>
                    <Grid item xs={2}>
                      <p>$6.51</p>
                    </Grid>
                  </Grid>
                  <Typography style={{ marginTop: "20px" }}>
                    Deductions
                  </Typography>
                  <Grid container style={{ marginTop: "10px" }}>
                    <Grid item xs={10}>
                      <p>Professional Tax</p>
                    </Grid>
                    <Grid item xs={2}>
                      <p>$5.99</p>
                    </Grid>
                  </Grid>
                  <Grid container style={{ marginTop: "2px" }}>
                    <Grid item xs={10}>
                      <p>VAT</p>
                    </Grid>
                    <Grid item xs={2}>
                      <p>$3.45</p>
                    </Grid>
                  </Grid>
                  <Grid container style={{ marginTop: "30px" }}>
                    <Grid item xs={10}>
                      <Typography>Total</Typography>
                    </Grid>
                    <Grid item xs={2}>
                      <p>{total()}</p>
                    </Grid>
                  </Grid>
                </Grid>
              </CardContent>
            </div>
          </Card>
        </React.Fragment>
      </Container>
      <div style={{ marginTop: 20, textAlign: "center", marginBottom: 10 }}>
        <Pdf targetRef={ref} filename={"Payslip for month of " + longMonth}>
          {({ toPdf }) => (
            <Button
              size="large"
              variant="contained"
              color="primary"
              type="submit"
              onClick={toPdf}
            >
              Generate Pay Slip
            </Button>
          )}
        </Pdf>
      </div>
    </>
  );
}

export default Payslip;
