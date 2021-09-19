import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
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

const earnings = [
  { name: "Basic Salary", price: "$9.99" },
  { name: "House Rent Allowence", price: "$3.45" },
  { name: "Gas Allowence", price: "$6.51" },
];

const deductions = [
  { name: "Professional Tax", price: "$9.99" },
  { name: "VAT", price: "$3.45" },
];

//date generation
var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
var yyyy = today.getFullYear();

today = dd + "/" + mm + "/" + yyyy + " payslip";

const Payslip = () => {
  const id = useParams();
  console.log(id.id);

  const initialEmployee = {
    id:"",
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
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    console.log("name print", employee.firstName);
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
                    <p></p>
                    <p>Email: Ispirithalei@outlook.com</p>
                    <p>Tel : +9411 2696 696/ +9411 269 696</p>
                  </Grid>

                  <Grid item xs={12}>
                    <p>Payslip for month September</p>
                  </Grid>

                  <p>Earnings</p>
                  <Grid item xs={12}>
                    <List disablePadding>
                      {earnings.map((earning) => (
                        <ListItem key={earning.name}>
                          <ListItemText primary={earning.name} />
                          <Typography variant="body2">
                            {earning.price}
                          </Typography>
                        </ListItem>
                      ))}

                      <br></br>
                      <p>Deductions &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </p>
                      {deductions.map((deduction) => (
                        <ListItem key={deduction.name}>
                          <ListItemText primary={deduction.name} />
                          <Typography variant="body2">
                            {deduction.price}
                          </Typography>
                        </ListItem>
                      ))}
                      <br></br>
                      <ListItem>
                        <ListItemText primary="Total" />
                        <Typography variant="subtitle1">$34.06</Typography>
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </CardContent>
            </div>
          </Card>
        </React.Fragment>
      </Container>
      <div style={{ marginTop: 20, textAlign: "center", marginBottom: 10 }}>
        <Pdf targetRef={ref} filename={today}>
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
};

export default Payslip;
