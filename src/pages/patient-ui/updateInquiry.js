import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
import AutorenewIcon from "@material-ui/icons/Autorenew";
import { Form } from "../../components/patient-ui/Echannelling/useForm";
import {
  Button,
  Card,
  Container,
  TextField,
  Typography,
} from "@material-ui/core";
import Swal from "sweetalert2";
import inquriyServices from "../../services/inquiry.Service";







function UpdateInquiry() {


  const id = useParams();
  console.log(id.id);

  const initialEmployee = {
    title: "",
   message: "",
   
  };


  const [inquiries, setInquiries] = useState([]);

   //get Inquiry details by id
  const getInqruiy = (id) => {
    inquriyServices
      .getOneInquiry(id)
      .then((response) => {
        setInquiries(response.data);
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
    console.log("name print", inquiries.title);
  };

  useEffect(() => {
    getInqruiy(id.id);
  }, [id.id]);

  //update inquiry
  const UpdateInquiry = (event) => {
    event.preventDefault();
    

    inquriyServices
      .update(inquiries._id, inquiries)
      .then((response) => {
        console.log(response.inquiries);
        Swal.fire(
          "Update Successfull",
          "You have successfully updated the inquiries",
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

    setInquiries({
      ...inquiries,
      [name]: value,
    });
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
                    Update Inquiry
                  </Typography>
                  <br />
                  <br />
                  <br />
                  <br />

                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <p style={styles.label}>Title</p>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        name="title"
                        label="title"
                        variant="outlined"
                        required
                        fullWidth={true}
                        value={inquiries.title}
                        onChange={handleInputChange}
                      />
                    </Grid>

                    <Grid item xs={4}>
                      <p style={styles.label}>Message</p>
                    </Grid>
                    <Grid item xs={5}>
                      <TextField
                        name="message"
                        label="message"
                        variant="outlined"
                        required
                        fullWidth={true}
                        onChange={handleInputChange}
                        value={inquiries.message}
                      />
                    </Grid>

                    

                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        style={styles.button}
                        startIcon={<AutorenewIcon />}
                        onClick={UpdateInquiry}
                      >
                        Update
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

export default UpdateInquiry;

