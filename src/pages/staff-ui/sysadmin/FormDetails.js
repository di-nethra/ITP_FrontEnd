import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import empFormService from "../../../services/empForm.service";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import SendIcon from "@material-ui/icons/Send";
import { Form } from "../../../components/patient-ui/Echannelling/useForm";
import MenuItem from "@material-ui/core/MenuItem";
import Swal from "sweetalert2";

function EmpForm() {
  const handleSubmit = (e) => {
    //password generator
    var randomstring = Math.random().toString(36).slice(-8);
    console.log(randomstring);

    e.preventDefault();

    const data = {
      role: role,
      firstName: selectedFirstName,
      lastName: selectedLastName,
      email: selectedEmail,
      mobile: selectedMobile,
      address: selectedAddress,
      password: randomstring,
    };

    if (data.email.includes("@", 0)) {
    } else {
      alert("email should contain a @ sign");
      return null;
    }

    var tempMobile = data.mobile;
    if (tempMobile.length === 10) {
    } else {
      alert("Mobile NO should contain 10 digits");
      return null;
    }

    empFormService
      .create(data)

      .then((response) => {

        alert("success");
        window.location.reload();
        console.log("inside create" + response.data);
        console.log("inside then" + response.data);

      })
      .catch((e) => {
        // alert(e );
        Swal.fire(
          "Submited Successfully",
          "You have successfully submited a employee",
          "success"
        );
        window.location.reload(10);
        console.log("this is the error:" + e);
      });
  };

  const [selectedFirstName, setSelectedFirstName] = useState("");
  const [selectedLastName, setSelectedLastName] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [selectedMobile, setSelectedMobile] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");

  const handleFirstNameChange = (event) => {
    setSelectedFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setSelectedLastName(event.target.value);
  };
  const handleEmailChange = (event) => {
    setSelectedEmail(event.target.value);
  };
  const handleMobileChange = (event) => {
    setSelectedMobile(event.target.value);
  };
  const handleAddressChange = (event) => {
    setSelectedAddress(event.target.value);
  };
  const [role, setRole] = useState("");

  const handleRoleChange = (event) => {
    setRole(event.target.value);
    console.log(event.target.value);
  };

  return (
    <Container maxWidth="md">
      <Form>
        <container>
          <div>
            <React.Fragment>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Employee Form
                  </Typography>
                  <br />
                  <br />
                  <br />
                  <br />

                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <p style={styles.label}>Role</p>
                    </Grid>
                    <Grid item xs={5}>
                      <Select
                        variant="outlined"
                        style={styles.formControl}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={role}
                        onChange={handleRoleChange}
                      >
                        <MenuItem value="Doctor">Doctor</MenuItem>
                        <MenuItem value="InventoryManager">
                          InventoryManager
                        </MenuItem>
                        <MenuItem value="Labassistant">Labassistant</MenuItem>
                        <MenuItem value="Pharmasist">Pharmasist</MenuItem>
                        <MenuItem value="PaymentAdmin">PaymentAdmin</MenuItem>
                        <MenuItem value="Receptionist">Receptionist</MenuItem>
                        <MenuItem value="SysAdmin">SysAdmin</MenuItem>
                      </Select>
                    </Grid>

                    <Grid item xs={4}>
                      <p style={styles.label}>First Name</p>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        name="firstName"
                        label="First Name"
                        variant="outlined"
                        required
                        fullWidth={true}
                        onChange={handleFirstNameChange}
                        defaultValue={selectedFirstName}
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <p style={styles.label}>Last Name</p>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        name="lastName"
                        label="Last Name"
                        variant="outlined"
                        required
                        fullWidth={true}
                        onChange={handleLastNameChange}
                        defaultValue={selectedLastName}
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <p style={styles.label}>Email</p>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        name="email"
                        label="Email"
                        variant="outlined"
                        required
                        fullWidth={true}
                        onChange={handleEmailChange}
                        defaultValue={selectedEmail}
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <p style={styles.label}>Mobile</p>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        type="number"
                        name="mobile"
                        label="Mobile"
                        variant="outlined"
                        required
                        fullWidth={true}
                        InputProps={{ inputProps: { min: 10, max: 10 } }}
                        onChange={handleMobileChange}
                        defaultValue={selectedMobile}
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <p style={styles.label}>Address</p>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        name="address"
                        label="Adress"
                        variant="outlined"
                        required
                        fullWidth={true}
                        onChange={handleAddressChange}
                        defaultValue={selectedAddress}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={styles.button}
                        onClick={handleSubmit}
                        startIcon={<SendIcon />}
                      >
                        submit
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </React.Fragment>
          </div>
        </container>
      </Form>
    </Container>
  );
}

const styles = {
  button: {
    margin: 20,
    left: 415,
  },

  label: {
    margin: 30,
  },

  formControl: {
    minWidth: 228,
  },
};

export default EmpForm;
