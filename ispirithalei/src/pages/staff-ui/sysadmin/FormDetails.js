import React, { Component } from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import empFormService from "../../../services/empForm.service";
import Role from "./Role";
import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import { Card } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import AutorenewIcon from "@material-ui/icons/Autorenew";

export class FormDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();

    const data = {
      firstName: this.props.values.firstName,
      lastName: this.props.values.lastName,
      email: this.props.values.email,
      mobile: this.props.values.mobile,
      address: this.props.values.address,
    };

    console.log(this.props.values);

    console.log(data.email);
    empFormService
      .create(data)

      .then((response) => {
        alert("success");
        console.log("inside create" + response.data);
        console.log("inside then" + response.data);
      })
      .catch((e) => {
        // alert(e );
        console.log("this is the error:" + e);
      });

    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <MuiThemeProvider>
          <React.Fragment>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Employee Form
                </Typography>
                <br></br>
                <br></br>

                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <p style={styles.label}>Role</p>
                  </Grid>
                  <Grid item xs={5}>
                    <Role />
                  </Grid>

                  <Grid item xs={4}>
                    <p style={styles.label}>First Name</p>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="First Name"
                      variant="outlined"
                      fullWidth={true}
                      onChange={handleChange("firstName")}
                      defaultValue={values.firstName}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <p style={styles.label}>Last Name</p>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Last Name"
                      variant="outlined"
                      fullWidth={true}
                      onChange={handleChange("lastName")}
                      defaultValue={values.lastName}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <p style={styles.label}>Email</p>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Email"
                      variant="outlined"
                      fullWidth={true}
                      onChange={handleChange("email")}
                      defaultValue={values.email}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <p style={styles.label}>Mobile</p>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Mobile"
                      variant="outlined"
                      fullWidth={true}
                      onChange={handleChange("mobile")}
                      defaultValue={values.email}
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <p style={styles.label}>Address</p>
                  </Grid>
                  <Grid item xs={5}>
                    <TextField
                      label="Adress"
                      variant="outlined"
                      fullWidth={true}
                      onChange={handleChange("address")}
                      defaultValue={values.email}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="secondary"
                      style={styles.button}
                      startIcon={<AutorenewIcon />}
                    >
                      Reset
                    </Button>

                    <Button
                      variant="contained"
                      color="primary"
                      style={styles.button}
                      startIcon={<SendIcon />}
                      onClick={this.continue}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </React.Fragment>
        </MuiThemeProvider>
      </div>
    );
  }
}

const styles = {
  button: {
    margin: 20,
    left: 415,
  },

  label: {
    margin: 30,
  },
};

export default FormDetails;
