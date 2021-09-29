import React from "react";
import CardContent from "@material-ui/core/CardContent";
import { Card } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { useState, useEffect } from "react";
import inquiryServices from "../../services/inquiry.Service";
import { useStyles } from "@material-ui/pickers/views/Calendar/SlideTransition";
import { Button } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import * as Yup from "yup";
import { Formik } from "formik";
import TextField from "../../components/patient-ui/Echannelling/TextFeild";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const INITIAL_FORM_STATE = {
  title: "",
  message: "",
};

const FORM_VALIDATION = Yup.object().shape({
  title: Yup.string().required("Please enter a heading for your inquiry"),
  message: Yup.string().required("Please enter your inquiry in the above box"),
});

function PostMessageForm() {
  useEffect(() => {
    getInqruiy();
  }, []);

  const DemoInquiry = () => {
    setTitle("E-Chanell Cancel");
    setMessage("I had made an chanelling thorugh the system. I want to cancel my chanelling");   
  };




  const [inquiries, setInquiries] = useState([]);

  const columns = [
    // { field: "id", headerName: "id", width: 0,  },
    { field: "title", headerName: "Title", width: 450 },
    {
      field: "message",
      headerName: "Message",
      width: 800,
      editable: false,
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

  const handleSubmit = (e) => {
    console.log("submitted");

    e.preventDefault();

    const data = {
      title: title,
      message: message,
    };

    inquiryServices
      .create(data)

      .then((response) => {
        // console.log("inside create" + response.data);
        // console.log("inside then" + response.data);
        toast.success("Sucesfully Submitted the inquiry", {
          className: "error-toast",
          draggable: true,
          position: toast.POSITION.TOP_RIGHT,
          autoClose: false,
        });
        window.location.reload();
      })
      .catch((e) => {
        console.log("this is the error:" + e);
      });
  };

  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handletitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handlmessageChange = (event) => {
    setMessage(event.target.value);
  };
  const classes = useStyles();

  return (
    <div style={{ margin: 100 }}>
      <Card>
        <CardContent>
          <h3>Inquiry</h3>
          <h4>Make your Inquiry using the below form</h4>
          <br />
          <Formik
            initialValues={{
              ...INITIAL_FORM_STATE,
            }}
            validationSchema={FORM_VALIDATION}
            onSubmit={handleSubmit}
          >
            <form
              autoComplete="off"
              className={`${classes.root} ${classes.form}`}
              onSubmit={handleSubmit}
            >
              <TextField
                name="title"
                variant="outlined"
                label="Inquiry Heading"
                value={title}
                onChange={handletitleChange}
                style={{ margin: 10 }}
                fullWidth
                required
              />
              <br></br>
              <TextField
                name="message"
                variant="outlined"
                label="Briefly type your inquiry here"
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={handlmessageChange}
                style={{ margin: 10 }}
                required
              />
              <div className="buttonAlignRight">
              <Button
                style={{ backgroundColor: "#005792", borderRadius: "5px" }}
                variant="contained"
                color="primary"
                size="medium"
                type="submit"
                className={classes.postBtn}
                startIcon={<SendIcon />}>
                Inquiry
              </Button>
              <Button size="medium" 
              variant="contained"
               color="secondary"
               onClick={DemoInquiry}>
               DEMO
               </Button>
              <ToastContainer />
              </div>
            </form>
          </Formik>
        </CardContent>
      </Card>
      <br />

      <div style={{ marginTop: 20 }}>
        <Card>
          <CardContent>
            <h3>Inquiries </h3>
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
      </div>
    </div>
  );
}

export default PostMessageForm;
