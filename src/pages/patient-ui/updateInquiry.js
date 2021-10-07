import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import CardContent from "@material-ui/core/CardContent";
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
import { useHistory } from "react-router";
import { Update } from "@material-ui/icons";
import { ToastContainer, toast } from "react-toastify";

function UpdateInquiry() {
  let history = useHistory();
  const id = useParams();
  // console.log(id.id);

  // const initialEmployee = {
  //   title: "",
  //  message: "",

  // };

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id.id]);

  //update inquiry
  const UpdateInquiry = (event) => {
    event.preventDefault();

    //validation feilds

    var val = inquiries.title;
    if(val.length === 0){
      toast.error("Inquiry Title feild is required", {
        className: "error-toast",
        draggable: true,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
      });
      return null;
    }

    var val2 =inquiries.message;
    if(val2.length === 0){
      toast.error("Inquiry Message feild is required", {
        className: "error-toast",
        draggable: true,
        position: toast.POSITION.TOP_RIGHT,
        autoClose: false,
      });
      return null;
    }

    inquriyServices
      .update(inquiries._id, inquiries)
      .then((response) => {
        // console.log(response.inquiries);
        Swal.fire(
          "Update Successfull",
          "You have successfully updated the inquiries",
          "success"
        );
        history.push("/staff/sysadmin/Inquirires");
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
            <br />
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
                        // label="title"
                        variant="outlined"
                        required={true}
                        // fullWidth={true}
                        style={{ width: 300 }}
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
                        // label="message"
                        variant="outlined"
                        required
                        multiline
                        // fullWidth={true}
                        style={{ width: 580 }}
                        onChange={handleInputChange}
                        value={inquiries.message}
                      />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        color="primary"
                        style={styles.button}
                        startIcon={<Update />}
                        onClick={UpdateInquiry}
                      >
                        Update
                      </Button>
                      <ToastContainer />
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
