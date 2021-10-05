import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import empformServices from "../../../services/empForm.service";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { Form } from "../../../components/patient-ui/Echannelling/useForm";
import {
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import Swal from "sweetalert2";

function Updateform() {
  const id = useParams();

  const initialEmployee = {
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

  //update employee function
  const UpdateEmployee = (event) => {
    event.preventDefault();

    //validation for all the input fields

    if (employee.role.length === 0) {
      alert("Role required");
      return null;
    }

    if (employee.firstName.length === 0) {
      alert("First name is required");
      return null;
    }

    if (employee.lastName.length === 0) {
      alert("Last name is required");
      return null;
    }

    if (employee.email.includes("@", 0)) {
    } else {
      alert("email should contain a @ sign");
      return null;
    }

    if (employee.mobile.length === 10) {
    } else {
      alert("Mobile Number should contain 10 digits");
      return null;
    }

    if (employee.address.length === 0) {
      alert("Last name is required");
      return null;
    }

    empformServices
      .update(employee._id, employee)
      .then((response) => {
        console.log(response.employee);
        Swal.fire(
          "Update Successfull",
          "You have successfully updated the employee",
          "success"
        );
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleInputChange = (e) => {
    console.log(e);
    const { name, value } = e.target;

    setEmployee({
      ...employee,
      [name]: value,
    });
  };

  return (
    <Container maxWidth="md">
      <Form>
        <Container>
          <div>
            <React.Fragment>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Update Employee
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
                      <TextField
                        name="role"
                        label="Role"
                        variant="outlined"
                        required
                        fullWidth={true}
                        value={employee.role}
                      />
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
                        onChange={handleInputChange}
                        value={employee.firstName}
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
                        onChange={handleInputChange}
                        value={employee.lastName}
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
                        onChange={handleInputChange}
                        value={employee.email}
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
                        onChange={handleInputChange}
                        value={employee.mobile}
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
                        onChange={handleInputChange}
                        value={employee.address}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        style={styles.button}
                        startIcon={<AutorenewIcon />}
                        onClick={UpdateEmployee}
                      >
                        Update
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </React.Fragment>
          </div>
        </Container>
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

export default Updateform;
